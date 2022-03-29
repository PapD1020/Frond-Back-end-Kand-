using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace StudentProject.Models
{
    public partial class Student
    {
        public Student()
        {
            Subjects = new HashSet<Subject>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Subject> Subjects { get; set; }
    }
}
