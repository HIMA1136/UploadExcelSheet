using Application.Services.Interface;
using DataAccess.Data;
using Domain.Dtos;
using Domain.Entitiess;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Application.Services.Imp;

public class UploadServices : IUploadFiles
{
    private readonly ApplicationDbContext _context;
    private readonly ICustomer _custmer;
    private readonly ICurrency _currency;
    public UploadServices(ApplicationDbContext context, ICustomer custmer, ICurrency currency)
    {
        _context = context;
        _custmer = custmer;
        _currency = currency;

    }
    public async Task<ResponseResult> UploadFile(UploadFileDto model)
    {

        //check if any customer with customerCode
        var checkCustomer = await _context.Customer.AnyAsync(a => a.Code==model.CustomerCode);
            if (!checkCustomer) {
            var custmer=new CustomerDto{
                Name=model.CustomerName,
            };
            var AddCustmer = await _custmer.Add(custmer);
            }
        //check if any Cuurncy with no
        var checkCurency = await _context.Curency.AnyAsync(a => a.No==model.Inv_CurNo);
        if (!checkCurency)
        {
            var currency = new CurrencyDto
            {
                No=model.Inv_CurNo,
            };
            var AddCustmer = await _currency.Add(currency);
        }

        //Add Invoice 
        var inv = new Invoice
        {
            InvoiceDate= model.Inv_Date,
            No=model.Inv_NO,
            CustmerName=model.CustomerName,
            CurencyNo=model.Inv_CurNo,
            CustmerCode=model.CustomerCode,
            Reg_Country_Aprev=model.Reg_Country_Aprev,
            Tax_Value=model.TaxingValue,
            TotalValueAfterTax=model.TotalValueAfterTaxing,
            TotalValueBeforeTax=model.TaxingValue+model.TotalValueAfterTaxing,
        };
        var addInvoice = await _context.AddAsync(inv);
                await _context.SaveChangesAsync();
        return new ResponseResult { IsSuccess = true, Message = "تم الحفظ بنجاح" };

    }
}
