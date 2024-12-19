Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

- Un número con la **capacidad máxima de regalos en el trineo**.
- El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
    - `trip[0]` = número de regalos a transportar
    - `trip[1]` = punto de recogida de los regalos
    - `trip[2]` = punto de entrega de los regalos

La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

Lo difícil, e importante, es que entiendas que Santa Claus **va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.**