const http = require('http'); //Ya estaba declarada para nuestro servidor
const path = require('path');
const fs   = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    switch(req.url){
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.write(`
                <h1>Este es el indice de la pagina</h1>
                <p>Las rutas existentes son:</p>
                <ul>
                    <li>/caso1</li>
                    <li>/caso2</li>
                    <li>/caso3</li>
                    <li>secreto (ve a caso3)</li>
                </ul>
            `);
            res.end();
            break;      
            
        case "/caso1":
            res.setHeader("Content-Type", "text/html");
            res.write(`
            <h3> HOLAAAAAAA YO SOY CASO 1, VE CON EL SIGUIENTE CASO (si quieres, si no quieres ps no)</h3> 
                `);
            res.end();
            break;     

        case "/caso2":
            res.setHeader("Content-Type", "text/html");
            res.write(`
            <h3> HOLAAAAAAA YO SOY CASO 2, VE CON EL SIGUIENTE CASO (ve con el ultimo caso, porfi, no tengo mucha creatividad, es lo mismo)</h3> 
                `);
            res.end();
            break;     
        case "/caso3":
            res.setHeader("Content-Type", "text/html");
            res.write(`
            <h3> Ya se acabo esto, creo, si vas pa otro lado q no seamos estos 3 casos no hay nada (puede haber un /formulario, quiza si, quiza no) </h3> 
                `);
            res.end();
            break; 
        
        case "/formulario":
        if(req.method == "GET"){
                res.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, "./form.html"), "utf8");
                res.write(html);
                res.end();

            } else if(req.method == "POST"){
                let body = [];

                req.on('data', chunk => {
                    body.push(chunk);
                });

                req.on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body);

                    fs.appendFileSync(
                        path.resolve(__dirname, "datos.txt"),
                        body + "\n"
                    );

                    res.setHeader('Content-Type', 'text/html');
                    res.write("<h1>Datos guardados correctamente</h1>");
                    res.end();
                });
            }
            break;
        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});