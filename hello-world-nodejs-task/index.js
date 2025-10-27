function getGreeting() {
    return 'Hello World!';
}

function getProcessArgs() {
    return process.argv.slice(2); // slice out the first two sys args
}

function formatArgs(args) {
    if (!args || args.length === 0) {
        return [];
    }
    return args.map(arg => `Arg: ${arg}`);
}

function main() {
    console.log(getGreeting());
    const args = getProcessArgs();
    const formattedArgs = formatArgs(args);
    console.log(args);
    if (formattedArgs.length > 0) {
        formattedArgs.forEach(arg => console.log(arg));
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    getGreeting,
    getProcessArgs,
    formatArgs,
    main
};
