using Application.Services.Interface;
using DataAccess.Data;
using Domain.Dtos;
using Domain.Entitiess;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UploadExcel.Controllers;

public class UploadController : Controller
{
    private readonly IUploadFiles _uploadfiles;
    private readonly ApplicationDbContext _context;
    public UploadController(IUploadFiles uploadfiles, ApplicationDbContext context)
    {
        _uploadfiles = uploadfiles;
        _context = context;

    }
    public async Task<IActionResult> UploadFile(List<UploadFileDto> model)
    {
        try
        {
            foreach (var file in model)
            {
                var res = await _uploadfiles.UploadFile(file); // Process each file
            }

            // Store success message in TempData
            TempData["Message"] = "تم الحفظ بنجاح"; // This will persist across redirects

            // Redirect to the Home controller's Index action
            return RedirectToAction("Index", "Home");
        }
        catch (Exception ex)
        {
            // Store error message in TempData
            TempData["Message"] = $"حدث خطأ: {ex.Message}"; // This will persist across redirects

            // Redirect to the Home controller's Index action with error message
            return RedirectToAction("Index", "Home");
        }
    }
    public async Task< IActionResult> ShowInvoices()
    {
        if (ModelState.IsValid)
        {
            try
            {
                var result = await _context.Invoice.ToListAsync();
                return View(result);
            }
            catch (Exception ex)
            {

                throw;
            }

        }
        return View();
    }
}
