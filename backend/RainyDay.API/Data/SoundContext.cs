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
            modelBuilder.Entity<Sound>().HasData(
                new Sound
                {
                    Id = 1,
                    Name = "Chuva com Trovão",
                    Description = "Chuva intensa com trovões ao fundo",
                    Category = "Tempestade",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1504608524841-42fe6f032b25?w=300&h=200&fit=crop" // Tempestade
                },
                new Sound
                {
                    Id = 2,
                    Name = "Fogueira Aconchegante",
                    Description = "Estalos relaxantes de fogueira",
                    Category = "Fogo",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1547483239-4fc6c44372a7?w=300&h=200&fit=crop" // Fogueira
                },
                new Sound
                {
                    Id = 3,
                    Name = "Ondas do Mar",
                    Description = "Ondas suaves quebrando na praia",
                    Category = "Água",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&h=200&fit=crop" // Oceano
                },
                new Sound
                {
                    Id = 4,
                    Name = "Chuva com Vento",
                    Description = "Chuva suave com vento nas árvores",
                    Category = "Chuva",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=300&h=200&fit=crop" // Chuva
                },
                new Sound
                {
                    Id = 5,
                    Name = "Grilos na Noite",
                    Description = "Canto relaxante de grilos na escuridão",
                    Category = "Animais",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" // Grilos/Noite
                },
                new Sound
                {
                    Id = 6,
                    Name = "Gaivotas no Litoral",
                    Description = "Gaivotas cantando à beira-mar",
                    Category = "Animais",
                    Duration = 3600,
                    AudioUrl = "",
                    ImageUrl = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop" // Gaivotas/Praia
                }
            );
        }
    }
}