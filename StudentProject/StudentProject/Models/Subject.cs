using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace StudentProject.Models
{
    public partial class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }

        //[JsonIgnore] ezt is lehet ignorálni
        public int StudentId { get; set; }

        [JsonIgnore]
        public virtual Student Student { get; set; }
    }
}
