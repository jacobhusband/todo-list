const evt = new EventEmitter();

evt.subscribe("Piss", (value) => console.log(value));

evt.emit("Piss", 19);
