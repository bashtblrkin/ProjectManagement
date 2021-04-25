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

namespace ProjectManagement.Auth.API.controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountController : Controller
    {
        ApplicationContext db;
        MD5 md5 = System.Security.Cryptography.MD5.Create();
        public AccountController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost("{create}")]
        public IActionResult Post(Account account)
        {
            if (ModelState.IsValid)
            {
                account.password =  CreateMD5(account.password);
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
    }
}
