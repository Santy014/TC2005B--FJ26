const http = require("http");
const log = console.log;
const server = http.createServer((req, res) => {
  log(req.url);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<h1>Inicio</h1><a href='/lab1'>Ir a Laboratorio 1</a>");
  } 
  
  else if (req.url === "/lab1") {
    res.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 1 y 2</title>
    </head>
    <body>
    <h1> 
        Laboratorio 1 
    </h1>
    <h3> 
        1. ¿Cuál es la diferencia entre Internet y la World Wide Web?
    </h3>
    <p> 
       Internet es un sistema global que conecta computadoras y dispositivos mundialmente, habilitando la comunicacion, intercambio de informacion y acceso a servicios digitales.
        <br>
       Segun la Real Academia de Ingenieria (RAING) la World Wide Web (WWW) es una red mundial de distribución y recuperación en hipertexto a tráves de internet en la que hay nodos que almecenan y distribuyen 
        informacion a los que se denominan servidores de web y usuarios que se conectan a la red para localizar informacion de su interes utilizando motores de busqueda y consultarla a traves de un navegador de hipertextos. 
        <br>
        Al comprender el significado de ambos terminos, podemos lograr entender su diferencia, la diferencia es que la internet es la infraestructura que habilita la conexion entre dispositvos, mientras WWW es un servicio que funciona sobre internet y permite acceder a informacion en forma de hipertextos.
    </p>

    <h3> 
        2. ¿Cuáles son las partes de un URL?
    </h3>
    <p> 
        La partes de un URL se componen de la siguiente manera: <br>
         <strong> 1. Protocolo </strong> <br>
         Esquema o protocolo, este componente identifica que protoclo debe utilizarse para acceder a un recurso en internet. Comunmente se utiliza el protocolo 
         http (sin SSL, protocolo de seguridad) o https (con SSL). <br> <br>

         <strong> 2. Dominios </strong> <br>
         El nombre del host permite identificar el host que cuenta con el recurso. <br>
         Ej. 192.168.20.5 (IP del host con el recurso) o Ej. youtube (Direecion IP traducida mediante el protocolo DNS). <br>
         
         <strong> 3. Numero de Puerto:  </strong> <br>
         Los dominios pueden contener un numero de puertos, generalmente las URLs suelen omitir el numero de puerto, HTTPS usa el puerto 443, HTTP puerto 80. <br>
         Ej. (Dominio):443   (Dominio con puertos 443, usando protocolo 443).
         <br>
         <strong> 4. Ruta:  </strong> <br>
         Recurso o endpoint que solicita el servidor. <br>
         Ej. (protocolo)// (dominio):(Puerto)/ (Ruta) o (InicioRuta/.../FinRuta) 
         <br> 
         <strong> 5. Query String:  </strong> <br>
         Query String es aquella parte de la URL que asigna valores especificos a parametros. <br>
         EJ. ?param=valor 
         <br>
         <strong> 6. Fragmento:  </strong> <br>
         Generalmente llamado "ancla" (o anchor en ingles), usualmente aparece al final del url, empieza con un simbolo hash (#), se refiere a una seccion de la pagina Web,
         un rasgo especial de este segmento es que no se manda en la requests de HTTP, la razon de esto es que este fragmento solo se utiliza del lado del navegador. <br>
         Ej. #sección
         <br>    
  </p>

    <h3> 
        3. ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
        Un metodo dentro de HTTP nos define cual será el request que hará el URL, los métodos dentro de HTTP son los siguientes:

    </h3>
    <p> 
        <strong> GET: </strong> Solicita la información de un recurso especifico. <br>
        <strong> HEAD: </strong> Similar a método GET, Head solamente proporciona al usuario los encabezados del recurso, sin el cuerpo de la información. <br>
        <strong> POST: </strong> Este método sube una carga de datos al servidor para crear un nuevo servidor, o para disparar una acción.<br>
        <strong> PUT: </strong> Este método actualiza o reemplaza un recurso existente en una URL especifica donde se hará el request, en caso de que no exsita el recurso se hace crea el recurso. <br> 
        <strong> PATCH:</strong> Utilizado para realizar modificaciones parciales a el recurso. <br>
        <strong> DELETE: </strong> Este método borra el recurso especificado.<br>

    </p>

    <h3> 
        4. ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
    </h3>
    <p> 
    El método que se debe utilizar al enviar un formulario de inicio de sesión es POST, principalmente porque ofrece mayor seguridad y está diseñado para este tipo de acciones. 
    Esto se debe a que los datos enviados mediante esta solicitud (como el usuario y la contraseña) se incluyen en el cuerpo de la petición y no en la URL, lo que reduce su exposición.

    Además, el método POST permite enviar datos al servidor para que este procese una acción, como la autenticación del usuario.
    </p>

    <h3> 
        5. ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
    </h3>
    <p> 
        El método que utilizariamos en este caso seria GET. Este método nos permite solicitar recursos del servidor, como lo podria ser el caso de acceder a una pagina.
    </p>

    <h3> 
        6. Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
    </h3>
    <p> 
        No, no existio un error, Este codigo nos reporta que la solicitud fue exitosa, por lo que devolvera la solicitud en el cuerpo del a solicitud
    </p>

    <h3> 
        7. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?
    </h3>
    <p> 
        Podria ser responsabilidad de ambos, este codigo de Error nos reporta que el recurso solicitado no existe, podria ser responsabilidad de cualquiera de los dos actores,
        esto se debe a que podria ser responsabilidad del desarrollador debido a un enlace roto o una mala configuración del sitio, por otro parte podria ser responsabilidad del usuario al ingresar incorrectamente el URL.

    </p>

    <h3> 
        8. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?
    </h3>
    <p> 
        Si, es responsabilidad del desarrolladro corregir el sitio web, el Error 500 - Internal Server Error es un mensaje de error generico, este mensaje es desplegado cuando no hay mensaje de error 
        que sea mas adecuado para el caso. Generlamente se debe a fallos relacionados con el codigo o configuracion incorrectas del sistema.
    </p>

    <h3> 
        9. ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.   
    </h3>
    <p> 
        Los atributos de HTML5 que son depreciados son aquellos que son permitidos, mas sin embargo no son recomendados por su uso y han sido reemplazados por practicas mas modernas, 
        principalmente mediante el uso de CSS. Atributos como align, bgcolor, border, color han sido depreciados de HTML4 a HTML5. 

    </p>

    <h3> 
        10. ¿Qué componentes de estructura y estilo tiene una tabla?
    </h3>
<p> 
    Una tabla cuenta con los siguientes componentes en HTML:

    <ul>
        <li><strong>table:</strong> 
            Define la tabla.</li>
        <li><strong>th:</strong> 
            Define una celda de encabezado en la tabla.</li>
        <li><strong>tr:</strong> 
            Define una fila en la tabla.</li>
        <li><strong>td:</strong> 
            Define una celda en la tabla.</li>
        <li><strong>thead:</strong> 
            Agrupa el encabezado de la tabla.</li>
        <li><strong>tbody:</strong> 
            Agrupa el cuerpo de la tabla.</li>
        <li><strong>tfoot:</strong> 
            Agrupa el pie de la tabla.</li>
        <li><strong>caption:</strong> 
            Define el título de la tabla.</li>
    </ul>

    En cuanto al estilo, en HTML5 se utiliza CSS para mejorar la apariencia de las tablas. Por ejemplo, se puede usar "tr:hover" para resaltar filas al pasar el cursor del mouse, "border-bottom: rgba()" para aplicar bordes con transparencia 
    y ":nth-child(even)" para alternar colores entre filas, mejorando la legibilidad.
</p>


    <h3> 
        11.¿Cuáles son los principales controles de una forma HTML5?
    </h3>
    <p> 
        Una forma dentro de HTML5 es utilizada para coleccionar input de un usuario. Generalmente esta informacion se manda al servidor para que sea procesada  
        <ul>
            <li><strong>input:</strong> 
                Permite ingresar diferentes tipos de datos.</li>
            <li><strong>label:</strong> 
                Define una etiqueta para un grupo de elementos.</li>
            <li><strong>select:</strong> 
                Crea una lista desplegable.</li>
            <li><strong>textarea:</strong> 
                Permite ingresar texto de varias líneas.</li>
            <li><strong>button:</strong> 
                Crea un botón presionable, que permite realizar acciones.</li>
            <li><strong>fieldset:</strong> 
                Agrupa elementos relacionados en un formulario.</li>
            <li><strong>legend:</strong> 
                Define el título de un fieldset.</li>
            <li><strong>datalist:</strong> 
                Proporciona opciones sugeridas para inputs.</li>
            <li><strong>output:</strong> 
                Muestra el resultado de una operación.</li>
        </ul>
    </p>

    <h3> 
        12. Sobre el ciclo de vida y desarrollo de los sistemas de información: ¿Cuál es el ciclo de vida de los sistemas de información? ¿Cuál es el ciclo de desarrollo de sistemas de información?
    </h3>
    <p> 
        El ISLC (por sus siglas en ingles "Information System Life Cycle") es un marco de trabajo util para manejar el desarrollo, mantenimiento, y el retiro de el sistema de informacion de una organizacion.
        Este ciclo permite dividir el desarrollo en fases más pequeñas, lo que facilita la comprensión del problema y mejora la calidad del sistema final.
        <br>  <br>
        Las principales etapas del ciclo de vida son: <br>
            <strong> Planificación: </strong> Se definen los objetivos, alcance y recursos del sistema. <br>
            <strong> Diseño: </strong> Se determina cómo funcionará el sistema y su estructura. <br>
            <strong> Desarrollo: </strong> Se construye y programa el sistema. <br>
            <strong> Pruebas: </strong> Se verifica que el sistema funcione correctamente y sin errores. <br>
            <strong> Implementación: </strong> El sistema se pone en funcionamiento. <br>
            <strong> Mantenimiento: </strong> Se realizan mejoras, correcciones y actualizaciones continuas. <br>
        <br> 

    </p>
</body>
<footer> Editor Utilizado: VS Code -- https://code.visualstudio.com/ , Fuente Utilizadas: W3Schools - https://www.w3schools.com/ , HTMLHelp - https://www.htmlhelp.com/reference/html40/deprecated.html, Postman - https://blog.postman.com/put-vs-post/, </footer>
</html>
`);
} 
  res.end();
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});