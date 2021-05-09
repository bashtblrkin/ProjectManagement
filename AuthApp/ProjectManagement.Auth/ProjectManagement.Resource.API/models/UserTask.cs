using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class UserTask
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int TaskId { get; set; }
        public DbTask DbTask { get; set; }
    }
}
