import{n as e,o as t,t as n}from"./jsx-runtime-D9p77yxo.js";import{a as r,i}from"./index-DyoUwoio.js";import{t as a}from"./PublicLayout-cV5lIf4H.js";var o=t(e(),1),s=n(),c=/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g,l=/^\[([^\]]+)\]\(([^)]+)\)$/,u=/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/;function d(e){return/^(https?:\/\/|\/|mailto:)/i.test(e)?e:`#`}function f(e){return e.split(c).map((e,t)=>{if(e.startsWith(`**`)&&e.endsWith(`**`))return(0,s.jsx)(`strong`,{children:e.slice(2,-2)},t);let n=l.exec(e);return n?(0,s.jsx)(`a`,{href:d(n[2]),target:`_blank`,rel:`noopener noreferrer`,children:n[1]},t):(0,s.jsx)(o.Fragment,{children:e},t)})}function p(e){return e.replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim())}function m({source:e}){let t=e.replace(/<!--[\s\S]*?-->/g,``).split(/\r?\n/),n=[],r=[],i=[],a=()=>{if(!r.length)return;let e=r;r=[],n.push((0,s.jsx)(`ul`,{children:e.map((e,t)=>(0,s.jsxs)(`li`,{children:[f(e.text),e.children.length>0&&(0,s.jsx)(`ul`,{children:e.children.map((e,t)=>(0,s.jsx)(`li`,{children:f(e)},t))})]},t))},n.length))},o=()=>{if(!i.length)return;let e=i.join(` `);i=[],n.push((0,s.jsx)(`p`,{children:f(e)},n.length))};for(let e=0;e<t.length;e++){let c=t[e],l=c.trim(),d=/^(#{1,3})\s+(.*)$/.exec(l),m=l.startsWith(`|`)&&u.test((t[e+1]??``).trim());if(!l)a(),o();else if(d){a(),o();let e=`h${d[1].length+1}`;n.push((0,s.jsx)(e,{children:f(d[2])},n.length))}else if(m){a(),o();let r=p(l),i=[];for(e+=2;e<t.length&&t[e].trim().startsWith(`|`);)i.push(p(t[e].trim())),e++;e--,n.push((0,s.jsx)(`div`,{className:`legal-table-wrap`,children:(0,s.jsxs)(`table`,{children:[(0,s.jsx)(`thead`,{children:(0,s.jsx)(`tr`,{children:r.map((e,t)=>(0,s.jsx)(`th`,{children:f(e)},t))})}),(0,s.jsx)(`tbody`,{children:i.map((e,t)=>(0,s.jsx)(`tr`,{children:e.map((e,t)=>(0,s.jsx)(`td`,{children:f(e)},t))},t))})]})},n.length))}else l.startsWith(`- `)?(o(),/^\s+/.test(c)&&r.length?r[r.length-1].children.push(l.slice(2)):r.push({text:l.slice(2),children:[]})):(a(),i.push(l))}return a(),o(),(0,s.jsx)(s.Fragment,{children:n})}async function h(){try{let e=await r(`${i.baseURL}/legal/version`);return e.ok?await e.json():null}catch{return null}}function g(e){let[t,n,r]=e.split(`-`);return t&&n&&r?`${r}/${n}/${t}`:e}var _={terminos:`<!-- Versión 0.9 · Acceso anticipado. Aprobada por Miguel A. Eirin el 16/11/2026. Spec 025. -->

# CONTRATOS DE ADHESIÓN - LEY N° 24.240 DE DEFENSA DEL CONSUMIDOR
## Términos y Condiciones de uso de MAE · Acceso anticipado
## 1. Quién presta el servicio

MAE (Métrica Aplicada y Estadística) es un servicio prestado por **Miguel Angel Eirin**, CUIT 20-24410441-0, con domicilio en Laprida 999, San Isidro (CP 1642), provincia de Buenos Aires, República Argentina (en adelante, "MAE").

- Email de atención: soporte@maepsicometria.com
- WhatsApp: +54 9 11 2539-1019, de lunes a viernes de 8 a 20 h
- Plataforma: tests.maepsico.com

## 2. Qué es MAE

MAE es una plataforma web de **corrección y tabulación** de instrumentos psicométricos. El usuario administra el test por su cuenta, con los materiales originales, y carga en MAE las respuestas obtenidas. MAE calcula los puntajes y genera un informe técnico según los manuales y baremos publicados de cada instrumento, que se citan en cada informe.

MAE **no administra tests**, **no reproduce los ítems ni los cuadernillos** de los instrumentos y **no utiliza inteligencia artificial**. Los cálculos siguen las reglas de cada manual original.

## 3. Quién puede usar MAE

Puede usar MAE cualquier persona mayor de edad que se registre. Al hacerlo, el usuario declara que:

- tiene la formación necesaria para administrar e interpretar los instrumentos que corrija, o que los usa bajo la supervisión de alguien que la tiene;
- cuenta con los manuales y ejemplares originales de esos instrumentos;
- los datos que informa son verdaderos.

MAE calcula resultados según los manuales y baremos publicados; no evalúa ni diagnostica. **La interpretación de los resultados y su uso, en particular el diagnóstico o cualquier decisión sobre una persona, son responsabilidad exclusiva del usuario y deben quedar a cargo de un/a profesional habilitado/a.**

## 4. Aceptación y copia de este contrato

- Este contrato se celebra cuando el usuario marca la casilla de aceptación y crea su cuenta. **Navegar por el sitio no implica aceptarlo.**
- La versión aceptada, con su fecha, queda registrada en la cuenta.
- El usuario puede consultarla, imprimirla o descargarla en cualquier momento desde tests.maepsico.com/terminos y desde Mi perfil. El email de bienvenida incluye el enlace.

## 5. La cuenta

- La cuenta es personal e intransferible. Cada persona puede tener una sola cuenta, y no puede crear cuentas para otras personas.
- El usuario no debe compartir su contraseña ni permitir que otra persona use su cuenta.
- Si el usuario sospecha un uso no autorizado, debe cambiar su contraseña y avisar a soporte. MAE lo ayudará a recuperar el control de la cuenta.
- El usuario debe mantener actualizados sus datos, en especial su email, su celular y, si la informó, su matrícula.
- El email registrado es el medio de comunicación entre MAE y el usuario.
- El usuario puede **eliminar su cuenta** en cualquier momento y sin costo, desde Mi perfil o pidiéndolo a soporte por email o WhatsApp desde los datos registrados. MAE le confirma la eliminación por email.

## 6. Uso de los resultados

- Los resultados y los textos del informe son una **herramienta de apoyo técnico**. La interpretación, el diagnóstico y las conclusiones corresponden a un/a profesional habilitado/a (punto 3).
- La administración del instrumento (consigna, condiciones, población a la que se aplica) corresponde al usuario. Los resultados se calculan sobre las respuestas que el usuario carga.
- Corresponde al usuario obtener el **consentimiento informado** de la persona evaluada, o de sus representantes legales si es menor de edad, y resguardar la **confidencialidad** de la información (incluido el secreto profesional, cuando corresponda).
- El informe puede integrar la historia clínica o el expediente del caso. Su conservación corresponde al usuario.
- Las hipótesis diagnósticas del informe se formulan como hipótesis a explorar y deben contrastarse con la entrevista y con otras fuentes.

## 7. Datos de las personas evaluadas

Respecto de los datos de las personas evaluadas, el usuario es el responsable y MAE presta el servicio de procesamiento por su cuenta, conforme al artículo 25 de la Ley 25.326. MAE se compromete a:

- usar esos datos **solo para calcular el resultado y generar el informe** pedido por el usuario;
- no cederlos ni comunicarlos a terceros, salvo a los proveedores técnicos indicados en la Política de Privacidad, que actúan bajo las mismas obligaciones;
- mantenerlos bajo confidencialidad y con las medidas de seguridad descriptas en la Política de Privacidad;
- **eliminarlos** una vez entregado el informe. MAE no guarda copias de tests ni de informes;
- avisar al usuario, a la brevedad, si detecta un incidente de seguridad que los afecte.

Además:
- El nombre completo de la persona evaluada no sale del dispositivo del usuario: la plataforma trabaja con un código de identificación.
- El informe queda guardado solamente en el navegador del dispositivo del usuario. Se recomienda descargarlo o imprimirlo, porque si se borran los datos del navegador, se pierde.

## 8. Acceso anticipado

**8.1. Qué es.** MAE se encuentra en una etapa de acceso anticipado, previa al lanzamiento de la suscripción. Puede participar cualquier persona que cumpla con el punto 3 y cree una cuenta.

**8.2. Sin cargo.** El acceso anticipado es **sin cargo**. No se pide tarjeta ni ningún otro medio de pago, y no genera ningún cobro, ni durante el período ni al terminar.

**8.3. Período.**
- El acceso anticipado va **desde el 23 de noviembre de 2026 hasta el 1 de diciembre de 2026 inclusive**.
- MAE puede **extenderlo**, avisando por email y en la plataforma la nueva fecha de cierre.
- MAE **no puede acortarlo**, salvo en el caso del punto 14.

**8.4. Instrumentos habilitados.**
- Durante el acceso anticipado se pueden usar, **sin límite de usos**: BDI-II, BAI, STAI, SCL-90-R e ICCP.
- MAE puede habilitar otros instrumentos, avisando en la plataforma.
- Si MAE detecta un error de cálculo en un instrumento, puede suspenderlo hasta corregirlo, avisando a los usuarios.

**8.5. Etapa de lanzamiento.**
- Los instrumentos habilitados están completos y probados.
- La plataforma puede tener cambios de diseño o de funcionamiento, e interrupciones mientras se ajusta (punto 12).
- Se recomienda **revisar cada informe antes de usarlo** y avisar a MAE cualquier diferencia o error. MAE lo revisará y corregirá a la brevedad (punto 11).

**8.6. Opiniones y reportes.**
- MAE invita a enviar opiniones, sugerencias y reportes de errores por email o por WhatsApp. Si el usuario lo prefiere, puede pedir un formulario y MAE se lo envía. Es optativo.
- MAE usa las opiniones y los reportes **solo para mejorar el servicio**. **No los publica en ningún caso.**

**8.7. Al terminar el acceso anticipado.**
- MAE avisa por email **7 días antes** de la fecha de cierre.
- La cuenta se mantiene. Los informes guardados en el dispositivo del usuario no se ven afectados.
- Para seguir usando los instrumentos, el usuario puede contratar una **suscripción**: elige un plan y acepta las condiciones de la suscripción, que se le informan antes de contratar. Es un contrato nuevo, que el usuario decide celebrar o no. La suscripción empieza con **7 días de prueba sin cargo** del plan elegido; el acceso anticipado no consume esa prueba.
- Si no contrata una suscripción, la cuenta queda sin acceso a los instrumentos. Si pasan **12 meses** desde el cierre del acceso anticipado sin contratar, MAE elimina la cuenta, con aviso por email 30 días antes.

## 9. Propiedad intelectual

- El software, el diseño, la marca MAE y los textos y formatos de los informes pertenecen a MAE.
- El usuario recibe una licencia personal, no exclusiva e intransferible para usar la plataforma en su actividad mientras su cuenta tenga acceso a los instrumentos.
- Los informes generados pueden ser usados por el usuario en su actividad, incluidos expedientes judiciales.
- Los instrumentos psicométricos, sus manuales y baremos pertenecen a sus autores y editores. MAE solo cita la fuente bibliográfica de las normas que aplica.

## 10. Usos no permitidos

No está permitido:

- usar MAE sin cumplir los requisitos del punto 3;
- cargar datos de personas sin su consentimiento o con fines ilícitos o ajenos a la evaluación psicológica;
- copiar, descompilar, extraer datos de forma automatizada o intentar acceder a partes no autorizadas de la plataforma;
- buscar, aprovechar o difundir fallas de seguridad de la plataforma;
- revender, sublicenciar o poner MAE a disposición de terceros;
- tener más de una cuenta o crear cuentas para otras personas;
- usar la plataforma para algo ilegal o que perjudique a MAE o a otros usuarios.

Si el usuario detecta una falla de seguridad, debe avisarla a soporte y no divulgarla ni aprovecharla.

## 11. Alcance del servicio y responsabilidad

- **MAE se obliga a** calcular los resultados conforme a los manuales y baremos que cita, a mantener la plataforma en funcionamiento con diligencia y a revisar y corregir a la brevedad cualquier error de cálculo que se le informe.
- **MAE no realiza** la evaluación psicológica ni emite diagnósticos. El resultado depende de que las respuestas cargadas sean las obtenidas y de que el instrumento se haya administrado según su manual.
- MAE responde por los daños que cause en los términos de la legislación vigente. **Nada de lo dispuesto en este contrato limita los derechos que la Ley 24.240 y el Código Civil y Comercial reconocen al usuario**, aunque el servicio sea sin cargo.

## 12. Disponibilidad del servicio

MAE se esfuerza por mantener la plataforma disponible y sin errores. Puede haber interrupciones por mantenimiento, actualizaciones o fallas de servicios de terceros, en especial durante el acceso anticipado. Las interrupciones programadas se avisarán con anticipación cuando sea posible, y se procurará que ocurran fuera del horario de mayor uso.

## 13. Suspensión por incumplimiento

- MAE solo puede suspender una cuenta si el usuario incumple los puntos 3, 5 o 10.
- Se lo notificará por email indicando el motivo, y el usuario podrá responder dentro de los 5 días hábiles antes de que se resuelva la baja.
- Ante un riesgo para la seguridad de la plataforma o de terceros, MAE puede suspender el acceso de inmediato mientras analiza el caso.

## 14. Cese de la actividad

Si MAE decidiera dejar de prestar el servicio, lo avisará por email con la mayor anticipación posible. Los informes generados quedan guardados en el dispositivo del usuario.

## 15. Comunicaciones

Los avisos sobre la cuenta, el acceso anticipado y los cambios de este contrato se envían al email registrado. Son necesarios para prestar el servicio y no se pueden desactivar. Los emails de novedades y promociones son optativos (ver la Política de Privacidad).

## 16. Atención de consultas y reclamos

- **Canales:** soporte@maepsicometria.com y WhatsApp +54 9 11 2539-1019, de lunes a viernes de 8 a 20 h.
- **Plazos:** MAE confirma la recepción dentro de las 48 horas hábiles y responde dentro de los 10 días hábiles.
- **Otras vías:** el usuario también puede reclamar ante la autoridad de defensa del consumidor, por ejemplo en la **Ventanilla Federal Única de Reclamos de Defensa del Consumidor**, en www.argentina.gob.ar, donde además puede consultar la Ley 24.240.

## 17. Cambios en este contrato

- MAE avisará por email cualquier cambio en este contrato, indicando qué cambia.
- Para seguir usando la plataforma, el usuario deberá aceptar expresamente la nueva versión. Si no la acepta, puede eliminar su cuenta sin costo. Los cambios no se aplican en forma retroactiva.
- Extender el acceso anticipado o habilitar nuevos instrumentos no requiere aceptar una nueva versión.

## 18. Interpretación, ley aplicable y jurisdicción

- Ante dudas sobre el alcance de este contrato, se aplica la interpretación más favorable al usuario.
- Este contrato se rige por las leyes de la República Argentina. Para cualquier controversia son competentes los tribunales correspondientes al domicilio del usuario.
`,privacidad:`<!-- Versión 0.9 · Acceso anticipado. Aprobada por Miguel A. Eirin el 16/11/2026. Spec 025. -->

# POLÍTICA DE PRIVACIDAD DE MAE · Acceso anticipado
## 1. Responsable de los datos

El responsable de la base de datos de usuarios de MAE es **Miguel Angel Eirin**, CUIT 20-24410441-0, con domicilio en Laprida 999, San Isidro (CP 1642), provincia de Buenos Aires, República Argentina. La base se encuentra en trámite de inscripción ante el Registro Nacional de Bases de Datos Personales de la Agencia de Acceso a la Información Pública.

Contacto para temas de privacidad: soporte@maepsicometria.com.

Esta Política explica qué datos personales trata MAE durante el acceso anticipado, para qué, con quién los comparte y cómo ejercer los derechos de la Ley 25.326 de Protección de los Datos Personales.

## 2. Datos que pedimos al usuario

| Dato | ¿Obligatorio? | Para qué |
|---|---|---|
| Nombre y apellido | Sí | Identificar la cuenta y mostrarlos en el encabezado de los informes |
| Email | Sí | Ingresar, verificar la cuenta, recuperar la contraseña y recibir avisos |
| Celular | Sí | Solo para soporte y para recuperar la cuenta si se pierde el acceso al email. **No se usa para publicidad** (llamadas, SMS ni WhatsApp) |
| Contraseña | Sí | Ingresar. Se guarda cifrada; nadie, ni siquiera MAE, puede verla |
| Título y matrícula | No | Mostrarlos en el encabezado de los informes, si el usuario los informa |
| Ámbito principal de trabajo | No | Adaptar la plataforma y las comunicaciones |
| Preferencias de notificaciones | — | Enviar novedades y promociones solo si se aceptaron |
| Versión y fecha de aceptación de los textos legales, y opciones marcadas | — | Dejar constancia del consentimiento |
| Opiniones y reportes que el usuario envíe | No | Solo para mejorar el servicio. **No se publican** |

Si no se brindan los datos obligatorios, no es posible crear la cuenta.

Durante el acceso anticipado **MAE no pide datos de pago** (tarjeta ni ningún otro medio).

## 3. Datos técnicos

Al usar la plataforma se registran datos técnicos: fecha del último ingreso, dirección IP, tipo de navegador y dispositivo, y errores. Se usan para la seguridad de la cuenta, la prevención de abusos y el buen funcionamiento de la plataforma.

MAE usa herramientas de analítica que registran cómo se usa la plataforma (clics, desplazamientos y navegación) para mejorar su diseño. Están configuradas para **ocultar todo el texto de la pantalla**, de modo que no registren datos personales ni contenido de los tests o informes.

## 4. Datos de las personas evaluadas

MAE está diseñada para no conservar datos de las personas evaluadas:

- el nombre completo de la persona evaluada no sale del dispositivo del usuario. La plataforma trabaja con un código de identificación;
- las respuestas y los datos del formulario de la evaluación se procesan en una copia de trabajo del test, que se elimina de forma definitiva una vez entregado el informe;
- el informe queda guardado solamente en el navegador del dispositivo del usuario. MAE no guarda copias de tests ni de informes.

Estos datos pueden incluir información sobre la salud, que la ley considera **datos sensibles**. Respecto de ellos, el usuario es el responsable y MAE presta el servicio de procesamiento por su cuenta (artículo 25 de la Ley 25.326), con los compromisos del punto 7 de los Términos y Condiciones. MAE no los usa para ningún otro fin.

## 5. Para qué usamos los datos

- Crear y administrar la cuenta, y verificar el email.
- Permitir el ingreso y la recuperación del acceso.
- Mostrar el nombre del usuario y, si los informó, su título y su matrícula en sus informes.
- Gestionar el acceso anticipado: avisos de cierre o de extensión, y el pase a la suscripción si el usuario la contrata.
- Recibir y responder opiniones, sugerencias y reportes de errores.
- Brindar soporte y atender consultas y reclamos.
- Proteger la plataforma y prevenir usos indebidos.
- Enviar avisos necesarios de la cuenta (verificación, seguridad, cambios de los textos legales).
- Enviar novedades y promociones por email **solo si el usuario lo aceptó**. Cada envío incluye el aviso sobre el derecho de retiro o bloqueo y un enlace para dejar de recibirlos. También se puede desactivar desde Mi perfil.
- Cumplir obligaciones legales.

**MAE no vende ni alquila datos personales.**

## 6. Base del tratamiento

Los datos se tratan con el **consentimiento libre, expreso e informado** del usuario, que se presta al crear la cuenta, en la medida necesaria para prestar el servicio y para cumplir obligaciones legales.

## 7. Con quién compartimos los datos

MAE usa proveedores que procesan datos por su cuenta, solo para prestarle estos servicios y con compromisos de confidencialidad y seguridad:

| Tipo de proveedor | Para qué |
|---|---|
| Gestión de usuarios y autenticación | Crear la cuenta, verificar el email, ingresar y recuperar el acceso |
| Alojamiento de la plataforma | Hacer funcionar la plataforma |
| Almacenamiento y servicios en la nube | Guardar las constancias de aceptación, procesar temporalmente las copias de trabajo de los tests y recibir los formularios de opinión |
| Envío de emails | Enviar los emails de la plataforma |
| Seguridad y red | Dominio, protección de la plataforma y control anti-robots |
| Registros técnicos y analítica | Funcionamiento, errores y mejoras de diseño |
| Correo y mensajería de soporte | Atender consultas por email y por WhatsApp |

Si la política de privacidad de alguno de estos proveedores no coincide con la ley argentina, MAE aplica la ley argentina.

Los datos también podrán comunicarse a autoridades públicas cuando una ley u orden judicial lo exija.

## 8. Transferencia internacional

Algunos de estos proveedores tienen servidores fuera de la Argentina, por ejemplo en Estados Unidos, país que la normativa argentina no incluye hoy entre los de nivel adecuado de protección. Al aceptar esta Política, el usuario **presta su consentimiento expreso** para que sus datos se transfieran a esos países con ese fin (artículo 12 de la Ley 25.326). MAE elige proveedores que asumen por contrato compromisos de confidencialidad y seguridad.

## 9. Seguridad

MAE aplica medidas técnicas y organizativas para proteger los datos, entre ellas:

- conexión cifrada;
- contraseñas cifradas;
- verificación del email;
- controles contra accesos automatizados y abusos;
- acceso restringido a la información de los usuarios;
- eliminación definitiva de las copias de trabajo de los tests.

Si ocurriera un incidente de seguridad que afecte datos personales, MAE lo informará a los afectados a la brevedad.

## 10. Cuánto tiempo guardamos los datos

- **Datos de la cuenta:** mientras la cuenta exista. Si al terminar el acceso anticipado el usuario no contrata una suscripción, la cuenta se conserva 12 meses desde el cierre y luego se elimina, con aviso por email 30 días antes. Al eliminarse una cuenta, sus datos se borran y dejan de usarse. Pueden quedar copias residuales en los sistemas internos de los proveedores, con acceso restringido y sin ningún uso, hasta su depuración.
- **Constancia de aceptación** (email, versión aceptada, fecha y hora, y opciones marcadas): hasta 3 años después de eliminada la cuenta, para poder acreditar el consentimiento ante un reclamo.
- **Opiniones y reportes:** el tiempo necesario para atenderlos y mejorar el servicio.
- **Registros técnicos:** hasta 90 días.
- **Datos que la ley obligue a conservar:** por el plazo que la ley indique.

## 11. Derechos del usuario

El usuario puede **acceder** a sus datos, **rectificarlos, actualizarlos o suprimirlos**:

- la mayoría de los datos se pueden editar desde **Mi perfil**, y la cuenta se puede eliminar desde ahí;
- para el resto, puede escribir a soporte@maepsicometria.com desde el email registrado.

MAE responderá los pedidos de acceso dentro de los 10 días corridos y los de rectificación, actualización o supresión dentro de los 5 días hábiles (artículos 14 y 16 de la Ley 25.326). El derecho de acceso es gratuito si se ejerce a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo.

También puede retirar en cualquier momento el consentimiento para recibir novedades y promociones.

La **Agencia de Acceso a la Información Pública**, órgano de control de la Ley 25.326, atiende las denuncias y reclamos de quienes consideren afectados sus derechos sobre sus datos personales.

## 12. Almacenamiento en el navegador y cookies

La plataforma usa el almacenamiento local del navegador para guardar los informes en el dispositivo del usuario, y cookies para mantener la sesión iniciada. Las herramientas de analítica usan cookies propias.

Las cookies se pueden borrar o bloquear desde la configuración del navegador. Si se borran los datos del navegador, se pierden los informes guardados en ese dispositivo.

## 13. Menores de edad

MAE está destinada a personas mayores de edad. Los datos de personas evaluadas menores de edad se tratan según el punto 4, bajo la responsabilidad del usuario.

## 14. Cambios en esta Política

- MAE avisará por email cualquier cambio en esta Política, y se pedirá aceptar la nueva versión en el próximo ingreso. Cada versión indica su número y fecha de vigencia.
- Si el usuario contrata una suscripción, antes de hacerlo se le informará la Política que corresponda, que incluye los datos de pago y de facturación, y deberá aceptarla.

## 15. Contacto

soporte@maepsicometria.com · WhatsApp +54 9 11 2539-1019 (lunes a viernes de 8 a 20 h) · Laprida 999, San Isidro (CP 1642), provincia de Buenos Aires
`};function v({doc:e}){let[t,n]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=!1;return h().then(t=>{e||n(t)}),()=>{e=!0}},[]),(0,s.jsx)(a,{children:(0,s.jsxs)(`article`,{className:`legal-page`,"data-testid":`legal-${e}`,children:[(0,s.jsxs)(`div`,{className:`legal-meta`,children:[t&&(0,s.jsxs)(`span`,{"data-testid":`legal-version`,children:[`Versión `,t.version,` · vigente desde `,g(t.vigente_desde)]}),(0,s.jsx)(`button`,{type:`button`,className:`legal-print`,onClick:()=>window.print(),"data-testid":`legal-print`,children:`Descargar / imprimir`})]}),t?.provisorio&&(0,s.jsx)(`div`,{className:`legal-draft`,role:`note`,"data-testid":`legal-draft`,children:`Versión provisoria: este texto todavía no fue aprobado y puede cambiar.`}),(0,s.jsx)(m,{source:_[e]})]})})}export{v as default};