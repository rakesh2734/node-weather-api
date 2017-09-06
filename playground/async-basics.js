console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback function');
}, 2000);

setTimeout(() => {
    console.log('This is a Second callback');
}, 0);

console.log('Finishing up');


