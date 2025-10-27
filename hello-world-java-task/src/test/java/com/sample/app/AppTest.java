package com.sample.app;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;

/**
 * Unit test for App.
 */
public class AppTest {

    @Test
    public void testGetGreeting() {
        String greeting = App.getGreeting();
        assertNotNull("Greeting should not be null", greeting);
        assertEquals("Hello World!", greeting);
    }

    @Test
    public void testFormatSingleArgument() {
        String result = App.formatSingleArgument("test");
        assertEquals("Arg: test", result);
    }

    @Test
    public void testFormatSingleArgumentWithNull() {
        String result = App.formatSingleArgument(null);
        assertEquals("Arg: null", result);
    }

    @Test
    public void testFormatSingleArgumentWithEmptyString() {
        String result = App.formatSingleArgument("");
        assertEquals("Arg: ", result);
    }

    @Test
    public void testFormatSingleArgumentWithSpecialCharacters() {
        String result = App.formatSingleArgument("hello@world.com");
        assertEquals("Arg: hello@world.com", result);
    }

    @Test
    public void testFormatArgumentsWithMultipleArgs() {
        String[] args = {"arg1", "arg2", "arg3"};
        String[] expected = {"Arg: arg1", "Arg: arg2", "Arg: arg3"};
        String[] result = App.formatArguments(args);

        assertArrayEquals("Formatted arguments should match expected", expected, result);
    }

    @Test
    public void testFormatArgumentsWithEmptyArray() {
        String[] args = {};
        String[] expected = {};
        String[] result = App.formatArguments(args);

        assertArrayEquals("Empty array should return empty array", expected, result);
    }

    @Test
    public void testFormatArgumentsWithNullArray() {
        String[] result = App.formatArguments(null);
        assertNotNull("Result should not be null", result);
        assertEquals("Result should be empty array", 0, result.length);
    }

    @Test
    public void testFormatArgumentsWithSingleArg() {
        String[] args = {"singleArg"};
        String[] expected = {"Arg: singleArg"};
        String[] result = App.formatArguments(args);

        assertArrayEquals("Single argument should be formatted correctly", expected, result);
    }

    @Test
    public void testFormatArgumentsWithNullElements() {
        String[] args = {"arg1", null, "arg3"};
        String[] expected = {"Arg: arg1", "Arg: null", "Arg: arg3"};
        String[] result = App.formatArguments(args);

        assertArrayEquals("Null elements should be handled correctly", expected, result);
    }
}
