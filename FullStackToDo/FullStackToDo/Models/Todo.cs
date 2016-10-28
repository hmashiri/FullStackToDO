using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FullStackToDo.Models
{
    public class Todo
    {
        public int TodoId { get; set; }

        public string TodoTaskName { get; set; }
        public string TodoTaskDescription { get; set; }
        public int TodoPriority { get; set; }
    }
}