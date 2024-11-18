using Microsoft.AspNetCore.Identity;

namespace Domain.Entitiess
{
    public class ApplicationUser : IdentityUser
    {
        public string Code { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
