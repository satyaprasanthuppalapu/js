//nested loops 
for (let row = 1; row <= 3; row++) {
    console.log(`outside loop ${row} {`);
    for (let col = 1; col <= 2; col++) {
        console.log(`iteration ${row} inside loop ${col}`);
    }
    console.log("}");
}