---
país: Panamá
title: "Verdómetro"
subtítulo: "Una herramienta para medir la deforestación"
date: 2024-07-25
autor: "Mir Rodríguez Lombardo"
medio: "OpenLayers y GeoBlaze"
dimensiones: ""
cliente: "Centro de Incidencia Ambiental - Panamá"
fecha: "2024"
año: "2024"
img: "assets/images/projects/verdometro_thumb.png"
linkText: "ver proyecto"
lang: "es"
---

El [Centro de Incidencia Ambiental](https://ciampanama.org/) de Panamá me pidió desarrollar una herramienta para que sus técnicos pudieran visualizar y analizar la deforestación en Panamá. Ciam es una organiación panameña muy prominente en campañas ecologistas y se dedica a litigar ante lso tribunales de Panamá e internacionales en busca de la justicia ambiental y necesita datos para todo lo que hace. La herramienta se llama _Verdómetro_ y al final Ciam decidió hacerla disponible al público.

{% imagen "assets/images/projects/verdometro_full.png", "Screenshot del Verdómetro", "imagenFull", "" %}

En ese momento estaba desarrollando el [mapa web de corredores](/es/portfolio/corredores_web) naturales, por lo que pude usar la misma base de código. Agregué la posibilidad de visualizar datos de pérdida de cobertura arbórea de Global Forest Watch y de la Comisión Europea para poder compararlos. Se pueden mostrar los años de deforestación en distintos colores para poder visualizar rápidamente el momento de la pérdida de cobertura.

{% imagen "assets/images/projects/verdometro_matusagarati.png", "Screenshot del Verdómetro", "imagenFull", "Deforestación en la Laguna de Matusagaratí, Provincia de Darién, Panamá" %}

Al dibujar un polígono alrededor de un área de interés el Verdómetro calcula el área deforestada para los años que han sido seleccionados.

{% imagen "assets/images/projects/verdometro_medicion.png", "Screenshot del Verdómetro", "imagenDer", "Midiendo deforestación con el Verdómetro" %}

Al igual que el mapa dinámico de corredores, está desarrollado en [OpenLayers](https://openlayers.org/) y con tecnología serverless. El mapa está montado en un servidor web normal. Los cálculos de deforestción se hacen en el navegador del usuario, usando [GeoBlaze](https://geoblaze.io/) para analizar los rásters de pérdida arbórea, algo que normalmente requeriría una aplicación de escritorio o un servidor.

Puedes probar el Verdómetro [aquí](https://www.ciampanama.org/verdometro/).
