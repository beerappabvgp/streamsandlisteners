import fs from "fs";


// const readStream = fs.createReadStream("./todo.txt", { encoding: "utf-8" });
// readStream.on("error", (err) => {
//     console.log(err);
// });

// let count = 0;

// readStream.on("data", (stream) => {
//     count += 1;
//     console.log(stream);
// });

// readStream.on("end", () => {
//     console.log("count is: ", count);
// });


const writeStream = fs.createWriteStream("./dummy.txt", { encoding: "utf-8" });
writeStream.on("error", () => {
    console.log(error);
});

writeStream.write("This is first chunk");
writeStream.write("This is second chunk");
writeStream.write("This is third chunk");
writeStream.close();

writeStream.on("finish", () => {
    console.log("success ... ");
});


