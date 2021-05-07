using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class Project
    {
        public int? ProjectId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        
        public int OwnerUserId { get; set; }
        public User Owner { get; set; }
        public DateTime created_at { get; set; }

        public virtual ICollection<User> Users { get; set; } = new List<User>();
        public List<ProjectUser> ProjectUsers { get; set; }
    }
}
