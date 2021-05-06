using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Resource.API.data;
using ProjectManagement.Resource.API.models;

namespace ProjectManagement.Resource.API.cotntrollers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : Controller
    {
        ApplicationContext db;

        private string userId => User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;
        public UserController(ApplicationContext context)
        {
            db = context;
        }

        [Route("create")]
        [HttpPost]
        public IActionResult Create(User user)
        {   
            if (ModelState.IsValid)
            {
                db.Users.Add(user);
                db.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        [Route("im")]
        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            User user = GetUser();
            if (user != null)
            {
                return Ok(user);
            }
            return BadRequest();
        }

        public User GetUser()
        {
            return db.Users.SingleOrDefault(user => user.UserId == Convert.ToInt32(userId));
        }
    }
}
