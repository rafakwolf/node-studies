console.log('n-fatorial');

const fatorial = (num) => {
    if (num === 0) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}

console.log(`fatorial de 5 é = ${fatorial(5)}`);