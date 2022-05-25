#!/usr/bin/env node

const {program} = require("commander");
const helpOption = require('../lib/core/help');
const myAction = require('../lib/core/myAction');
program.option('-f --framework<framework>', 'select your framework');
program.option('-d --dest<dest>', 'a destination folder');

//帮助信息  --help
helpOption(program)

//自定义指令
myAction(program)

program.parse(process.argv)