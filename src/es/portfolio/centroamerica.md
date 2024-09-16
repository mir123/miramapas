---
país: "América Central"
title: "Centroamérica se mueve"
subtítulo: "Compartiendo visiones de nuestro rincón del mundo"

date: 2023-07-01
autor: "Gabriela Fenner Sánchez y Mir Rodríguez Lombardo"
medio: "Papel"
dimensiones: "37 cm × 26.5 cm"
cliente: "Revista de la Universidad de México"
fecha: "julio de 2023"
año: 2023
img: "assets/images/projects/centroamerica_thumb.jpg"
linkText: "ver proyecto"
lang: "es"
---

### Finalista del [Atlas Of Design Volumen 7](http://atlasofdesign.org/seven)

Este mapa fue encargado por la Revista de la Universidad de México para su [edición de julio de 2023](https://www.revistadelauniversidad.mx/releases/32e8a0cd-240e-4237-ab43-306c57ec0b13/centroamerica) sobre Centroamérica. Simplemente nos dijeron: "hagan un mapa de Centroamérica". Comenzamos discutiendo qué historias queríamos contar. Un tema que nos interesa particularmente es la movilidad de los seres vivos a través del istmo, tanto humanos como no humanos. En el contexto de las crisis ambientales y sociales, este territorio se ha vuelto una vez más un corredor crítico.

Gabriela Fenner y yo estamos juntos en la _Colectiva cartográfica de los sures globales_, un grupo informal de mapeadores de México y Centroamérica que se formó durante la pandemia. Un punto de interés para nosotros en la colectiva es el cuestionamiento de las normas de la cartografía convencional, la cual es inherentemente colonial. La orientación de este mapa, por ejemplo, no solo nos atrae estéticamente, sino que también reduce las jerarquías latitudinales predominantes en los mapas del continente de Abya Yala. También hemos borrado las fronteras nacionales impuestas en el territorio, enfatizando la continuidad geográfica.

{% imagen
  "assets/images/projects/centroamerica_3000.jpg",
  "Centroamérica se mueve",
  "imagenFull",
  "",
  {
    dataPswpTileType: "deepzoom",
    dataPswpTileUrl: "/mosaicos/centroamerica_files/{z}/{x}_{y}.png",
    dataPswpMaxWidth: "17480",
    dataPswpMaxHeight: "12520"
  }
%}

Dibujamos el camino más común de los grupos humanos, que tiene una dirección general de sur a norte. Los datos fueron recopilados de varias fuentes, entre las cuales los reportes de medios de comunicación fueron de gran ayuda, ya que hay pocos datos oficiales y las rutas cambian constantemente. Este flujo es diferente de las rutas de ida y vuelta de los animales, tanto por aire como por mar. Elegimos una especie por océano, para un equilibrio visual, y una ruta terrestre para mostrar la diversidad de movimiento. Los datos de migración de aves son fáciles de encontrar con el Bird Migration Explorer de Audubon, pero para otras especies es necesario profundizar en estudios específicos.

Aunque a menudo se habla de Centroamérica como un "puente", para nosotros también es un espacio habitado altamente diverso. Para mostrar esta dimensión dual, representamos la densidad de la población humana asentada con figuras de la obra de la pintora salvadoreña Maya Salarrué (1924-1995). Utilizamos datos de Gridded Population of the World y creamos distribuciones de tono de piel con un poco de Python.

Queríamos que el mapa fuera bonito e incluyera el calor del trabajo hecho a mano, algo que en gran medida se ha perdido con los sistemas de información geográfica. Pero también queríamos aprovechar las capacidades de los SIG de gestionar, representar y analizar datos. El mapa es un híbrido de estos dos enfoques metodológicos y estéticos.
