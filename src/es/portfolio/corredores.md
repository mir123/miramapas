---
subTitle: Panamá
title: "Corredores naturales de Panamá"
date: 2024-07-24
autor: "Mir Rodríguez Lombardo y Michelle Szejner con Almanaque Azul"
medio: "Afiches y mapas descargables para imprimir"
dimensiones: "Varios tamaños"
cliente: "Almanaque Azul"
fecha: "2022-2024"
img: "assets/images/projects/corredores_thumb.jpg"
linkText: "ver proyecto"
lang: "es"
---

La vida en la tierra es una red que solo existe si está conectada. La conectividad ecológica es una característica fundamental de la naturaleza, necesaria para el funcionamiento de los ecosistemas y la supervivencia de las plantas y animales.

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

Entonces tuvimos la idea de dibujar las regiones de mayor conectividad y ponerles un color según la conductividad promedio que se había encontrado ahí. Les llamamos a esos polígonos _corredores naturales_ y les pusimos nombre. Creemos que ponerle nombre a cada corredor es fundamental para que las personas puedan identificarse con ellos.

Entonces diseñamos un afiche de 98 cm x 68 cm, pensando en que fuera útil para los maestros y profesores de las escuelas de Panamá. El afiche tiene pequeños artćulos sobre distintos temas, como la importancia de la conectividad ecológica, el valor de los bosques y las amenazas que enfrentan. El afiche tiene dos lados: uno con el mapa de corredores naturales,

{% imagen "assets/images/projects/corredores_a.png", "Mapa de corredores naturales", "imagenFull", "" %}

y otro lado más técnico, con los resultados del análisis e información más detallada.

{% imagen "assets/images/projects/corredores_b.png", "Mapa de corredores naturales", "imagenFull", "" %}

Imprimimos 5000 ejemplares de estos mapas y los hemos estando distribuyendo de manera orgánica, a través de grupos de maestros, organizaciones de base comunitaria y activistas.

<div class="row">

<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_2.jpeg", "Estudiantes mostrando el mapa de corredores en Lago Gatún, Colón", "imagenFull", "Lago Gatún, Colón" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_3.jpeg", "Grupo de profesores con mapas de corredores", "imagenFull", "Densidad de población" %}
</div>
<div class="col-xl-4 col-sm-6">
{% imagen "assets/images/projects/corredores_dist_1.jpeg", "Estudiantes de Digir Dub, Gunayala, con el mapa de corredores", "imagenFull", "Digir, Gunayala" %}
</div>
</div>

También se pueden descargar versiones imprimibles en tamaño carta.

<div class="row">
<div class="col-xl-6 col-sm-6">
{% imagen "assets/images/projects/corredores_carta_bn.jpg", "Pruebas de visualización de conectividad", "imagenFull", "" %}
</div>
<div class="col-xl-6 col-sm-6">
{% imagen "assets/images/projects/corredores_carta_color.jpg", "Pruebas de visualización de conectividad", "imagenFull", "" %}
</div> 
</div>

Todos los mapas y los datos están disponibles públicamente en [el sitio web de Almanaque Azul](https://www.almanaqueazul.org/conectividad/).

Ver también [mapa web de corredores](/es/portfolio/corredores_web).
