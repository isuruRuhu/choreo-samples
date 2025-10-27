import pytest
from unittest.mock import patch
from datetime import datetime
from main import get_greeting, get_current_time, main


class TestGetGreeting:
    """Test cases for get_greeting function."""

    def test_get_greeting_returns_string(self):
        """Test that get_greeting returns a string."""
        result = get_greeting()
        assert isinstance(result, str)

    def test_get_greeting_returns_hello_world(self):
        """Test that get_greeting returns 'Hello World'."""
        result = get_greeting()
        assert result == "Hello World"


class TestGetCurrentTime:
    """Test cases for get_current_time function."""

    def test_get_current_time_returns_string(self):
        """Test that get_current_time returns a string."""
        result = get_current_time()
        assert isinstance(result, str)

    def test_get_current_time_format(self):
        """Test that get_current_time returns time in correct format."""
        result = get_current_time()
        # Check if the format matches YYYY-MM-DD HH:MM:SS
        try:
            datetime.strptime(result, "%Y-%m-%d %H:%M:%S")
            assert True
        except ValueError:
            assert False, f"Time format is incorrect: {result}"

    @patch('main.datetime')
    def test_get_current_time_mocked(self, mock_datetime):
        """Test get_current_time with mocked datetime."""
        mock_datetime.now.return_value.strftime.return_value = "2023-12-25 10:30:45"
        result = get_current_time()
        assert result == "2023-12-25 10:30:45"
