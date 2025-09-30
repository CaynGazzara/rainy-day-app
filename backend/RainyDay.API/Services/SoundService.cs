using Microsoft.EntityFrameworkCore;
using RainyDay.API.Data;
using RainyDay.API.Models;

namespace RainyDay.API.Services
{
    public class SoundService : ISoundService
    {
        private readonly SoundContext _context;

        public SoundService(SoundContext context)
        {
            _context = context;
        }

        public async Task<List<Sound>> GetAllSoundsAsync()
        {
            return await _context.Sounds.ToListAsync();
        }

        public async Task<Sound?> GetSoundByIdAsync(int id)
        {
            return await _context.Sounds.FindAsync(id);
        }

        public async Task<List<Sound>> GetSoundsByCategoryAsync(string category)
        {
            return await _context.Sounds
                .Where(s => s.Category.ToLower() == category.ToLower())
                .ToListAsync();
        }
    }
}