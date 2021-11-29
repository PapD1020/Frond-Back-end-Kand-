using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using ReactJs_Kliens.ServiceReference1;

namespace ReactJs_Kliens
{
    class Program
    {
        public static ServiceReference1.Service1Client kliens;
        static void Main(string[] args)
        {
            kliens = new ServiceReference1.Service1Client();
            Kutyus egykutyu = kliens.EgyKutyaGet();
            Console.WriteLine(egykutyu);

            Console.ReadKey();
        }
    }
}
