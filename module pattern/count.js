const counter=(arr)=>{
// return 'there are ' + arr.length + " elements in array";
return `there are ${arr.length} elements in array`;
};

const adder=(a,b)=>{

    return `the sum is ${a+b}`;
};

const pi=3.14;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;