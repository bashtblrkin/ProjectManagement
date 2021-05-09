using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class Priority
    {
        public int PriorityId { get; set; }
        public string name { get; set; }

        public List<DbTask> Tasks { get; set; }
    }
}
