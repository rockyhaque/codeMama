function main (input) {
    const data = input.split(" ");
    let sum = 0;

    for(let i = 0; i < data.length; i++){
        const item = Number(data[i])
        sum += item;
    }
    
    let avg = sum / data.length;
    console.log("Average:", avg.toFixed(2))
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
