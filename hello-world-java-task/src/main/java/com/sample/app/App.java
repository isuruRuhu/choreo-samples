package com.sample.app;

/**
 * Hello world!
 *
 */
public class App {

    public static void main(String[] args) {
        String greeting = getGreeting();
        System.out.println(greeting);

        String[] formattedArgs = formatArguments(args);
        for (String formattedArg : formattedArgs) {
            System.out.println(formattedArg);
        }
    }

    public static String getGreeting() {
        return "Hello World!";
    }

    public static String[] formatArguments(String[] args) {
        if (args == null) {
            return new String[0];
        }

        String[] formattedArgs = new String[args.length];
        for (int i = 0; i < args.length; i++) {
            formattedArgs[i] = "Arg: " + args[i];
        }
        return formattedArgs;
    }

    public static String formatSingleArgument(String arg) {
        if (arg == null) {
            return "Arg: null";
        }
        return "Arg: " + arg;
    }
}
