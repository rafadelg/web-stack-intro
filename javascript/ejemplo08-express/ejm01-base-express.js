
/* 
ORGANIZACIÓN DE RUTAS, ENRUTAMTO
2º prueba, usando app Chrome-Postman
GET localhost:8080

//construcción del resto de verbos
//analizo la salida
console.log(response);

Parametrización de mis url's (proceso de enrutanmto)
a) base path (index), vía:
-patrones
-expresiones regulares: RegExp Object (extender/personalizar; cdo sea need)
-expresiones regulares extendidas
b) data-area path (inclusión de datos para facilitar ulterior tratamto)
-path params

Tareas (funcionalidades) adicionales/intermedias, concatenadas vía manejadores "handlers"
Se trata de un proceso previo a la respuesta (antes de servir la petición), ejm:
- Auditoría (logs)
- Atenticación (login)
- acceso a datos (bbdd): procesamto previo
a) por url de petición
   next(); para concatenación de manejadores/funciones, se coloca al final de la funcion
b) por ruta: route()
c) Definir un objeto router (no se indica ruta alguna): express.Router();
   +hay q definir cómo el enrutador va a trabajar/comportarse (para una funcionalida; la q sea)
   +permite generar árboles de enrutamto (cada uno con sus "handlers"; ya no tengo una concatenación única) 
   +se suelen separar en ficheros (ctes, fras, pedidos...)
   mapeo/asignación dinámica de paths

   Tratamto de excepciones:
   ¿compete al router?
   si: lo trato (error controlado)
   no: no hago nada. 
    si es del cte; q se propague al cte  (indicándole, únicamte, q algo ha ido mal
    si es de la bd; q se propague a la bd
*/