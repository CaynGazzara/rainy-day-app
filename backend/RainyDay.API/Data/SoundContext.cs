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
                new Sound { Id = 1, Name = "Chuva Suave", Description = "Som de chuva leve", Category = "Chuva", Duration = 3600, AudioUrl = "/assets/sounds/rain-soft.mp3", ImageUrl = "/assets/images/rain-soft.jpg" },
                new Sound { Id = 2, Name = "Tempestade", Description = "Chuva forte com trovões", Category = "Tempestade", Duration = 3600, AudioUrl = "/assets/sounds/thunderstorm.mp3", ImageUrl = "/assets/images/thunderstorm.jpg" },
                new Sound { Id = 3, Name = "Vento na Floresta", Description = "Vento suave entre as árvores", Category = "Vento", Duration = 3600, AudioUrl = "/assets/sounds/forest-wind.mp3", ImageUrl = "/assets/images/forest-wind.jpg" },
                new Sound { Id = 4, Name = "Ondas do Mar", Description = "Som relaxante das ondas", Category = "Água", Duration = 3600, AudioUrl = "/assets/sounds/ocean-waves.mp3", ImageUrl = "/assets/images/ocean-waves.jpg" }
            );
        }
    }
}