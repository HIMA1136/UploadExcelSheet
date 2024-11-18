using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entitiess
{
    public class EmployeeS
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string CurrentDegree { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumber2 { get; set; }
    }
}
