using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManagement.Resource.API.data;
using ProjectManagement.Resource.API.models;

namespace ProjectManagement.Resource.API.cotntrollers
{
    [Route("api/projects")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        ApplicationContext db;
        private string userId => User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;

        public ProjectController(ApplicationContext context)
        {
            db = context;
        }

        [Route("")]
        [Authorize]
        [HttpGet]
        public IActionResult GetProjects(int? id)
        {
            if (id != null)
            {
                var user = db.Users.Include(u => u.Projects).Where(u => u.UserId == id).ToList();
                
                return Ok(user);
            }
            return BadRequest(ModelState);
        }
    }
}
