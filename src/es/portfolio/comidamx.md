---
país: "México"
title: "Comidas de las culturas de México"
subtítulo: "Los alimentos nativos del territorio en un mapa mural"

date: 2022-11-16
autor: "Mir Rodríguez Lombardo y Kitzia Sámano Valencia (ver créditos completos abajo)"
medio: "Inédito"
dimensiones: "4.43 m × 3.32 m"
cliente: "Cencalli, la casa del maíz y la cultura alimentaria (Secretaría de cultura de México)"
fecha: "noviembre de 2022"
año: 2022
img: "assets/images/projects/mapa_comida_mexico_570.jpg"
linkText: "ver proyecto"
lang: "es"
---

Este mapa fue idea que surgió de Genoveva de la Peña, que en ese entonces era la directora de _Cencalli, la casa del maíz y la cultura alimentaria_. Cencalli es un museo y centro cultural que forma parte de la Secreataría de Cultura de México y querían un mapa de comidas de México para poner en una de sus salas.

La primera pregunta entonces es ¿qué significa mapa de comida? Pueden ser muchas cosas diferentes. De la mano de Alexander Ortega Sepúlveda, experto en cocinas indigenas de México, decidimos que el mapa sería de los ingredientes ancestrales que seguimos comiendo en este territorio y de dónde se cultivan. Esto dejó por fuera cosas como el plátano, el limón y el arroz, que se cultivan y se comen mucho aquí, pero que no son originarios de este lugar. Alexander, en consulta con Cencalli, decidió la lista final de "alimentos esenciales"

{% imagen "assets/images/projects/bosquejo_mapa_comida.jpg","Bosquejo del mapa de comida", "imagenIzq" %}

La conceptualización de este trabajo la hice junto a Sari Denisse, con la que ideamos el retrato del tiempo cíclico centrado en el cultivo y cosecha de la milpa, y con quien también decidí el giro exacto del mapa. Luego me asocié para el diseño con la ilustradora Kitzia Sámano Valencia. Trabajar con Kitzia fue un placer total, ya que a ambos nos gusta fijarnos en detalles a escala nerd, buscando muchas referencias y validando los diseños entre ambos. Ella diseñó los íconos de las comidas y la milpa con todos sus personajes humanos y no humanos.

{% imagen "assets/images/projects/comida_aframe_humano.png","imagen 3D del mapa en simulación VR", "imagenIzq", "Esto se veía en VR y uno podía caminar por ahí. Le agregué una silueta para que se note el tamaño que tendrá mapa cuando lo impriman" %}

Este mapa está concebido para una pared de 4.4 m x 3.3 m y eso fue un gran reto. Es muy difícil imaginar cómo se va a ver algo de ese tamaño desde el monitor. Para resolver ese problema eché mano de [A-Frame](https://aframe.io/), una herramienta que hace muy fácil programar (en HTML y JavaScript) experiencias de realidad virtual visibles a través un navegador como Firefox. Usando un viejo Oculus Quest 1 pude ver esa pared de cerca y de lejos y ajustar el tamaño y la posición de los elementos del mapa. También sirvió para mostrar a la gente de Cencalli el mapa casi listo.

Cuando llegó el momento de producir el mapa final, estábamos hablando de 52K x 39K pixeles o poco más de 2 mil megapixeles. El proceso de producir y juntar esas capas no fue nada sencillo y lo documenté en un [tutorial](https://mirrodriguezlombardo.com/huge-images).

Hasta la fecha este mapa no ha sido impreso, así que este portafolio es la primera vez que se publica.

> Mapa por Mir Rodríguez Lombardo y Kitzia Sámano Valencia,
> Idea e inspiración de Genoveva de la Peña Chávez,
> Investigación por Alexander Ortega Sepúlveda y Mauricio Ávila Serratos,
> Concepto por Sari Dennise.

{% imagen
  "assets/images/projects/mapa_comida_mexico_final_07c_3000.jpg",
  "Mapa de alimentos esenciales de las culturas de México",
  "imagenFull",
  "",
  {
    dataPswpTileType: "deepzoom",
    dataPswpTileUrl: "/mosaicos/comida_files/{z}/{x}_{y}.jpg",
    dataPswpMaxWidth: "52438",
    dataPswpMaxHeight: "39213"
  }
%}
