Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y **todos los transportistas que tiene en su equipo**. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

- El array contiene otros arrays que contienen los datos de cada transportista
- `transportista[0]` -> Nombre/ID del Transportista
- `transportista[1]` -> Paquetes que gestiona en un día
- `transportista[2]` -> Array con sus subordinados

Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado.

**¡Ten cuidado!** Como has visto en el segundo ejemplo, **el organigrama puede tener diferentes niveles y además nos viene información que puede ser que no necesitemos**. Debemos tener en cuenta el parámetro de `carrierID` para calcular bien el número y contar todo su equipo.