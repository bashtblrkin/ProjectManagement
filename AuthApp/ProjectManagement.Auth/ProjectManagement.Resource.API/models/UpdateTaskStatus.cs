using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class UpdateTaskStatus
    {
        public int id { get; set; }
        public int status { get; set; }
    }
}
