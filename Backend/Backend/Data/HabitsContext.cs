using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

    public class HabitsContext : DbContext
    {

    public DbSet<Backend.Models.Habits> Habits { get; set; }
    public DbSet<Backend.Models.HabitsCategory> HabitsCategories { get; set; }
    public DbSet<Backend.Models.HabitsProgress> HabitsProgresses { get; set; }

    public HabitsContext (DbContextOptions<HabitsContext> options)
            : base(options)
        {
        }



    }

