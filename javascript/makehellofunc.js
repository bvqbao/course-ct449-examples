function makeHelloFunction(name) {
  // greeting is a "closure" because it is a 
  // function defined inside another function.
  const greeting = function() {
    console.log('Hello, ' + name);
  };
  return greeting;
}

const helloWorld = makeHelloFunction('world');
const hello3 = makeHelloFunction('hello, hello');

helloWorld();
hello3();