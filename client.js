const net = require('net');

const client = net.Socket();

const clientConnected = () => {
    // console.log("Cliente conectado");

    client.write("NUMERO_ALEATORIO 10");
    
    client.on("data", (data) => {
        console.log("Número aleatório: " + data.toString());
    
        client.write("FINALIZA");
    });
}

client.connect(3000, "www.ecp.ufma.br", clientConnected)