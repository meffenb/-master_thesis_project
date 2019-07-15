using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    [Table("HabitsProgress")]
    public class HabitsProgress
    {
        public int Id { get; set; }
        public DateTimeOffset Data { get; set; }
        public string Status { get; set; }
        public int HabitsId { get; set; }
        [ForeignKey("HabitsId")]
        public virtual Habits Habits { get; set; }
    }
}
