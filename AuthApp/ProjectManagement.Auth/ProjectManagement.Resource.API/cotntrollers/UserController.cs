using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}
