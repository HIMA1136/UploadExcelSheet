using Domain.Dtos;

namespace Application.Services.Interface;

public interface IAccount
{
    Task<ResponseResult> Login(LoginViewModel model);
    Task<ResponseResult> Register(RegisterModel model);
    Task<ResponseResult> LogOut();
}
