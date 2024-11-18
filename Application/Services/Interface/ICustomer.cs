using Domain.Dtos;

namespace Application.Services.Interface;

public interface ICustomer
{
    Task<ResponseResult> Add(CustomerDto model);
    Task<ResponseResult> Update(CustomerDto model);
    Task<ResponseResult> Delete(int id);
}
