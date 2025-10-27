using System;

namespace HelloWorldApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(GetGreeting());
        }

        public static string GetGreeting()
        {
            return "Hello World!";
        }
    }
}
