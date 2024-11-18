using Application.Services.Interface;
using AutoMapper;
using DataAccess.Data;
using Domain.Dtos;
using Domain.Entitiess;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Application.Services.Imp;

public class CurrencyServices:ICurrency
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;
    public CurrencyServices(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async  Task<ResponseResult> Add(CurrencyDto model)
    {
        var Currency = _mapper.Map<Curency>(model);
        var Add = await _context.Curency.AddAsync(Currency);
        var Save = await _context.SaveChangesAsync();
        return new ResponseResult { IsSuccess = true, Message = "تم الحفظ بنجاح" };
    }

    public async Task<ResponseResult> Delete(int id)
    {
        var Curency = await _context.Curency.FirstOrDefaultAsync(a => a.Id==id);
        var Add = _context.Curency.Remove(Curency);
        var Save = await _context.SaveChangesAsync();
        return new ResponseResult { IsSuccess = true, Message = "تم الحفظ بنجاح"};
    }

    public Task<ResponseResult> Update(CurrencyDto model)
    {
        throw new NotImplementedException();
    }
}
