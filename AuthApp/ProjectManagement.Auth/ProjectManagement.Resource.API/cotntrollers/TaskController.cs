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
    [Route("api/tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        ApplicationContext db;
        private string userId => User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;

        public TaskController(ApplicationContext context)
        {
            db = context;
        }

        [Route("project")]
        [Authorize]
        [HttpGet]
        public IActionResult GetTaskByProject(int id)
        {
            var tasks = from task in db.Tasks
                        join status in db.Statuses on task.StatusId equals status.StatusId
                        join priority in db.Priorities on task.PriorityId equals priority.PriorityId
                        join usertask in db.UserTask on task.DbTaskId equals usertask.TaskId
                        join user in db.Users on usertask.UserId equals user.UserId
                        where task.ProjectId == id
                        select new
                        {   
                            id = task.DbTaskId,
                            name = task.name,
                            description = task.description,
                            start_date = task.start_date,
                            end_date = task.end_date,
                            executor = user.fio,
                            status = status.name,
                            priority = priority.name
                        };
            if (tasks != null)
            {
                return Ok(tasks);
            }
            return BadRequest();
        }

        [Route("task")]
        [Authorize]
        [HttpGet]
        public IActionResult GetTaskById(int id)
        {

            var executor = db.UserTask.SingleOrDefault(ut => ut.TaskId == id);
            bool mytask = false;

            if (executor != null)
            {
                if (executor.UserId == Convert.ToInt32(userId) )
                {
                    mytask = true;
                }
            }

            var newTask = from task in db.Tasks
                        join status in db.Statuses on task.StatusId equals status.StatusId
                        join priority in db.Priorities on task.PriorityId equals priority.PriorityId
                        join usertask in db.UserTask on task.DbTaskId equals usertask.TaskId
                        join user in db.Users on usertask.UserId equals user.UserId
                        where task.DbTaskId == id
                        select new
                        {
                            id = task.DbTaskId,
                            name = task.name,
                            description = task.description,
                            start_date = task.start_date,
                            end_date = task.end_date,
                            executor = user.fio,
                            executorId = user.UserId,
                            avatar = user.avatar_min,
                            status = status.name,
                            priority = priority.name,
                            mytask
                        };
            if (newTask != null)
            {
                return Ok(newTask);
            }
            return BadRequest();
        }

        [Route("user")]
        [Authorize]
        [HttpGet]
        public IActionResult GetTaskByUser()
        {
            var tasks = from task in db.Tasks
                        join status in db.Statuses on task.StatusId equals status.StatusId
                        join priority in db.Priorities on task.PriorityId equals priority.PriorityId
                        join project in db.Projects on task.ProjectId equals project.ProjectId
                        join usertask in db.UserTask on task.DbTaskId equals usertask.TaskId
                        join user in db.Users on usertask.UserId equals user.UserId
                        where user.UserId == Convert.ToInt32(userId)
                        orderby project.name
                        select new
                        {   
                            projectId = project.ProjectId,
                            project = project.name,
                            name = task.name,
                            description = task.description,
                            start_date = task.start_date,
                            end_date = task.end_date,
                            status = status.name,
                            priority = priority.name,
                            taskId = task.DbTaskId
                        };
            if (tasks != null)
            {
                return Ok(tasks);
            }

            return BadRequest();
        }

        [Route("create")]
        [Authorize]
        [HttpPost]
        public IActionResult CreateTask(AddTask addTask)
        {
            System.Diagnostics.Debug.WriteLine(addTask.end_date);
            var user = GetUser(addTask.UserId);
            DbTask task = new DbTask()
            {   
                ProjectId = addTask.ProjectId,
                name = addTask.name,
                description = addTask.description,
                start_date = addTask.start_date,
                end_date = addTask.end_date,
                StatusId = 3,
                PriorityId = addTask.PriorityId,
            };
            if (user != null)
            {
                UserTask userTask = new UserTask()
                {
                    DbTask = task,
                    User = user
                };
                db.UserTask.Add(userTask);
                db.SaveChanges();
                return Ok(userTask);
            }
            return BadRequest();
        }

        [Route("task/update")]
        [Authorize]
        [HttpPut]
        public IActionResult UpdateTaskStatus(UpdateTaskStatus task)
        {
            var newTask = db.Tasks.SingleOrDefault(t => t.DbTaskId == task.id);
            if (newTask != null)
            {
                newTask.StatusId = task.status;
                db.Tasks.Update(newTask);
                db.SaveChanges();
                return Ok(newTask);
            }
            return BadRequest();
        }
        

        private User GetUser(int id)
        {
            return db.Users.SingleOrDefault(user => user.UserId == id);
        }
    }
}
