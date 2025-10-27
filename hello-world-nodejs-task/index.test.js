const { getGreeting, formatArgs } = require('./index');

describe('Hello World Node.js App', () => {
    describe('getGreeting', () => {
        test('should return "Hello World!"', () => {
            const result = getGreeting();
            expect(result).toBe('Hello World!');
        });

        test('should return a string', () => {
            const result = getGreeting();
            expect(typeof result).toBe('string');
        });
    });

    describe('formatArgs', () => {
        test('should format single argument correctly', () => {
            const args = ['test'];
            const result = formatArgs(args);
            expect(result).toEqual(['Arg: test']);
        });

        test('should format multiple arguments correctly', () => {
            const args = ['arg1', 'arg2', 'arg3'];
            const result = formatArgs(args);
            expect(result).toEqual(['Arg: arg1', 'Arg: arg2', 'Arg: arg3']);
        });

        test('should return empty array for empty input', () => {
            const args = [];
            const result = formatArgs(args);
            expect(result).toEqual([]);
        });

        test('should return empty array for null input', () => {
            const result = formatArgs(null);
            expect(result).toEqual([]);
        });

        test('should return empty array for undefined input', () => {
            const result = formatArgs(undefined);
            expect(result).toEqual([]);
        });

        test('should handle arguments with special characters', () => {
            const args = ['hello@world.com', 'test-arg', 'arg_with_underscore'];
            const result = formatArgs(args);
            expect(result).toEqual([
                'Arg: hello@world.com',
                'Arg: test-arg',
                'Arg: arg_with_underscore'
            ]);
        });

        test('should handle arguments with spaces', () => {
            const args = ['hello world', 'test arg'];
            const result = formatArgs(args);
            expect(result).toEqual(['Arg: hello world', 'Arg: test arg']);
        });

        test('should handle empty string arguments', () => {
            const args = ['', 'valid', ''];
            const result = formatArgs(args);
            expect(result).toEqual(['Arg: ', 'Arg: valid', 'Arg: ']);
        });

        test('should handle numeric arguments', () => {
            const args = ['123', '45.67'];
            const result = formatArgs(args);
            expect(result).toEqual(['Arg: 123', 'Arg: 45.67']);
        });
    });
});
