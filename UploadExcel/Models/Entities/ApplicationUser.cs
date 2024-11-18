using Microsoft.AspNetCore.Identity;

namespace UploadExcel.Models.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string Code { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
