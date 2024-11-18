using System.ComponentModel.DataAnnotations;

namespace Domain.Dtos
{
    public class AddEmployeeMOdel
    {
        public int? Id { get; set; }

        [Required]
        public string FullName { get; set; }
        [Required]
        public string CurrentDegree { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string PhoneNumber2 { get; set; }
    }
}
