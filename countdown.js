#!/usr/bin/env node
const minimist = require('minimist');
const {stdout:log} = require('single-line-log');
const Timer = require('tiny-timer');


const { time } = minimist(process.argv.slice(2));

if(!time) throw new Error('Time is required.')

if(!parseInt(time)) throw new Error('Time must be a number');

let msg = new Array(parseInt(time)).fill("*").join('');

const timer = new Timer({interval:1000});

timer.on('tick', ()=> {
    log(msg)
    msg = msg.slice(1);
})

timer.start(time * 1000)