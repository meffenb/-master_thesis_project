using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    [Table("Habits")]
    public class Habits
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public int HabitsCategoriesId { get; set; }
        [ForeignKey("HabitsCategoriesId")]
        public virtual HabitsCategory HabitsCategories { get; set; }
        //public ICollection<HabitsProgress> HabitsProgresses { get; set; }
    }
}
