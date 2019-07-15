using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HabitsProgressesController : ControllerBase
    {
        private readonly HabitsContext _context;

        public HabitsProgressesController(HabitsContext context)
        {
            _context = context;
        }

        // GET: api/HabitsProgresses
        [HttpGet]
        public IEnumerable<HabitsProgress> GetHabitsProgresses()
        {
          //  return _context.HabitsProgresses;
            var habitsProgress = _context.HabitsProgresses
                .Include(i => i.Habits)
                .ToList();
            return habitsProgress;
        }

        // GET: api/HabitsProgresses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHabitsProgress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var habitsProgress = await _context.HabitsProgresses.FindAsync(id);
            var habitsProgress = await _context.HabitsProgresses
               .Include(i => i.Habits)
               .FirstOrDefaultAsync(i => i.Id == id);

            if (habitsProgress == null)
            {
                return NotFound();
            }

            return Ok(habitsProgress);
        }

        // PUT: api/HabitsProgresses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHabitsProgress([FromRoute] int id, [FromBody] HabitsProgress habitsProgress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != habitsProgress.Id)
            {
                return BadRequest();
            }

            _context.Entry(habitsProgress).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HabitsProgressExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/HabitsProgresses
        [HttpPost]
        public async Task<IActionResult> PostHabitsProgress([FromBody] HabitsProgress habitsProgress)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.HabitsProgresses.Add(habitsProgress);
            await _context.SaveChangesAsync();

            var habitssProgress = await _context.HabitsProgresses
                .Include(i => i.Habits)
                .FirstOrDefaultAsync(i => i.Id == habitsProgress.Id);

            return CreatedAtAction("GetHabitsProgress", new { id = habitsProgress.Id }, habitssProgress);
        }

        // DELETE: api/HabitsProgresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabitsProgress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var habitsProgress = await _context.HabitsProgresses.FindAsync(id);
            if (habitsProgress == null)
            {
                return NotFound();
            }

            _context.HabitsProgresses.Remove(habitsProgress);
            await _context.SaveChangesAsync();

            return Ok(habitsProgress);
        }

        private bool HabitsProgressExists(int id)
        {
            return _context.HabitsProgresses.Any(e => e.Id == id);
        }
    }
}