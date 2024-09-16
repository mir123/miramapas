---
país: "Colombia"
title: "From the Pacific"
date: 2024-04-01
autor: "Mir Rodríguez Lombardo"
medio: "Digital Print"
dimensiones: "2 m × 2 m"
cliente: "Modern Art Museum of Medellin"
fecha: "April 2024"
img: "assets/images/projects/desde_el_pacifico_570.jpg"
linkText: "see project"
featureImg1: "/assets/images/projects/project-details-image-one.jpg"
featureImg2: "/assets/images/projects/project-details-image-two.jpg"
lang: "en"
---

  <script src="/assets/js/openseadragon/openseadragon.min.js"></script>

When curator Yolanda Chois called me and asked for this map, I was precisely experimenting with a new way to visualize the shapes of the territory. Yolanda was in the final stages of preparing the exhibition _Challenge. Crossing the Sun from a Great Pacific_ for the Modern Art Museum of Medellin, and they needed a map of the territory covered by the works: the Pacific of Panama and Colombia. {{ tags }}

To explain the Pacific on a map, one of the things we agreed upon was to show the flow of the rivers. This includes those that form and flow into the Pacific slope but also the Cauca, which flows into the Caribbean but draws a kind of cultural territory. Those experiments I was conducting involved coloring the sub-basins so that the ridges of the mountains, the valleys, and the slopes could be clearly appreciated. It's a method that could be called _vector shading_ (which I first saw done by [@newgeographer2](https://x.com/newgeographer2) on X) and it came to structure the skeleton of the map to understand how the land lays the canvas on which living beings paint themselves. The texture of the surface is provided by the rivers, streams, and Afro, Indigenous, and rural territories, which appear as letters around the polygons that shape them.

<div id="pacificoMapaZoom" class="openseadragon" style="width: 800px; height: 800px;"></div>

<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "pacificoMapaZoom",
        prefixUrl: "/assets/js/openseadragon/images/",
        tileSources: "/mosaicos/pacifico.dzi",
            visibilityRatio: 1.0,

        defaultZoomLevel: 	1,
        minZoomLevel: 0,
        maxZoomLevel:15,
        constrainDuringPan: true,
        showNavigator: true,
    navigatorPosition: "BOTTOM_LEFT",
    });
</script>

The map was printed on a large scale so that people could interact with it physically upon entering the exhibition space.

<video id="mamm" preload="auto" autoplay muted loop width="100%">
<source src="/assets/images/projects/pacifico_mamm.mp4" type="video/mp4">
</video>

It was fantastic to be able to contribute to Yolanda's vision and to have had the opportunity to place a piece in the MAMM. This is the text I wrote to accompany the map:

> This map talks about the Colombian and Panamanian territories from the point of view of the Pacific. I've noticed that those of us who grew up near water prefer to see maps with the sea (or the river) at the bottom and the town at the top. This is a more important and realistic reference than the north. That's why this map is oriented in that way. The land is represented with its watersheds, the landforms that capture water that falls or flows underground and channel it to creeks and rivers. Indigenous and Afro-descendant territories are part of a finer texture that requires closer examination. Just like streams, communities are a fundamental part of the territory's fabric, even if cities might seem more prominent. The attempt to map the threads woven into the land is merely an approximation. Only the people who live there truly know them, and it is their maps that tell the real stories of these territories.

{% imagen "assets/images/projects/pacifico_foto_museo.jpg","El mapa en la expo", "imagenFull" %}
