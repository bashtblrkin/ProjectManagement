using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Resource.API.models
{
    public class Matrix
    {
        public int width { get; set; }
        public int height { get; set; }
        public double[] Weight { get; set; }
        public double[] Direction { get; set; }
        public double[][] Data { get; set; }
    }
}
