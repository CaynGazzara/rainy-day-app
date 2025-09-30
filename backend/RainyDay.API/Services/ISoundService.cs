using RainyDay.API.Models;

namespace RainyDay.API.Services
{
    public interface ISoundService
    {
        Task<List<Sound>> GetAllSoundsAsync();
        Task<Sound?> GetSoundByIdAsync(int id);
        Task<List<Sound>> GetSoundsByCategoryAsync(string category);
    }
}