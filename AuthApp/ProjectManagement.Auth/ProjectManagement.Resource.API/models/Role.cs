using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class Role
    {
        public int id { get; set; }
        public string name { get; set; }

       public int RoleId { get; set; }
       public ProjectUser ProjectUser { get; set; }
    }
}
