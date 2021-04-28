﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace ProjectManagement.Resource.API.data
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }

    }
}
