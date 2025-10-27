from datetime import datetime


def get_greeting():
    """Return a greeting message."""
    return "Hello World"


def get_current_time():
    """Return the current time as a formatted string."""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def main():
    """Main function that prints greeting and current time."""
    print(get_greeting())
    print(f"Current time: {get_current_time()}")


if __name__ == "__main__":
    main()
