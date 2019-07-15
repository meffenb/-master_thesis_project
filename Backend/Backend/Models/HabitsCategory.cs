using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    [Table("HabitsCategory")]
    public class HabitsCategory
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }

       // public ICollection<Habits> Habits { get; set; }
    }
}
