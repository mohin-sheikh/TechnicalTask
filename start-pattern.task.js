let space = 20;
let k = 1;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < space; j++) {
        process.stdout.write(" ");
    }
    space -= 4;
    for (let j = 0; j < k; j++) {
        process.stdout.write("* ");
    }
    k += 2;
    process.stdout.write("\n");
}
process.stdout.write("\n");
