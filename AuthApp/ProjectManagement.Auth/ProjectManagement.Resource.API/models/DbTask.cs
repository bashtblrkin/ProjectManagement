using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class DbTask
    {
        public int DbTaskId { get; set; }

        public int ProjectId { get; set; }

        public Project Project { get; set; }

        public string name { get; set; }

        public string description { get; set; }

        public DateTime start_date { get; set; }

        public DateTime end_date { get; set; }

        public int StatusId { get; set; }

        public Status Status { get; set; }

        public int PriorityId { get; set; }

        public Priority Priority { get; set; }

        public ICollection<User> Users { get; set; } = new List<User>();
        public List<UserTask> UserTasks { get; set; }
    }
}
