#!/usr/bin/env node
process.stdout.write('input: ');
process.stdin.resume();
process.stdin.on('data', function(data) {
  process.stdout.write('read from console: ' + data.toString());
  process.stdin.pause();
});
