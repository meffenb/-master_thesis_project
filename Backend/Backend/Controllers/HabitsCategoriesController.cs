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
    public class HabitsCategoriesController : ControllerBase
    {
        private readonly HabitsContext _context;

        public HabitsCategoriesController(HabitsContext context)
        {
            _context = context;
        }

        // GET: api/HabitsCategories
        [HttpGet]
        public IEnumerable<HabitsCategory> GetHabitsCategories()
        {
            return _context.HabitsCategories;
        }

        // GET: api/HabitsCategories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHabitsCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var habitsCategory = await _context.HabitsCategories.FindAsync(id);

            if (habitsCategory == null)
            {
                return NotFound();
            }

            return Ok(habitsCategory);
        }

        // PUT: api/HabitsCategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHabitsCategory([FromRoute] int id, [FromBody] HabitsCategory habitsCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != habitsCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(habitsCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HabitsCategoryExists(id))
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

        // POST: api/HabitsCategories
        [HttpPost]
        public async Task<IActionResult> PostHabitsCategory([FromBody] HabitsCategory habitsCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.HabitsCategories.Add(habitsCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHabitsCategory", new { id = habitsCategory.Id }, habitsCategory);
        }

        // DELETE: api/HabitsCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHabitsCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var habitsCategory = await _context.HabitsCategories.FindAsync(id);
            if (habitsCategory == null)
            {
                return NotFound();
            }

            _context.HabitsCategories.Remove(habitsCategory);
            await _context.SaveChangesAsync();

            return Ok(habitsCategory);
        }

        private bool HabitsCategoryExists(int id)
        {
            return _context.HabitsCategories.Any(e => e.Id == id);
        }
    }
}