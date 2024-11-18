using Domain.Dtos;

namespace Application.Services.Interface;

public interface IUploadFiles
{
    Task<ResponseResult> UploadFile(UploadFileDto model);
}
