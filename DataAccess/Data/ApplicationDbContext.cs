using Domain.Entitiess;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }


        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //}
        public DbSet<EmployeeS> Employees { get; set; }
        public DbSet<Invoice> Invoice { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Curency> Curency { get; set; }
    }
}
