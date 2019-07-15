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
    public class HabitsController : ControllerBase
    {
        private readonly HabitsContext _context;

        public HabitsController(HabitsContext context)
        {
            _context = context;


        }

        // GET: api/Habits
        [HttpGet]
        public IEnumerable<Habits> GetHabits()
        {
            //  return _context.Habits;
            var habits = _context.Habits
            .Include(i => i.HabitsCategories)
            .ToList();

            return habits;
        }

        // GET: api/Habits/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHabits([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

        //    var habits = await _context.Habits.FindAsync(id);
            var habits = await _context.Habits
                .Include(i => i.HabitsCategories)
                .FirstOrDefaultAsync(i => i.Id == id);

            if (habits == null)
            {
                return NotFound();
            }

            return Ok(habits);

        }

        // PUT: api/Habits/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHabits([FromRoute] int id, [FromBody] Habits habits)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != habits.Id)
            {
                return BadRequest();
            }

            _context.Entry(habits).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HabitsExists(id))
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

        // POST: api/Habits
        [HttpPost]
        public async Task<IActionResult> PostHabits([FromBody] Habits habits)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Habits.Add(habits);
            await _context.SaveChangesAsync();

            var habitss = await _context.Habits
                .Include(i => i.HabitsCategories)
                .FirstOrDefaultAsync(i => i.Id == habits.Id);


            return CreatedAtAction("GetHabits", new { id = habits.Id }, habitss);
        }

        // DELETE: api/Habits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabits([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var habits = await _context.Habits.FindAsync(id);
            if (habits == null)
            {
                return NotFound();
            }

            _context.Habits.Remove(habits);
            await _context.SaveChangesAsync();

            return Ok(habits);
        }

        private bool HabitsExists(int id)
        {
            return _context.Habits.Any(e => e.Id == id);
        }
    }
}