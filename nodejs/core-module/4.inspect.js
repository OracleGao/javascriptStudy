#!/usr/bin/env node
var util = require('util');
console.log(util.inspect(util, { showHidden: true, depth: null }));
