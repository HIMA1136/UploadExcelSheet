using Application.Services.Interface;
using AutoMapper;
using DataAccess.Data;
using Domain.Dtos;
using Domain.Entitiess;
using Microsoft.EntityFrameworkCore;

namespace Application.Services.Imp;

public class CustomerServices:ICustomer
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;
    public CustomerServices(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ResponseResult> Add(CustomerDto model)
    {
        var Customer = _mapper.Map<Customer>(model);
        var Add = await _context.Customer.AddAsync(Customer);
        var Save = await _context.SaveChangesAsync();
        return new ResponseResult { IsSuccess = true, Message = "تم الحفظ بنجاح" };
    }

    public async Task<ResponseResult> Delete(int id)
    {
        var Customer = await _context.Customer.FirstOrDefaultAsync(a => a.Id==id);
        var Add = _context.Customer.Remove(Customer);
        var Save = await _context.SaveChangesAsync();
        return new ResponseResult { IsSuccess = true, Message = "تم الحفظ بنجاح", Obj=Customer };
    }

    public Task<ResponseResult> Update(CustomerDto model)
    {
        throw new NotImplementedException();
    }
}
