using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entitiess;

public class Invoice: BaseEntity
{

    public string ?CurencyNo {  get; set; }
    public string ?CustmerName {  get; set; }
    public string ? Reg_Country_Aprev {  get; set; }
    public DateTime InvoiceDate {  get; set; }
    public string ?CustmerCode {  get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public decimal Tax_Value {  get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public decimal TotalValueAfterTax {  get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public decimal TotalValueBeforeTax {  get; set; }
}
