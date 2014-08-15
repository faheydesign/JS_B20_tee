var fs = require('fs');
    outputFile = fs.WriteStream(process.argv[2]),
    stdin = process.stdin;

stdin.pipe(process.stdout);
stdin.pipe(outputFile);
