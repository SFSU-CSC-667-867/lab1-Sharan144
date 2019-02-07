
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now 1'));
setImmediate(() => console.log('Now 2'));
setImmediate(() => console.log('Now 3'));
console.log('world');


//nextTick puts it last to do on the current batch of things to do (last thing of the current cycle)
//setImmediate won't call it until the next pulling stage/cycle/queue