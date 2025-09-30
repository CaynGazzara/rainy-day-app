namespace RainyDay.API.Models
{
    public class Sound
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string AudioUrl { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public int Duration { get; set; } // em segundos
        public string ImageUrl { get; set; } = string.Empty;
    }
}