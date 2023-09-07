const fs = require('fs');

function parseLogLine(line) {
    const pattern = /^(\d{2}\/\d{2} \d{2}:\d{2}:\d{2}) (\w+)(.*):\s*(.*)/;
    const match = line.match(pattern);

    if (match) {
        return {
            "date/time": match[1],
            "type of log": match[2],
            "msg/": match[3],
        };
    } else {
        return null;
    }
}

fs.readFile('logs_for_regex.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        
        return;
    }

    const logLines = data.split('\n');
    const parsedLogs = logLines.map(parseLogLine).filter(el => !!el);

    // const warningLogs = parsedLogs.filter(log => log['type of log'] === 'WARNING');
    console.log(parsedLogs);
});