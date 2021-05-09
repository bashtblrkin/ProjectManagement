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

        [Route("create")]
        [Authorize]
        [HttpPost]
        public IActionResult CreateProject(Project project)
        {
            if (ModelState.IsValid)
            {
                User user = GetUser(userId);
                Role role = GetRole(3);
                if (user != null && role != null)
                {
                    project.Owner = user;
                    ProjectUser projectUser = new ProjectUser()
                    {
                        Project = project,
                        User = user,
                        Role = role
                    };
                    db.ProjectUser.Add(projectUser);
                    db.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("adduser")]
        [Authorize]
        [HttpPost]
        public IActionResult AddUserToProject(UserToProject userToProject)
        {
            var user = GetUserByEmail(userToProject.email);
            if (user != null)
            {
                var userTopProject = GetProjectUser(user.UserId, userToProject.ProjectId);
                if (userTopProject != null)
                {
                    return BadRequest("USER_ALREADY_EXIST");
                }
                ProjectUser projectUser = new ProjectUser()
                {
                    ProjectId = userToProject.ProjectId,
                    UserId = user.UserId,
                    RoleId = userToProject.RoleId
                };
                db.ProjectUser.Add(projectUser);
                db.SaveChanges();
                return Ok(projectUser);
            }
            return BadRequest("EMAIL_NOT_FOUND");
        }

        [Route("project")]
        [Authorize]
        [HttpGet]
        public IActionResult GetCurrentProject(int id)
        {
            var currentProject = from projectuser in db.ProjectUser
                                 join project in db.Projects on projectuser.ProjectId equals project.ProjectId
                                 join user in db.Users on projectuser.UserId equals user.UserId
                                 join role in db.Roles on projectuser.RoleId equals role.Id
                                 join owner in db.Users on project.OwnerUserId equals owner.UserId
                                 where project.ProjectId == id && user.UserId == Convert.ToInt32(userId)
                                 select new
                                 {
                                     name = project.name,
                                     description = project.description,
                                     created_at = project.created_at,
                                     role = role.name,
                                     owner_avatar = owner.avatar
                                 };
            if (currentProject != null)
            {
                return Ok(currentProject);
            }
            return BadRequest();
        }

        [Route("getusers")]
        [Authorize]
        [HttpGet]
        public IActionResult GetUsersOfCurrentProject(int id)
        {
            var users = from projectuser in db.ProjectUser
                        join user in db.Users on projectuser.UserId equals user.UserId
                        where projectuser.ProjectId == id
                        select new
                        {
                            UserId = user.UserId,
                            fio = user.fio
                        };
            if (users != null)
            {
                return Ok(users);
            }
            return BadRequest();
        }

        private User GetUser(string id)
        {
            return db.Users.SingleOrDefault(user => user.UserId == Convert.ToInt32(userId));
        }

        private User GetUserByEmail(string email)
        {
            return db.Users.SingleOrDefault(user => user.email == email);
        }

        private Role GetRole(int id)
        {
            return db.Roles.SingleOrDefault(role => role.Id == id);
        }

        private ProjectUser GetProjectUser(int UserId, int ProjectId)
        {
            return db.ProjectUser.SingleOrDefault(pu => pu.UserId == UserId && pu.ProjectId == ProjectId);
        }

    }
}
