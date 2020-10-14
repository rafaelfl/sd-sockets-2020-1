const net = require('net');

const client = net.Socket();

const clientConnected = () => {
    console.log("Cliente conectado");

    client.on("data", (data) => {
        console.log("===> ");
        console.log(data.toString());
    });
}

client.connect(3000, "127.0.0.1", clientConnected)