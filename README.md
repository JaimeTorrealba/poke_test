# poke_test

# Poke_test

El sitio se puede ver directamente en: https://determined-dubinsky-04124a.netlify.app/

De manera adicional, generé una microanimación del SVG. La cual por motivos de velocidad no encontré pertinente implementar. Sin embargo, pueden encontrarla en este link https://codepen.io/jaime_torrealba/pen/LYWWmyp?editors=1000

He utilizado el state "pokemons" como fuente de verdad, la cual actua como una DB, por lo que algunas lineas de codigo (como ejemplo 26 y 28 ubicadas en store/index.js) no existirían en una aplicacion real. (hace un poco grande la mutation).

### Consideraciones generales:
- Los nombres de de las carpetas son a modo de ejemplo y tienen como fin demostrar el uso del atomic design.
- Me gustra trabajar con el atomic design, sin embargo, puede que de ser necesario para mayor escalabilidad, se defina que por ejemplo la logica se contenga solo en "organism" o en "molecules".
- Al ser un proyecto corto no realicé historial de commits.
- Debido a disponibilidad de tiempo, no pude integrar test ni la revisión de algunos detalles, por lo que pido se me disculpe (Este fin de semana me encuentro realizando y monitoreando cambios de la camapa desafiocoaniquem.cl que termina esta proxima semana).
- Existen unas pequeñas transiciones, tanto en el picachu (home), como en las stars (add favorite)
- Las imágenes de los pokemons (por ejemplo de squirtle front_default) No es exactamente la misma que aparece en el figma 
- Importé las fuentes de googlefont y los iconos de material pero esto no es recomendable a no ser que el proyecto sea mas grande, ya que incrementa el FCP 
- Auditando el sitio con algunas herramientas, tiene buenas metricas, solo algunos detalles como por ejemplo la falta de contraste en los botones, la falta de algunos metas, o un favicon personalizado, o lo ya mencionado con la importacion por CDN. Ademas el usar vuetify facilita temas de accesibilidad (pero faltaria probar con usuarios reales)  

### stack
- Vuejs
- Vuex
- Vue-router
- Vuetify

### Conclusiones
Muchas gracias por la oportunidad, me encantaría poder recibir feedback de esta evaluación independientemente de la aprobación o no. 

Entrego antes de los 3 dias limites debido a otros deberes.

Saludos Cordiales
Jaime Torrealba

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
