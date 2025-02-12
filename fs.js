import fs from "fs";

console.log("start ... ");
// const content = fs.readFileSync("./todo.txt", { encoding: "utf-8" });
// console.log(content);
fs.readFile("./todo.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

fs.appendFile("./todo.txt", "This is inserted by fs module ... appended", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("successfully written to the file ... ");
});

console.log("end ... ");