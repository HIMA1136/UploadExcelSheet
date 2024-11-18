namespace Domain.Entitiess;

public class BaseEntity
{
    public int Id { get; set; }
    public string ?Name { get; set; }
    public string ?Notes { get; set; }
    public DateTime CreationDate { get; set; }= DateTime.Now;
    public string ?No { get; set; }
}
