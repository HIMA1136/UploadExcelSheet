namespace Domain.Dtos;

public class UploadFileDto
{
    public String Inv_NO { get; set; }
    public string ?Inv_CurNo { get; set; }
    public DateTime Inv_Date { get; set; }
    public string ?CustomerCode { get; set; }
    public string ?CustomerName { get; set; }
    public string ?Reg_Country_Aprev { get; set; }
    public decimal TotalValueAfterTaxing { get; set; }
    public decimal TaxingValue { get; set; }
}
