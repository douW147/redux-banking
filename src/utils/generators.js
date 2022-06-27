const generator = function*(){
    yield 5;
    return true;
};

const doGen = generator();

console.log(generator().next());
console.log(doGen.next());
