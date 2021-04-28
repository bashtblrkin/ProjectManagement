using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Auth.API.data;
using ProjectManagement.Auth.API.models;
using System.Text;
using Microsoft.Extensions.Options;
using ProjectManagement.Auth.Common;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace ProjectManagement.Auth.API.controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountController : Controller
    {
        ApplicationContext db;
        MD5 md5 = MD5.Create();

        public IOptions<AuthOptions> AuthOptions { get; }

        public AccountController(ApplicationContext context, IOptions<AuthOptions> authOptions)
        {
            db = context;
            AuthOptions = authOptions;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody]Login request)
        {
            var user = AuthentificateUser(request.Email, request.Password);

            if (user != null)
            {
                var token = GenerateJWT(user);

                return Ok(new
                {
                    access_token = token
                });

            }

            return Unauthorized();
        }

        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody]Account account)
        {
            if (ModelState.IsValid)
            {
                var user = db.Accounts.SingleOrDefault(s => s.email == account.email);
                if (user != null)
                {
                    return BadRequest("Email exists");
                }
                account.password = CreateMD5(account.password);
                db.Accounts.Add(account);
                db.SaveChanges();
                return Ok(account);
            }
            return BadRequest(ModelState);
        }

        public string CreateMD5(string input)
        {
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
            byte[] hashBytes = md5.ComputeHash(inputBytes);

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hashBytes.Length; i++)
            {
                sb.Append(hashBytes[i].ToString("X2"));
            }
            return sb.ToString();
        }

        private Account AuthentificateUser(string email, string password)
        {
            string encPassword = CreateMD5(password);
            return db.Accounts.SingleOrDefault(u => u.email == email && u.password == encPassword);
        }

        private string GenerateJWT(Account user)
        {
            var authParams = AuthOptions.Value;

            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Email, user.email),
                new Claim(JwtRegisteredClaimNames.Sub, user.id.ToString())
            };

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifetime),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
