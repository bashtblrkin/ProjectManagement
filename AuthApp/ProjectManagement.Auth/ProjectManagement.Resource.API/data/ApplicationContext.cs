using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectManagement.Resource.API.models;


namespace ProjectManagement.Resource.API.data
{
    public class ApplicationContext: DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Role> Roles { get; set; }

        public DbSet<ProjectUser> ProjectUser { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>()
                 .HasMany(u => u.Users)
                 .WithMany(p => p.Projects)
                 .UsingEntity<ProjectUser>(
                     j => j
                     .HasOne(pu => pu.User)
                     .WithMany(u => u.ProjectUsers)
                     .HasForeignKey(pu => pu.UserId),
                     j => j
                     .HasOne(pu => pu.Project)
                     .WithMany(p => p.ProjectUsers)
                     .HasForeignKey(pu => pu.ProjectId),
                     j =>
                     {
                         j.HasKey(t => new { t.UserId, t.ProjectId });
                     }
                 );

            modelBuilder.Entity<Project>()
                .HasOne(p => p.Owner)
                .WithMany(u => u.OwnerProjects);
        }
    }
}
