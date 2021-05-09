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
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Priority> Priorities { get; set; }
        public DbSet<DbTask> Tasks { get; set; }
        public DbSet<ProjectUser> ProjectUser { get; set; }
        public DbSet<UserTask> UserTask { get; set; }


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

            modelBuilder.Entity<DbTask>()
                .HasOne(t => t.Project)
                .WithMany(p => p.Tasks)
                .HasForeignKey(t => t.ProjectId);

            modelBuilder.Entity<DbTask>()
                .HasOne(t => t.Status)
                .WithMany(s => s.Tasks)
                .HasForeignKey(t => t.StatusId);

            modelBuilder.Entity<DbTask>()
                .HasOne(t => t.Priority)
                .WithMany(p => p.Tasks)
                .HasForeignKey(t => t.PriorityId);

            modelBuilder.Entity<DbTask>()
                .HasMany(u => u.Users)
                .WithMany(t => t.DbTasks)
                .UsingEntity<UserTask>(
                    j => j
                    .HasOne(ut => ut.User)
                    .WithMany(u => u.UserTasks)
                    .HasForeignKey(ut => ut.UserId),
                    j => j
                    .HasOne(ut => ut.DbTask)
                    .WithMany(t => t.UserTasks)
                    .HasForeignKey(ut => ut.TaskId),
                    j =>
                    {
                        j.HasKey(t => new { t.UserId, t.TaskId });
                    }
                );
        }
    }
}
