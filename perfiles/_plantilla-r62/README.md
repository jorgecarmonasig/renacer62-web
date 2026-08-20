# Perfil Digital Profesional R62
## Procedimiento de producción

Este documento define el procedimiento estándar para crear, validar,
publicar y entregar un Perfil Digital Profesional R62.

El objetivo es garantizar que todos los perfiles mantengan un mismo
estándar de calidad, independientemente de quién del equipo participe
en su elaboración.

---

# 1. Recepción de información

Antes de iniciar el desarrollo debe recibirse el Formulario de
Levantamiento del Perfil Digital Profesional R62.

Verificar que contenga como mínimo:

- Nombre completo.
- Nombre que desea utilizar públicamente.
- Profesión o actividad.
- Objetivo del perfil.
- Público al que desea llegar.
- Servicios o capacidades.
- Experiencia profesional relevante.
- Herramientas o conocimientos.
- Información de contacto.
- Redes profesionales.
- Fotografía.
- Recursos adicionales.
- Autorizaciones correspondientes.

No iniciar la publicación del perfil si existen dudas sobre qué
información o recursos están autorizados para publicación.

---

# 2. Revisión del formulario

Leer completamente el formulario antes de comenzar a redactar.

Identificar:

- Quién es la persona.
- Qué hace.
- Qué problemas puede ayudar a resolver.
- Qué la diferencia.
- A quién quiere llegar.
- Qué acción esperamos que realice el visitante.
- Cuáles son sus principales capacidades.
- Qué elementos de su trayectoria respaldan esas capacidades.
- Qué información debe permanecer privada.

Si falta información necesaria, solicitarla antes de continuar.

---

# 3. Construcción de la narrativa

No copiar literalmente las respuestas del formulario salvo que
corresponda.

A partir de la información suministrada, construir:

- Posicionamiento profesional.
- Propuesta de valor.
- Introducción.
- Sección "Sobre mí".
- Servicios o capacidades.
- Experiencia relevante.
- Herramientas y conocimientos.
- Llamado a la acción.
- Texto de contacto.

La narrativa debe:

- Representar realmente a la persona.
- Utilizar lenguaje claro.
- Evitar exageraciones.
- Evitar capacidades que la persona no haya demostrado o declarado.
- Priorizar beneficios y capacidades sobre listas extensas de cargos.
- Estar orientada al público definido en el formulario.
- Mantener coherencia entre todas las secciones.

---

# 4. Definición del slug

Crear una URL legible y única utilizando preferiblemente:

nombre-apellido

Ejemplo:

jorge-carmona

URL:

https://renacer62.com/perfiles/jorge-carmona/

Si ya existe una persona con el mismo nombre, utilizar información
adicional que permita diferenciarla.

Preferir:

nombre-primerapellido-segundoapellido

Evitar números aleatorios mientras exista una alternativa profesional
y legible.

---

# 5. Creación de la carpeta

Copiar la carpeta:

_plantilla-r62

o la plantilla vigente definida por R62.

Crear:

perfiles/nombre-apellido/

Ejemplo:

perfiles/carlos-botero/

Nunca modificar la plantilla maestra para construir directamente un
perfil individual.

---

# 6. Creación del HTML

Utilizar el index.html de la plantilla maestra.

Sustituir todos los marcadores {{...}}.

Comprobar especialmente:

{{NOMBRE_COMPLETO}}
{{SLUG}}
{{EMAIL}}
{{WHATSAPP}}
{{LINKEDIN_URL}}
{{POSICIONAMIENTO}}
{{PROPUESTA_VALOR}}
{{INTRODUCCION}}
{{META_DESCRIPTION}}
{{OG_DESCRIPTION}}

Eliminar las secciones opcionales que no correspondan.

No dejar ningún marcador {{...}} en el archivo publicado.

---

# 7. Fotografía

Guardar la fotografía pública siguiendo la nomenclatura:

assets/img/perfiles/nombre-apellido.png

Ejemplo:

assets/img/perfiles/carlos-botero.png

La fotografía utilizada debe corresponder a la autorizada por el
titular.

Si se realizan ajustes de fondo, recorte o dimensiones, respetar las
condiciones autorizadas por el titular.

No realizar alteraciones de la apariencia personal sin autorización.

---

# 8. Imagen social

Crear la imagen utilizada al compartir el perfil en redes y
aplicaciones.

Nomenclatura:

assets/img/perfiles/nombre-apellido-social.png

Verificar que el HTML utilice la URL absoluta correspondiente en:

og:image
twitter:image

---

# 9. vCard

Crear:

nombre-apellido.vcf

dentro de la carpeta del perfil.

Debe contener únicamente los datos autorizados para publicación.

Verificar especialmente:

- Nombre.
- Teléfono.
- Correo.
- URL del perfil.

La URL debe corresponder al perfil definitivo:

https://renacer62.com/perfiles/nombre-apellido/

---

# 10. Código QR

Generar un código QR que apunte directamente a la URL definitiva.

Ejemplo:

https://renacer62.com/perfiles/carlos-botero/

Guardar como:

assets/img/perfiles/qr-carlos-botero.png

Comprobar físicamente el QR utilizando un teléfono antes de publicar.

Nunca reutilizar el QR de otro perfil.

---

# 11. SEO básico

Cada perfil debe contener:

- <title> individual.
- Meta description.
- Canonical.
- og:type.
- og:url.
- og:title.
- og:description.
- og:image.
- Twitter/X Card.

El canonical debe apuntar exactamente a la URL pública del perfil.

Ejemplo:

<link
    rel="canonical"
    href="https://renacer62.com/perfiles/carlos-botero/"
>

No prometer posiciones específicas en Google.

La configuración SEO busca facilitar que los motores de búsqueda
comprendan, rastreen e indexen el perfil.

---

# 12. Validación con el titular

Antes de publicar definitivamente, presentar el perfil al titular.

Solicitar que revise como mínimo:

- Nombre.
- Fotografía.
- Descripción profesional.
- Servicios/capacidades.
- Experiencia.
- Teléfono.
- Correo.
- Redes.
- Recursos enlazados.

Consolidar las observaciones en una ronda de ajustes.

El servicio estándar contempla hasta dos rondas de ajustes.

Registrar la aprobación de la versión final.

---

# 13. Pruebas técnicas

Antes de publicar comprobar:

## Contenido

- No existen textos de otro perfil.
- No quedan placeholders {{...}}.
- No hay errores ortográficos evidentes.
- La información corresponde al titular.

## Enlaces

Probar:

- WhatsApp.
- Correo.
- LinkedIn.
- Otras redes.
- Guardar contacto.
- Enlaces adicionales.
- Enlace a Renacer 62.

## QR

- Abre el perfil correcto.
- Funciona desde otro dispositivo.
- Funciona al ampliarlo en el modal.

## Responsive

Comprobar como mínimo:

- Teléfono.
- Tableta.
- Escritorio.

Verificar:

- Fotografía.
- Nombre.
- Botones.
- Textos largos.
- Tarjetas.
- QR.
- Modal.

---

# 14. Publicación

Una vez aprobado:

git add .

git commit -m "Publica perfil digital Nombre Apellido"

git push

Esperar el despliegue correspondiente.

Abrir posteriormente la URL pública y repetir las pruebas esenciales.

---

# 15. Sitemap

Agregar la URL definitiva al sitemap.xml.

Ejemplo:

<url>
    <loc>https://renacer62.com/perfiles/carlos-botero/</loc>
</url>

No agregar al sitemap perfiles incompletos, plantillas ni carpetas en
construcción.

---

# 16. Indexación

Una vez publicado y comprobado el perfil:

1. Abrir Google Search Console.
2. Inspeccionar la URL completa.
3. Comprobar que Google puede acceder a ella.
4. Solicitar indexación cuando corresponda.

La solicitud de indexación no garantiza que Google indexe o posicione
la página.

Registrar la fecha de solicitud para realizar una comprobación
posterior.

---

# 17. Entrega

Entregar al titular:

- URL definitiva.
- Código QR.
- Instrucciones básicas para compartir el perfil.
- Información sobre futuras actualizaciones.
- Condiciones de mantenimiento y renovación.

Explicar que puede compartir la URL o QR mediante:

- LinkedIn.
- WhatsApp.
- Correo.
- Firma de correo.
- Material impreso.
- Presentaciones.
- Redes profesionales.
- Tarjetas físicas u otros materiales.

---

# 18. Registro interno R62

Registrar internamente:

- Titular.
- Slug.
- URL.
- Fecha de inicio.
- Fecha de publicación.
- Responsable comercial.
- Responsable de narrativa.
- Responsable técnico.
- Fecha de aprobación.
- Fecha de solicitud de indexación.
- Fecha de inicio de la suscripción/alojamiento.
- Fecha de renovación.
- Precio contratado.
- Servicios adicionales.
- Observaciones.

---

# 19. Cambios posteriores

No modificar información del perfil sin solicitud o autorización del
titular.

Clasificar los cambios como:

- Corrección.
- Actualización menor.
- Actualización de contenido.
- Nueva sección.
- Rediseño.
- Funcionalidad adicional.

Determinar si el cambio está incluido en el servicio contratado o
requiere cotización adicional.

---

# 20. Cierre del proceso

Un Perfil Digital Profesional R62 se considera terminado cuando:

- El titular aprobó el contenido.
- La URL funciona.
- El perfil es responsive.
- Los enlaces funcionan.
- La vCard funciona.
- El QR funciona.
- Los metadatos están configurados.
- El canonical es correcto.
- Está incluido en el sitemap.
- Se realizó el procedimiento de indexación.
- Se registró internamente.
- Se realizó la entrega al cliente.