using Microsoft.AspNetCore.Mvc;
using RainyDay.API.Models;
using RainyDay.API.Services;

namespace RainyDay.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SoundsController : ControllerBase
    {
        private readonly ISoundService _soundService;

        public SoundsController(ISoundService soundService)
        {
            _soundService = soundService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Sound>>> GetAllSounds()
        {
            var sounds = await _soundService.GetAllSoundsAsync();
            return Ok(sounds);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Sound>> GetSoundById(int id)
        {
            var sound = await _soundService.GetSoundByIdAsync(id);
            if (sound == null)
                return NotFound();

            return Ok(sound);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<List<Sound>>> GetSoundsByCategory(string category)
        {
            var sounds = await _soundService.GetSoundsByCategoryAsync(category);
            return Ok(sounds);
        }
    }
}