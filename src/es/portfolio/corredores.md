---
país: Panamá
title: "Corredores naturales de Panamá"
subtítulo: "Revelando los caminos de la naturaleza"

date: 2024-07-24
autor: "Mir Rodríguez Lombardo y Michelle Szejner con Almanaque Azul"
medio: "Afiches y mapas descargables para imprimir"
dimensiones: "Varios tamaños"
cliente: "Almanaque Azul"
fecha: "2022-2024"
año: "2022-2024"
img: "assets/images/projects/corredores_thumb.jpg"
linkText: "ver proyecto"
lang: "es"
---

La vida en la tierra es una red que solo existe si está conectada. La conectividad ecológica es una característica fundamental de la naturaleza, necesaria para el funcionamiento de los ecosistemas y la supervivencia de las plantas y animales.

### Cómo lo hicimos

El proceso de hacer este mapa comenzó por investigar las distintas maneras de modelar la conectividad. Decidimos hacer un mapa de conectividad _estructural_, la cual está basada en el paisaje, es decir: si un lugar es pasto, bosque o estadio de fútbol; si la carretera es una autopista de 8 carriles o un camino de tierra; si el pueblo es una ciudad de 1 millón de habitantes o una comunidad rural donde viven 100 personas. Para preparar los datos de entrada al modelo, reunimos mapas de cobertura de suelo, resultados del censo de población, las calles de OpenStreetMap y los ríos:

<div class="row"> 
<div class="col-xl-3 col-sm-6">
{% imagen "assets/images/projects/conectividad_usosuelo.png", "Capa de cobertura de suelo de Panamá", "imagenFull", "Cobertura de suelo" %}
</div>
<div class="col-xl-3 col-sm-6">
{% imagen "assets/images/projects/conectividad_calles.png", "Capa de calles de Panamá de OSM", "imagenFull", "Calles OSM" %}
</div>
<div class="col-xl-3 col-sm-6">
{% imagen "assets/images/projects/conectividad_densidad.png", "Capa de densidad de población de Panamá", "imagenFull", "Densidad de población" %}
</div>
<div class="col-xl-3 col-sm-6">
{% imagen "assets/images/projects/conectividad_rios.png", "Capa de ríos de Panamá", "imagenFull", "Ríos" %}
</div>
</div>

Luego de combinar estas capas definimos 20 categorías de paisaje y consultamos a un grupo de biólogos que nos ayudaron a dar a cada categoría una calificación de resistencia/conductividad para los seres vivos. El bosque maduro tiene la menor resistencia al movimiento de especies, mientras que la másima resistencia la ponen las autopistas, ciudades e infraestructura. Con el mapa y las calificaciones de los expertos corrimos un modelo de conectividad ecológica usando [Omnisccape](https://docs.circuitscape.org/Omniscape.jl/stable/#About-Omniscape.jl). Esta es una aplicación que utiliza teoría de circuitos para simular la conectividad, como si los seres vivos fueran cargas eléctricas que se mueven dentro de un circuito.

### Qué descubrimos

Los resultados, luego de probar la simulación con distintos parámetros, fueron muy interesantes y nos revelaron caminos de conectividad que no conocíamos.

{% imagen "assets/images/projects/corredores_viz_1.jpg", "Mapa de conectividad en El Valle, Panamá", "imagenFull", "" %}

Pero estos mapas eran difíciles de interpretar. Desde el principio nuestra idea con este proyecto era dar una herramienta a las comunidades y activistas para defender la naturaleza y crear un mapa que se pudiera usar en el salón de clases. Probamos distintas formas de tratar de hacer que los resultados los pudiera entender cualquier persona que no fuera experto:

<div class="row">
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_viz_2.jpg", "Pruebas de visualización de conectividad", "imagenFull", "" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_viz_3.png", "Pruebas de visualización de conectividad", "imagenFull", "" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_viz_4.png", "Pruebas de visualización de conectividad", "imagenFull", "" %}
</div>
</div>

### Los corredores

Entonces tuvimos la idea de dibujar las regiones de mayor conectividad y ponerles un color según la conductividad promedio que se había encontrado ahí. Les llamamos a esos polígonos _corredores naturales_ y les pusimos nombre. Creemos que ponerle nombre a cada corredor es fundamental para que las personas puedan identificarse con ellos.

Diseñamos un afiche de 98 cm x 68 cm, pensando en que fuera útil para los maestros y profesores de las escuelas de Panamá. El afiche tiene pequeños artćulos sobre distintos temas, como la importancia de la conectividad ecológica, el valor de los bosques y las amenazas que enfrentan. El afiche tiene dos lados: uno con el mapa de corredores naturales,

{% imagen "assets/images/projects/corredores_a.png", "Mapa de corredores naturales", "imagenFull", "" %}

y otro lado más técnico, con los resultados del análisis e información más detallada.

{% imagen "assets/images/projects/corredores_b.png", "Mapa de corredores naturales, lado técnico", "imagenFull", "" %}

### Los afiches para los salones

Imprimimos 5000 ejemplares de estos mapas y los hemos estando distribuyendo de manera orgánica, a través de grupos de maestros, organizaciones de base comunitaria y activistas.

<div class="row">

<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_2.jpeg", "Estudiantes mostrando el mapa de corredores en Lago Gatún, Colón", "imagenFull", "Lago Gatún, Colón" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_3.jpeg", "Grupo de profesores con mapas de corredores", "imagenFull", "Un grupo de educadores" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_1.jpeg", "Estudiantes de Digir Dub, Gunayala, con el mapa de corredores", "imagenFull", "Digir, Gunayala" %}
</div>
</div>

También se pueden descargar versiones imprimibles en tamaño carta.

<div class="row">
<div class="col-xl-6 col-sm-6">
{% imagen "assets/images/projects/corredores_carta_bn.jpg", "Mapa tamaño carta a blanco y negro", "imagenFull", "" %}
</div>
<div class="col-xl-6 col-sm-6">
{% imagen "assets/images/projects/corredores_carta_color.jpg", "Mapa tamaño carta a colores", "imagenFull", "" %}
</div> 
</div>

Todos los mapas y los datos están disponibles públicamente en [el sitio web de Almanaque Azul](https://www.almanaqueazul.org/conectividad/).

### El mapa dinámico en la web

Hice este [mapa dinámico](https://www.almanaqueazul.org/conectividad/mapa/) para acompañar el [mapa de corredores naturales de Panamá](corredores.md)y poder ver los datos con mayor detalle.

{% imagen "assets/images/projects/corredores_dinamico_3.png", "Screenshot del mapa web de corredores naturales de Panamá", "imagenFull", "" %}

El mapa permite visualizar en detalle los datos de conectividad que obtuvimos del modelo. Por medio de un slider se pueden cambiar los niveles de conductividad que se muestran. Los resultados del modelo tienen una resolución de 30 m, por lo que es posible acercarse y estudiar los efectos de conectividad a nivel de finca o de manzana urbana.

{% imagen "assets/images/projects/corredores_dinamico_4.png", "Screenshot del mapa web de corredores naturales de Panamá", "imagenFull", "" %}

### Usé estas tecnologías

Este mapa está desarrollado en [OpenLayers](https://openlayers.org/) y las capas se cargan usando la fantástica tecnología serverless que ahora tenemos disponible: [Protomaps](https://protomaps.com/) y [Cloud Optimized GeoTIFF](https://www.cogeo.org/). Gracias a eso es posible poner los datos en un hosting web barato, sin necesidad de un servidor geográfico como GeoServer o ArcGIS Server.

Puedes ver el mapa dinámico de corredores naturales de Panamá [aquí](https://www.almanaqueazul.org/conectividad/mapa/).
