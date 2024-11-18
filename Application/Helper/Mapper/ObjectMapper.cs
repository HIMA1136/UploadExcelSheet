using AutoMapper;
using Domain.Dtos;
using Domain.Entitiess;

namespace Application.Helper.Mapper;
public class ObjectMapper
{
    private static readonly Lazy<IMapper> Lazy = new(() =>
    {
        var config = new MapperConfiguration(cfg =>
        {
            cfg.ShouldMapProperty = p => p.GetMethod != null && (p.GetMethod.IsPublic || p.GetMethod.IsAssembly);
            cfg.AddProfile<AppMapper>();
        });
        var mapper = config.CreateMapper();
        return mapper;
    });
    public static IMapper Mapper => Lazy.Value;

    public class AppMapper : Profile
    {
        public AppMapper()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
            CreateMap<Curency, CurrencyDto>().ReverseMap();
            //CreateMap<Invoice, Teams>().ReverseMap();
            //CreateMap<Employee, EmployeeDto>().ReverseMap();

        }
    }
}
