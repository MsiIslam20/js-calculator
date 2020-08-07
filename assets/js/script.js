var a = 20;
var b = 10;
var result = a + b;
var diff = a - b;
console.log(result);
console.log(diff);


//closers
function stopWatch(){
    let count = 0;
    return function(){
        count++
        return count
    }
}

const output = stopWatch();
console.log(output());
console.log(output());
console.log(output());
console.log(output());

const output2 = stopWatch();
console.log(output2());
console.log(output2());
console.log(output2());


