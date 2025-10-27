using Xunit;

namespace HelloWorldApp.Tests
{
    public class ProgramTests
    {
        [Fact]
        public void GetGreeting_ShouldReturnHelloWorld()
        {
            // Act
            string result = Program.GetGreeting();

            // Assert
            Assert.Equal("Hello World!", result);
        }

        [Fact]
        public void GetGreeting_ShouldReturnString()
        {
            // Act
            string result = Program.GetGreeting();

            // Assert
            Assert.IsType<string>(result);
        }

        [Fact]
        public void GetGreeting_ShouldNotReturnNull()
        {
            // Act
            string result = Program.GetGreeting();

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public void GetGreeting_ShouldNotReturnEmpty()
        {
            // Act
            string result = Program.GetGreeting();

            // Assert
            Assert.NotEmpty(result);
        }

        [Fact]
        public void GetGreeting_ShouldContainHello()
        {
            // Act
            string result = Program.GetGreeting();

            // Assert
            Assert.Contains("Hello", result);
        }
    }
}
