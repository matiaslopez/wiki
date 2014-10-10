### Download e instalación base

NOTA IMPORTANTE : por el momento estamos trabajando con la versión 2.6.2 de Xtend. La versión 2.7 pierde compatibilidad hacia atrás, por lo que debemos modificar los ejemplos.

La página oficial de downloads de XTend es [esta](http://www.eclipse.org/xtend/download.html). Ahí vas a ver dos opciones:

-   La fácil: **Full Eclipse** (bajarte el Eclipse + el plugin directamente).
-   [Configurar un Eclipse Básico](http://uqbar-wiki.org/index.php?title=Preparacion_de_un_entorno_de_desarrollo_Java) y luego descargar el plugin haciendo Help &gt; Install New Software ... y seleccionar la URL <http://download.eclipse.org/modeling/tmf/xtext/updates/composite/releases/> (le podés dar el nombre que quieras al update site)

El plugin de xtend es un plugin relativamente grande. Si tu instalación de eclipse tiene además otros plugins para programar en otros lenguajes, puede que sea recomendable armar una instalación aparte. Si uno usa muchos lenguajes con eclipse como IDE, puede ser recomendable tener un eclipse para cada uno (salvo obviamente en el caso en que varios lenguajes se utilicen en el mismo proyecto). Eso hace que el IDE sea más liviano y minimiza posibles problemas de incompatibilidad entre los diferentes features.

De todos los items que aparecerán en el update site debemos elegir "xtend". Si vas a usar maven te conviene instalar la integración con m2eclipse (pero antes instalar el m2eclipse).

Acá un screenshot a modo de ejemplo (ojo que seguramente cambien los nombres de las cosas en el futuro). **¡Ojo!** Las versiones en esta imagen no necesariamente están actualizadas, recomendamos bajar siempre la última versión estable del plugin.

![](xtend-plugin.png "xtend-plugin.png")

Por el momento tenés que seleccionar la versión 2.6.2 de Xtend SDK entre todos los elementos disponibles.

### Configuraciones default del eclipse

Antes que nada chequeá las [Configuraciones generales para cualquier Eclipse](configuraciones-generales-para-cualquier-eclipse.html)

### ¿Cómo empezar?

-   Crear un proyecto Java.
-   Luego crear una clase XTend.
-   El eclipse mostrará un error similar a

La solución a ese problema se explica en la siguiente sección. Para más detalles pueden mirar <http://www.eclipse.org/xtend/download.html>

### Trabajo con Maven

Para poder utilizar Maven con Xtend tenés que instalarlo como se sugiere [aquí](http://uqbar-wiki.org/index.php?title=Gu%C3%ADa_de_Instalaci%C3%B3n_de_Maven) (configurando el settings como se explica [aquí](http://uqbar-wiki.org/index.php?title=Configuraci%C3%B3n_de_Maven_para_poder_utilizar_las_herramientas_de_Uqbar))

### Configuración de la librería de xtend

Para que compile el código xtend dentro de un proyecto hace falta tener una librería (en cada proyecto). La "famosa" 'org.eclipse.xtext.xbase.lib'.

Acá hay dos opciones, dependiendo de cómo estés manejando las dependencias en tu proyecto.

-   Si no estás usando maven, podés simplemente ir a las propiedades del proyecto, "Java Build Path", luego en la solapa "Libraries", "Add Library", y seleccionar "Xtend Library".
-   Si vas a usar MAVEN, no deberías hacer el paso anterior, porque eso va a hacer que las cosas compilen en eclipse (momentáneamente), pero no le estamos indicando a maven que el proyecto usa la librería de xtend, con lo cual nos va a traer problemas a futuro (por ejemplo al correr el proyecto si es una webapp va a tirar error por no encontrar las clases de xtend). En ese caso lo más fácil es que heredes de un pom de uqbar que ya hace el laburo por vos (ya declara las dependencias)

`   `<parent>
`       `<groupId>`org.uqbar-project`</groupId>
`       `<artifactId>`uqbar-xtend-parent`</artifactId>
`       `<version>`2.6.2`</version>
`   `</parent>

Luego boton derecho, "Maven" "Update Project..."

### Tips

-   Al 4 de Agosto 2014, la mejor opción es bajarse la versión 2.6.2
-   Instalate la versión 2.4 ó superior, ya que versiones anteriores tienen problemas entre clases xtend e interfaces java cuando hay referencias circulares entre sí. Para que eso ande se necesita un eclipse 4.2 o superior. A partir de 2.4.1 podés definir interfaces de xtend.
-   Para que cuando hagas New &gt; File te aparezcan las clases y las interfaces Xtend, Window &gt; Customize Perspective... &gt; solapa Menu Visibility &gt; expandís File | New &gt; y seleccionás las de xtend (Xtend class, inteface, annotation y enum).

### Documentación

-   [Documentación oficial](http://www.eclipse.org/xtend/documentation.html)

### Links útiles

-   Si venís del mundo Java chequeá [este link](http://jnario.org/org/jnario/jnario/documentation/20FactsAboutXtendSpec.html)
