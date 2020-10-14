const net = require('net');

const connectionListener = (socket) => {
    socket.write("Ola! Bem vindo ao sistema de mensagens. Digite uma letra e eu vou te mandar uma mensagem do dia");

}

const server = net.createServer(connectionListener);

server.listen(3000, "0.0.0.0");