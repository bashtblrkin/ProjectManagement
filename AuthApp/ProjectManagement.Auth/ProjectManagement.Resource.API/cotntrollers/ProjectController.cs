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
        public IActionResult GetProjects()
        {
            if (userId != null)
            {
                //var user = db.Users.Where(u => u.UserId == Convert.ToInt32(userId)).Include(u => u.Projects).ToList();

                var projects = from projectuser in db.ProjectUser
                               join project in db.Projects on projectuser.ProjectId equals project.ProjectId
                               join user in db.Users on projectuser.UserId equals user.UserId
                               join role in db.Roles on projectuser.RoleId equals role.Id
                               where user.UserId == Convert.ToInt32(userId)
                               select new
                               {    
                                   Id = project.ProjectId,
                                   Title = project.name,
                                   Description = project.description,
                                   Role = role.name,
                                   Users = project.Users
                               };

                return Ok(projects);
            }
            return BadRequest(ModelState);
        }
    }
}
