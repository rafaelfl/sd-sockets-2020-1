const net = require("net");

const connectionListener = (socket) => {

    socket.on("data", (data) => {
        const comando = data.toString();
        console.log(comando);

        const parametros = comando.split(" ");
        console.log(parametros);

        if (parametros[0] === "NUMERO_ALEATORIO") {
            let valorMaximo;

            if (parametros.length > 1) {
                valorMaximo = parseInt(parametros[1]);
            } else {
                valorMaximo = 100;
            }

            const valorAleatorio = Math.floor(Math.random() * valorMaximo) + 1;

            socket.write(valorAleatorio.toString());
        } else if (parametros[0] === "FINALIZA") {
            socket.end();
        } else {
            socket.write("COMANDO_INVALIDO");
        }
    });

    socket.on("end", () => {
        console.log("Cliente desconectado!");
    });
}

const server = net.createServer(connectionListener);

server.listen(3000, "0.0.0.0");