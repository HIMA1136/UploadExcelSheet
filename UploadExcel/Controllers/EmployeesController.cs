using DataAccess.Data;
using Domain.Dtos;
using Domain.Entitiess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace UploadExcel.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly ApplicationDbContext _context;
        public EmployeesController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {

            return View();
        }
        [HttpGet]
        public async Task<IActionResult> Main(int CurrentPage)
        {
            int pageSize = 20;
            var EmployessCount = await _context.Employees
            .CountAsync();
            var pageCount = (int)Math.Ceiling(EmployessCount / (double)pageSize);

            // Apply pagination
            var paginatedEmployees = await _context.Employees
                .Skip((CurrentPage - 1) * pageSize).Take(pageSize).ToListAsync();

            ViewData["PageCount"] = pageCount;
            ViewData["CurrentPage"] = CurrentPage;
            ViewData["PageSize"] = pageSize;
            return View(paginatedEmployees);
        }
        public IActionResult AddEmployee() { return View(); }
        [HttpPost]
        public async Task<IActionResult> SaveEmployee(AddEmployeeMOdel model)
        {
            if (ModelState.IsValid)
            {
                if (model.Id != null)
                {
                    var emp = await _context.Employees.FirstOrDefaultAsync(a => a.Id == model.Id);
                    if (emp != null)
                    {

                        emp.FullName = model.FullName;
                        emp.PhoneNumber = model.PhoneNumber;
                        emp.PhoneNumber2 = model.PhoneNumber2;
                        emp.CurrentDegree = model.CurrentDegree;
                        await _context.SaveChangesAsync();

                    }

                }
                else
                {
                    var employee = new EmployeeS()
                    {
                        CurrentDegree = model.CurrentDegree,
                        FullName = model.FullName,
                        PhoneNumber2 = model.PhoneNumber2,
                        PhoneNumber = model.PhoneNumber,
                    };
                    await _context.Employees.AddAsync(employee);
                    await _context.SaveChangesAsync();
                }
            }
            return RedirectToAction("Main");
        }
        public async Task<IActionResult> Search(string searchText)
        {
            //var  filteredEmployees = _context.Employees.ToList();
            if (!string.IsNullOrEmpty(searchText))
            {

                var filteredEmployees = await _context.Employees.Where(e => e.FullName.Contains(searchText))
                        .ToListAsync();
                return PartialView("_EmployeePartialView", filteredEmployees);
            }
            int CurrentPage = 1;
            int pageSize = 20;
            var EmployessCount = await _context.Employees
            .CountAsync();
            var pageCount = (int)Math.Ceiling(EmployessCount / (double)pageSize);

            // Apply pagination
            var paginatedEmployees = await _context.Employees
                .Skip((CurrentPage - 1) * pageSize).Take(pageSize).ToListAsync();

            ViewData["PageCount"] = pageCount;
            ViewData["CurrentPage"] = CurrentPage;
            ViewData["PageSize"] = pageSize;
            return PartialView("_EmployeePartialView", paginatedEmployees);
        }
        [HttpGet]
        public async Task<IActionResult> Edit(int Id)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(a => a.Id== Id);
            var AddEmployeeMOdel = new AddEmployeeMOdel()
            {
                Id = employee.Id,
                FullName = employee.FullName,
                PhoneNumber = employee.PhoneNumber,
                PhoneNumber2 = employee.PhoneNumber2,
                CurrentDegree = employee.CurrentDegree,
            };

            return View("Index", AddEmployeeMOdel);
        }
        public async Task<IActionResult> Delete(int Id)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(a => a.Id== Id);
            if (employee !=null)
            {
                _context.Employees.Remove(employee);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction("Main");
        }
        [HttpPost]
        public async Task<IActionResult> LoadData()
        {
            //var draw = HttpContext.Request.Form["draw"].FirstOrDefault();
            //var start = Convert.ToInt32(Request.Form["start"].FirstOrDefault());
            //var length = Convert.ToInt32(Request.Form["length"].FirstOrDefault());
            //var searchValue = Request.Form["search[value]"].FirstOrDefault();

            //Query your data based on search value, start, and length
            var Employee = await _context.Employees.ToListAsync();

            //Filter your data if necessary based on searchValue
            //if (!string.IsNullOrEmpty(searchValue))
            //{
            //    Employee = Employee.Where(e => e.FullName.IndexOf(searchValue, StringComparison.OrdinalIgnoreCase) != -1).ToList();
            //}

            //s var totalRecords = Employee.Count;

            //Apply pagination
            var data = Employee;
            //var data = Employee.Skip(start).Take(length).ToList();

            return Json(new { data });
        }
    }
}
