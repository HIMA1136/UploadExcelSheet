using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UploadExcel.Data;
using UploadExcel.Models.Entities;
using UploadExcel.Models.ViewModels;

namespace UploadExcel.Controllers
{
    public class AccountController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManger;
        private readonly SignInManager<ApplicationUser> _signInManager;
        public AccountController(ApplicationDbContext context, UserManager<ApplicationUser> UserManger, SignInManager<ApplicationUser> signInManager)
        {
            _context = context;
            _userManger = UserManger;
            _signInManager = signInManager;
        }
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Register()
        {
            return View();
        }
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();

            return RedirectToAction("Login");
        }
        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser();


                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.Email = model.Email;
                user.UserName = model.UserName;
                user.Code="00";
                IdentityResult result = await _userManger.CreateAsync(user, model.Password);
                if (result == IdentityResult.Success)
                {
                    await _signInManager.SignInAsync(user, false);
                    return RedirectToAction("Index", "Home");
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                    return View("Register");
                }
                await _context.SaveChangesAsync();


                return View("Login");
            }
            else
            {
                return View(model);
            }
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, true, false);
                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index", "Home");
                    }
                    ModelState.AddModelError("", "اسم المستخم او رقم المرور غير صحيح");
                    return View(model);
                }
                catch (Exception ex)
                {

                    throw;
                }

            }
            return View(model);
        }
    }
}
