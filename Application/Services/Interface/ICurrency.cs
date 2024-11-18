using Domain.Dtos;

namespace Application.Services.Interface;

public interface ICurrency
{
    Task<ResponseResult> Add(CurrencyDto model);
    Task<ResponseResult> Update(CurrencyDto model);
    Task<ResponseResult> Delete(int id);
}
