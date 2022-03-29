using Microsoft.EntityFrameworkCore;
using StudentProject.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentProject.Services
{
    public class StudentService
    {
        private readonly school2Context context;

        public StudentService(school2Context context)
        {
            this.context = context;
            //context.ChangeTracker.LazyLoadingEnabled = false;
        }

        public IEnumerable<Student> GetAllStudent()
        {
            return context.Students.Include(student => student.Subjects).ToList();
        }

        public Student GetStudentByEmail(int id)
        {
            //return context.Students.First(student => student.Id == id);
            return context.Students.Include(s => s.Subjects).First(s => s.Id == id);
        }
    }
}
