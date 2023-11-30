npm i bcrypt

Documentación de passport : https://www.passportjs.org/
npm i passport passport-local


Entrega de la clase 21: 
    - vista de login/register
    - elegir passport con alguna estrategia. (passport jwt)
    - passport github
    - probar que funcione 

1- crear las vistas de login y register: ✔
    register.hbs
    login.hbs 
2- renderizar las plantillas con alguna ruta del views ✔
3- formulario de login/register vincularlo con mis rutas post de sessions.router
4- Crear dos funciones para jwt: 
    1- Función que genere token(gerenateToken).
    2- Función(middleware) que valida el token (authToken). Extre el token de la headers y valida el token
4-bis crear la función para encriptar el password:
    - instalar bcrypt
    - aplicar en register y en login
5- Instalar passport-github y passport-jwt
6- Crear configuración de passport-jwt
7- Crear configuración de passport-github
8- Llamar la fucnión initilazePassport() en app/server
9- crear passportCall que se encarga de ejecutar el método authenticate, para dar un mensaje mas preciso. 
10- middle atuhorization para validar el role. 
11- proteger una ruta para ver si todo funciona

// clase 33 nvm 

- descargar nvm: -> https://github.com/coreybutler/nvm-windows/releases
- desintalar node, mirar la versión tenemos. 
- instalar nvm desde el instalador descargado

Instrucciones nvm(desde la terminal): 
    - nvm      -> listado de comandos que podemos usar
    - nvm -v   -> 
    - nvm list -> listado que tenemos instalados. Recién instalado no aparece nada
    // si no tenemos nada necesitamos instalr node. 
    - nvm list available -> ver las versiones de node. Usar las versiones estables. 

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    21.2.0    |   20.10.0    |   0.12.18    |   0.11.16    |
|    21.1.0    |    20.9.0    |   0.12.17    |   0.11.15    |
|    21.0.0    |   18.19.0    |   0.12.16    |   0.11.14    |
|    20.8.1    |   18.18.2    |   0.12.15    |   0.11.13    |
|    20.8.0    |   18.18.1    |   0.12.14    |   0.11.12    |
|    20.7.0    |   18.18.0    |   0.12.13    |   0.11.11    |
|    20.6.1    |   18.17.1    |   0.12.12    |   0.11.10    |
|    20.6.0    |   18.17.0    |   0.12.11    |    0.11.9    |
|    20.5.1    |   18.16.1    |   0.12.10    |    0.11.8    |
|    20.5.0    |   18.16.0    |    0.12.9    |    0.11.7    |
|    20.4.0    |   18.15.0    |    0.12.8    |    0.11.6    |
|    20.3.1    |   18.14.2    |    0.12.7    |    0.11.5    |
|    20.3.0    |   18.14.1    |    0.12.6    |    0.11.4    |
|    20.2.0    |   18.14.0    |    0.12.5    |    0.11.3    |
|    20.1.0    |   18.13.0    |    0.12.4    |    0.11.2    |
|    20.0.0    |   18.12.1    |    0.12.3    |    0.11.1    |
|    19.9.0    |   18.12.0    |    0.12.2    |    0.11.0    |
|    19.8.1    |   16.20.2    |    0.12.1    |    0.9.12    |
|    19.8.0    |   16.20.1    |    0.12.0    |    0.9.11    |
|    19.7.0    |   16.20.0    |   0.10.48    |    0.9.10    |

- nvm install <version> -> Elegir de la 18 en adelante, también tener la que usabamos. 

Si quiero usar la versión instalada:
- nvm use <version>

  * 20.10.0 (Currently using 64-bit executable)
    20.2.0 
    18.17.0
    18.16.1
    18.16.0
    18.12.1
    18.2.0 
    16.17.0
    16.13.0

Equivalencias npm: 
    yarn y pnpm 
    - npm i -g <yarn o pnpm> -> instalación global 
    ejemplo de npm -> npm i <librería>
    - para instalar -> yarn add <libreria> , pnpm add <libreria>
    npm uninstall <nombre>
    - yarn remove <libreria> 
    - pnpm remove <libreria> 

    -npm outdate -> actualizaciones de las dependencias usadas en server.js 
    Package             Current  Wanted  Latest  Location                         Depended by
    express-handlebars    6.0.7   6.0.7   7.1.2  node_modules/express-handlebars  8-08-c58070-myj-m
    mongoose              7.6.6   7.6.6   8.0.2  node_modules/mongoose            8-08-c58070-myj-m
    passport              0.6.0   0.6.0   0.7.0  node_modules/passport            8-08-c58070-myj-m

    npm update -> actualizar las dependencias
    npm init -> crea el package.json vamos ingresando los datos por terminal 
    npm init -y -> crea el package.json por defecto 
    npm run <algo mas> -> corre los script que config.
