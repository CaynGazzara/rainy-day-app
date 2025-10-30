using Microsoft.EntityFrameworkCore;
using RainyDay.API.Models;

namespace RainyDay.API.Data
{
    public class SoundContext : DbContext
    {
        public SoundContext(DbContextOptions<SoundContext> options) : base(options) { }

        public DbSet<Sound> Sounds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data
            modelBuilder.Entity<Sound>().HasData(
                new Sound
                {
                    Id = 1,
                    Name = "Chuva Suave",
                    Description = "Som de chuva leve e relaxante",
                    Category = "Chuva",
                    Duration = 3600,
                    AudioUrl = "https://www.soundjay.com/nature/rain-01.mp3",
                    ImageUrl = "https://picsum.photos/300/200?random=1"
                },
                new Sound
                {
                    Id = 2,
                    Name = "Tempestade",
                    Description = "Chuva forte com trovões",
                    Category = "Tempestade",
                    Duration = 3600,
                    AudioUrl = "https://www.soundjay.com/nature/thunder-01.mp3",
                    ImageUrl = "https://picsum.photos/300/200?random=2"
                },
                new Sound
                {
                    Id = 3,
                    Name = "Vento na Floresta",
                    Description = "Vento suave entre as árvores",
                    Category = "Vento",
                    Duration = 3600,
                    AudioUrl = "https://www.soundjay.com/nature/wind-01.mp3",
                    ImageUrl = "https://picsum.photos/300/200?random=3"
                },
                new Sound
                {
                    Id = 4,
                    Name = "Ondas do Mar",
                    Description = "Som relaxante das ondas do oceano",
                    Category = "Água",
                    Duration = 3600,
                    AudioUrl = "https://www.soundjay.com/nature/ocean-wave-1.mp3",
                    ImageUrl = "https://picsum.photos/300/200?random=4"
                }
            );
        }
    }
}