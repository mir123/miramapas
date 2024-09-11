---
subTitle: "MEXICO"
title: "Food of Mexican Cultures"
date: 2022-11-16
autor: "Mir Rodríguez Lombardo and Kitzia Sámano Valencia (see full credits below)"
medio: "Unpublished"
dimensiones: "4.43 m × 3.32 m"
cliente: "Cencalli, the House of Corn and Food Culture (Secretaría de Cultura de México)"
fecha: "November 2022"
img: "assets/images/projects/mapa_comida_mexico_570.jpg"
linkText: "see project"
lang: "en"
tags: ["portfolios", "portaafolios"]
---

  <script src="/assets/js/openseadragon/openseadragon.min.js"></script>

This map was an idea that came from Genoveva de la Peña, who at that time was the director of _Cencalli, the House of Corn and Food Culture_. Cencalli is a museum and cultural center that is part of the Secretaría de Cultura de México, and they wanted a map of Mexican food to display in one of their rooms.

The first question, then, is what does a food map mean? It can be many different things. Together with Alexander Ortega Sepúlveda, an expert in Indigenous cuisines of Mexico, we decided that the map would feature ancestral ingredients that are still eaten in this territory and where they are cultivated. This left out items like bananas, lemons, and rice, which are widely cultivated and consumed here but are not native to this place. Alexander, in consultation with Cencalli, decided on the final list of "essential foods."

{% imgIzq %}bosquejo_mapa_comida.jpg{% endimgIzq %}

The conceptualization of this work was done together with Sari Denisse, with whom I developed the portrayal of cyclical time centered on the cultivation and harvest of the milpa, and with whom I also decided on the exact orientation of the map. I then partnered for the design with the illustrator Kitzia Sámano Valencia. Working with Kitzia was an absolute pleasure, as we both enjoy focusing on nerd-level details, researching many references, and validating the designs together. She designed the food icons and the milpa with all its human and non-human characters.

{% imagen "assets/images/projects/ comida_aframe_humano.png","3D image of the map in VR simulation", "imagenIzq", "I could see this in VR and walk around. I added a human figure here to get an idea of the intended size of the map when printed"  %}

This map is designed for a 4.4 m x 3.3 m wall, and that was a major challenge. It’s very difficult to imagine how something of that size will look from a monitor. To solve this problem, I turned to [A-Frame](https://aframe.io/), a tool that makes it easy to program (in HTML and JavaScript) virtual reality experiences viewable through a browser like Firefox. Using an old Oculus Quest 1, I was able to see the wall up close and from a distance, adjusting the size and position of the map elements. It also helped show the almost finished map to the people at Cencalli.

When it came time to produce the final map, we were talking about 52K x 39K pixels, or just over 2,000 megapixels. The process of producing and merging those layers was not easy, and I documented it in a [tutorial](https://mirrodriguezlombardo.com/huge-images).

To date, this map has not been printed, so this portfolio is the first time it has been published.

> Map by Mir Rodríguez Lombardo and Kitzia Sámano Valencia,
> Idea and inspiration by Genoveva de la Peña Chávez,
> Research by Alexander Ortega Sepúlveda and Mauricio Ávila Serratos,
> Concept by Sari Denisse.

<div id="comidaMapaZoom" class="openseadragon" style="width: 95vw; height: 100vh; margin: 1em calc(50% - 50vw);"></div>

<script type="text/javascript">
    var viewer = OpenSeadragon({
        id: "comidaMapaZoom",
        prefixUrl: "/assets/js/openseadragon/images/",
        tileSources: "/assets/images/comida.dzi",
            // visibilityRatio: 1.0,

        defaultZoomLevel: 	0,
        // minZoomLevel: 0,
        maxZoomLevel:16,
        // constrainDuringPan: true,
        showNavigator: true,
    navigatorPosition: "BOTTOM_LEFT",
    });
</script>
