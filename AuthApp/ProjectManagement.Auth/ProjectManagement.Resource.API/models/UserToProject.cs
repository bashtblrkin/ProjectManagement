using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class UserToProject
    {
        public int ProjectId { get; set; }
        public string email { get; set; }
        public int RoleId { get; set; }
    }
}
