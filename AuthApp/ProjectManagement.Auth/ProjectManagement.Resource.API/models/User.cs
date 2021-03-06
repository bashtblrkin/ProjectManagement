using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagement.Resource.API.models
{
    public class User
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string email { get; set; }
        [Required]
        public string fio { get; set; }

        public DateTime created_at { get; set; }

        public string phone { get; set; }
        public string avatar { get; set; }

        public string avatar_min { get; set; }

        public virtual ICollection<Project> Projects { get; set; } = new List<Project>();

        public virtual ICollection<Project> OwnerProjects { get; set; } = new List<Project>();
        public List<ProjectUser> ProjectUsers { get; set; }

        public virtual ICollection<DbTask> DbTasks { get; set; } = new List<DbTask>();
        public List<UserTask> UserTasks { get; set; }
    }
}
