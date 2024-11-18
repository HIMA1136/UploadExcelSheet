using System.ComponentModel.DataAnnotations;

namespace UploadExcel.Models.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "يجب ادخال اسم المستخدم")]
        [Display(Name = "اسم المستخدم")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "يجب ادخال كلمة المرور")]
        [Display(Name = "كلمة المرور")]
        public string Password { get; set; }
    }
}
