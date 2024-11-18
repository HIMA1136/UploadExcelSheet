using Application.Services.Imp;
using Application.Services.Interface;
using Microsoft.Extensions.DependencyInjection;

namespace Application;

public static class AppExtintions
{
    public static IServiceCollection AddServicesLifeTime(this IServiceCollection service)
    {
        service.AddScoped<IAccount, AccountServices>();
        service.AddScoped<ICustomer, CustomerServices>();
        service.AddScoped<ICurrency, CurrencyServices>();
        service.AddScoped<IUploadFiles, UploadServices>();
        return service;
    }
}
