// Write a program demonstrating the execution order of setTimeout, setImmediate,
// process.nextTick, and Promise callbacks.
console.log("start");
setTimeout(()=>{
    console.log('setTImeout at 3sec');
},3000);
setImmediate(()=>{
    console.log("setIimidaite ");
});
process.nextTick(()=>{
    console.log("next tick");
});
Promise.resolve().then(()=>{
    console.log("promise czllback");
})