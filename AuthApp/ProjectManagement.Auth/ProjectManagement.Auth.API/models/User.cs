using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Auth.API.models
{
    public class User
    {
        [Required]
        public int id { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string fio { get; set; }

        public DateTime created_at { get; set; }

        public string phone { get; set; }
        public string avatar { get; set; }


    }
}
