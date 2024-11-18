using Application.Services.Interface;
using Domain.Dtos;

namespace Application.Services.Imp;

public class AccountServices : IAccount
{
    public Task<ResponseResult> Login(LoginViewModel model)
    {
        throw new NotImplementedException();
    }

    public Task<ResponseResult> LogOut()
    {
        throw new NotImplementedException();
    }

    public Task<ResponseResult> Register(RegisterModel model)
    {
        throw new NotImplementedException();
    }
}
