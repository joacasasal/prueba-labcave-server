# prueba-labcave-server
Server NodeJS express de la Prueba LabCave FullStackDeveloper de Joaqu&iacute;n Casas.

###### Para arrancar el servidor:
*nodemon index.js*

###### Configuración:
- **nodemon**: para recargar el servidor al detectar cambios en el c&oacute;digo.
- **eslint**: linter.
- **dateformat**: para formatear fechas.

###### Estructura proyecto:
- **api/controllers**: contiene la l&oacute;gica de los m&eacute;todos de las apis.
  + **time**:
    + **getTime**: obtiene la fecha actual en formato HH:MM:ss (Horas:Minutos:Segundos).
- **api/routes**: contiene los m&eacute;todos de las apis.
