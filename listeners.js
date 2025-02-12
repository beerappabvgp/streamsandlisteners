import EventEmitter from "events";

const emitter = new EventEmitter();


emitter.setMaxListeners(10);

for (let i = 0; i < 13; i++) {
    emitter.on("greet", () => {
        console.log("Hi there 🚀🚀🚀");
    }); 
}
emitter.on("error", (err) => {
    console.log(err);
});

for (let i = 0; i < 13; i++) {
    emitter.emit("greet");
}

// emitter.emit("greet");
// emitter.emit("greet");
// emitter.emit("greet");