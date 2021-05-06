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
using System.Net;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;


namespace ProjectManagement.Auth.API.controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AccountController : Controller
    {
        ApplicationContext db;
        MD5 md5 = MD5.Create();
        public IOptions<AuthOptions> AuthOptions { get; }
        private static readonly HttpClient client = new HttpClient();
        public AccountController(ApplicationContext context, IOptions<AuthOptions> authOptions)
        {
            db = context;
            AuthOptions = authOptions;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody]Login request)
        {
            var user = uniqEmail(request.Email);
            if (user == null)
            {
                return BadRequest("Email not found");
            }
            
            var authUser = AuthentificateUser(request.Email, request.Password);

            if (authUser != null)
            {
                var token = GenerateJWT(authUser);

                return Ok(new
                {
                    access_token = token
                });

            }

            return Unauthorized();
        }

        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Account account)
        {
            if (ModelState.IsValid)
            {
                var user = uniqEmail(account.email);
                if (user != null)
                {
                    return BadRequest("Email exists");
                }

                account.password = CreateMD5(account.password);
                db.Accounts.Add(account);
                db.SaveChanges();

                var createdUser = GetUser(account.email);

                var url = await PostRequestAsyncAddUser(createdUser);
                return Ok(url);
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

        private User GetUser(string email)
        {
            var account = db.Accounts.SingleOrDefault(u => u.email == email);
            if(account != null)
            {
                User user = new User
                {
                    UserId = account.id,
                    email = account.email,
                    fio = account.fio,
                    created_at = DateTime.Now,
                    avatar = "https://ui-avatars.com/api/?name=" + account.fio + "&rounded=true&color=ffffff&background=4A5BF4"
                };
                return user;
            }
            return new User();
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

        private Account uniqEmail(string email)
        {
            return db.Accounts.SingleOrDefault(s => s.email == email);
        }

        private static async Task<Uri> PostRequestAsyncAddUser(User user)
        {
            
            HttpResponseMessage response = await client.PostAsJsonAsync(
                "http://localhost:56299/api/users/create", user);
            response.EnsureSuccessStatusCode();

            return response.Headers.Location;
        }
    }
}
