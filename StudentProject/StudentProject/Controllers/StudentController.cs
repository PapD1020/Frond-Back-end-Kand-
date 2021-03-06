using Microsoft.AspNetCore.Mvc;
using StudentProject.Models;
using StudentProject.Services;
using System.Collections.Generic;

namespace StudentProject.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly StudentService studentService;

        public StudentController(StudentService studentService)
        {
            this.studentService = studentService;
        }

        [HttpGet]
        public IEnumerable<Student> GetAllStudent()
        {
            return studentService.GetAllStudent();
        }

        [HttpGet]
        [Route("{id}")]

        public Student GetAllStudent(int id)
        {
            return studentService.GetStudentByEmail(id);
        }
    }
}
