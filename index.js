const server=require('node-http-server');
 

function serverReady(server){
   console.log( `Server on port ${server.config.port} is now up`);
}

server.deploy(
    {
        port:8000,
        root:'~/hello/'
    },
    serverReady
);