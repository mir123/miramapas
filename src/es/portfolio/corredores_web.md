---
subTitle: Panamá
title: "Corredores naturales: mapa dinámico en la web"
date: 2024-07-23
autor: "Mir Rodríguez Lombardo"
medio: "OpenLayers"
dimensiones: ""
cliente: "Almanaque Azul"
fecha: "2022-2024"
img: "assets/images/projects/corredores_dinamico_thumb.png"
linkText: "ver proyecto"
lang: "es"
---

Hice este [mapa dinámico](https://www.almanaqueazul.org/conectividad/mapa/) para acompañar el [mapa de corredores naturales de Panamá](corredores.md)y poder ver los datos con mayor detalle.

{% imagen "assets/images/projects/corredores_dinamico_3.png", "Screenshot del mapa web de corredores naturales de Panamá", "imagenFull", "" %}

El mapa permite visualizar en detalle los datos de conectividad que obtuvimos del modelo. Por medio de un slider se pueden cambiar los niveles de conductividad que se muestran. Los resultados del modelo tienen una resolución de 30 m, por lo que es posible acercarse y estudiar los efectos de conectividad a nivel de finca o de manzana urbana.

{% imagen "assets/images/projects/corredores_dinamico_4.png", "Screenshot del mapa web de corredores naturales de Panamá", "imagenFull", "" %}

Todos los mapas y los datos están disponibles públicamente en [el sitio web de Almanaque Azul](https://www.almanaqueazul.org/conectividad/).

Este mapa está desarrollado en [OpenLayers](https://openlayers.org/) y las capas se cargan usando la fantástica tecnología serverless que ahora tenemos disponible: [Protomaps](https://protomaps.com/) y [Cloud Optimized GeoTIFF](https://www.cogeo.org/). Gracias a eso es posible poner los datos en un hosting web barato, sin necesidad de un servidor geográfico como GeoServer o ArcGIS Server.

Puedes ver el mapa dinámico de corredores naturales de Panamá [aquí](https://www.almanaqueazul.org/conectividad/mapa/).

Ver también [mapa de corredores](/es/portfolio/corredores).
