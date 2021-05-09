using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class Status
    {
        public int StatusId {get;set;}

        public string name { get; set; }

        public List<DbTask> Tasks { get; set; }
    }
}
