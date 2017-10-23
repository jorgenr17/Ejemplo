Vue.component('plantilla2',{
    template:`
    <div>
    <div class="card mb-3">
    <div class="card-header">
    <H2 align="center">Acreditación en Informática</H2>
      <div class="card-body">
       <p>Esta es la conceptualización de Acreditaión en la Liceniatura en Informática y Medios Audiovisuales.</p>
      </div>
       </div>
       </div>`
})
firebase.initializeApp(config);
const dbejemplo = firebase.database(),
      auth = firebase.auth();
      proveedor = new firebase.auth.GoogleAuthProvider();
var vm = new Vue({
    el: "#elemento",
    created(){
        dbejemplo.ref('actividades').on('value', function(snapshot){
                    vm. datos = [];
            var obj = snapshot.val();
            for(var info in obj){
                vm. datos. unshift({
                    '.key': info,
                    Actividad: obj[info].Actividad,
                    Descripción: obj[info].Descripción,
                    Responsable: obj[info].Responsable,
                    Fecha: obj[info].Fecha,  
                })
            }
    })
        //autentificación
    auth.onAuthStateChanged(function(user) {
  if (user) {
    console.info('Bienvenido ', user);
  } else {
    console.warn(user);
  }
});
    },
    data:{
        ocultar : false,
        ocultar2 : true,
        ocultar3 : false,
        nuevaActividad:"",
        nuevoResponsable:"",
        nuevaDescripcion:"",
        nuevaTarea:"",
        fecha:"",
        editandoTarea: null,
        progress: null,
        datos: [],
    },
methods:{
    mostrar1: function(){
       if(this.ocultar2 = true, this.ocultar3 = true){
        this.ocultar2 = !this.ocultar2
        this.ocultar3 = !this.ocultar3
        this.ocultar = true         
        }
     },
    mostrar2: function(){
    if(this.ocultar = true, this.ocultar3 = true){
        this.ocultar = !this.ocultar
        this.ocultar3 = !this.ocultar3
        this.ocultar2 = true         
        }
     },
    mostrar3: function(){
    if(this.ocultar = true, this.ocultar2 = true){
        this.ocultar = !this.ocultar
        this.ocultar2 = !this.ocultar2
        this.ocultar3 = true         
        }
     },
    agregarActividad: function(actividad, responsable, descripcion, fecha, tarea){
    if(this.nuevaActividad == "" && this.nuevaDescripcion == "" && this.nuevoResponsable == ""
    && this.fecha == ""){
    alert('¡Por favor llene los datos solicitados!')
    }
    else{
        dbejemplo.ref('actividades/').push({
        Actividad: this.nuevaActividad,
        Descripción: this.nuevaDescripcion,
        Responsable: this.nuevoResponsable,
        Fecha: this.fecha,   
    })
            this.nuevaActividad=""
            this.nuevoResponsable=""
            this.nuevaDescripcion=""
            this.fecha=""
    }
},
    // agregarTarea: function(tarea){
    // if(this.tarea == "" ){
    // alert('¡Por favor llene los datos solicitados!')
    // }
    // else{
    //  dbejemplo.ref('tareas/').push({
    //     Tarea: this.tarea   
    // })

    //     this.tarea=""
    // }
    // },
    eliminar: function(actividades){
        dbejemplo.ref('actividades/'+ actividades['.key']).remove();
    },
    editar: function(actividades){
        dbejemplo.ref('actividades/'+ actividades['.key']).update({
            Actividad: actividades.Actividad,
            Descripción: actividades.Descripción,
            Responsable: actividades.Responsable,
            Tareas: actividades.Tareas,
            Fecha: actividades.Fecha
        })
    },
    mostrarTitulo: function(actividades){
        dbejemplo.ref('actividades/'+ actividades['.key']).update({
            Actividad: this.name = actividades.Actividad,
        })
    },
    //     mostrarTarea: function(tarea){
    //     dbejemplo.ref('actividades/'+ actividades['.key']+'tarea/').update({
    //         Tarea: actividades.tarea,
    //     })
    // },
    // crearUsuario: function(nombre, apellido, email, password, cPassword){
    //     if(nombre=="" && apellido=="" && email=="" && password=="" && cPassword==""){
    //         alert('!Porfavor llene los campos¡')
    //     }else if(password != cPassword){
    //         alert('La contraseña no coinside')
    //     }else{
    //         dbejemplo.ref('usuario').push({
    //             Nombre: this.nombre,
    //             Apellido: this.apellido,
    //             Email: this.email,
    //             Passwor: this.password
    //         })
    //     }
    // },

conectar: function(){
auth.signInWithPopup(proveedor).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
})
    },
    desconectar: function(){

    }
}
});
Vue.component('plantilla',{
    template:`
    <div>
    <div class="card mb-3">
    <div class="card-header">
    <a class="fa fa-book"></a>
    LINEAMIENTOS LIDERAR
    </div>
      <div class="card-body">
        <div class="table-responsive">
      <h6>METODOLOGÍA HÍBRIDA PARA DESARROLLO MODULAR</h6>
        <img src='img/1.png'></img>
        <p align="justify">Basados en las reconocidas metodologías de desarrollo Ágil SCRUM y XP, se 
       compone un híbrido que adapta componentes del tratamiento del código fuente 
       pertenecientes a XP en el cuerpo de SCRUM para el desarrollo modular del sistema 
       de Acreditación y Registro calificado.
       Inicialmente  se debe tener un equipo de trabajo, para luego designar los 
       siguientes roles.
        </p>
        <h6>Definición de Roles</h6>
         <p align="justify"">Para definir los roles hay que tener claro dos grupos, quienes están comprometidos con el software y los que se encargan de la revisión y feedback del mismo.</p>
         <p align="justify"">De esta manera los roles que hay para las personas comprometidas directamente con el desarrollo del software son:</p>
            <div align="center">
                <img src='img/2.png'></img>
            </div>
            <p align="center"><small>Adaptado de James (2012).</small></p>
             <p align="justify"> Por otra parte para el grupo encargado de la revisión del producto y el feedback los roles que existen son:</p>
             <div align="center">
             <img src='img/3.png'></img>
            </div>
             <p align="center"><small>Adaptado de James (2012).</small></p>
            <h6>Planificación del Backlog o SPRINT 0</h6>
             <p align="justify">Luego de asignar los roles, se da inicio a la primera fase o primer apartado llamado Sprint 0, 
                el cual consiste en consolidar la finalidad del software, la estimación del desarrollo, definición de backlog y los 
                entregables que corresponden con las funcionalidades del software (Gallego, 2012).<p>
                <p align="justify">Finalidad del software: Definición general del proyecto y sus objetivos (deben organizarse de manera
                descendente según la prioridad que se le dé en la reunión), así como también las necesidades a satisfacer.</p>
                <p align="justify">Estimación de Desarrollo: Delimitar el alcance del software.</p>
                <p align="justify">Historias de usuario basadas en la metodología XP: Las historias de usuarios determinarán los requisitos 
                funcionales del sistema. Por otra parte las historias de usuario son un recordatorio de lo qué se debe hacer, y sustituyen 
                a los tradicionales casos de uso.</p>
                <p align="justify">De esta manera cada historia de usuario debe ser lo suficientemente comprensible y delimitada 
                para que los programadores puedan implementarlas en semanas.</p>
                <p align="justify">El formato para las historias de usuario será el siguiente:</p>
             </p>
            <div align="center">
             <img src='img/4.png'></img>
            </div>
            <p align="center"><small>Tomado de Meléndez Valladarez, S.M., Gaitan, M.E., & Pérez Reyes, N.N. (2016).</small></p>
            <p align="justify">Definición de backlog: Definición de la lista de necesidades, funciones o requisitos funcionales que determina el usuario.</p>
            <p align="justify">Entregables: Hacen referencia a los productos funcionales que se obtienen en cada uno de los sprint realizados con sus respectivo feedback.</p>
            <p align="justify">En caso tal de que existan nuevas necesidades o funciones que el o los usuarios decidan emplear, se debe modificar el entregable de tal manera 
            que se incluyan o se modifiquen las nuevas funciones, necesidades o requisitos del software.</p>
            <h6>Desarrollo del Sprint</h6>
                <p align="justify">En el desarrollo de los Sprints, el equipo de trabajo o equipo de desarrollo, se dedica a realizar productos funcionales, 
                de tal manera que el proyecto vaya teniendo un incremento cada vez que se realice un Sprint. Cada Sprint debe durar al 
                rededor de 2 a 4 semanas, o en su defecto, 30 días consecutivos para que los Stakeholders se mantengan interesados y de 
                esta manera garantizar un trabajo constante en el producto Gallego (2012).</p>
                <p align="justify">Para el transcurso del desarrollo de cada Sprint, se deben tener en cuenta los siguientes ítems propuestos en la metodología XP, 
                relacionados con el código fuente de cada entregable.</p>
                <h6>Metodología XP Para el desarrollo del Sprint</h6>
                <h6>DISEÑO</h6>
                <p align="justify">Se enfatiza en los diseños simples y claros. buscando siempre mejoras continuas del código fuente. Para este caso se encuentra:</p>
                <p align="justify">Recodificación (“Refactoring”): Se trata de que el equipo de desarrollo vuelva a escribir el código fuente, de tal manera que lo 
                hagan más eficiente, simple, conciso y entendible. se sugiere recodificar las veces que sea necesario, para que el producto sea preciso (Meléndez, Gaitan, & Pérez Reyes, 2016).</p>
                <h6>CODIFICACIÓN</h6>
                <p align="justify">Implementación de Estándares: Se debe implementar la programación basada en estándares, ya que de esta manera será más 
                entendible por todo el equipo, y facilitará la recodificación (“Refactoring”)</p>
                <p align="justify">Programación Dirigida por las Pruebas: (“Test-Driven Programming”), Se establecen los test (pruebas) al sistema, que 
                este debe ser capaz de responder a corde a las expectativas.</p> 
                <p align="justify">Las pruebas a los que se refiere esta práctica, son los test unitarios, realizados por los desarrolladores. 
                Siendo estos de vital importancia ya que condicionan o “dirigen” el desarrollo.</p> 
                <p align="justify">Programación en Pares: En el desarrollo en pares de programadores,se busca que ambos trabajen en un mismo equipo de cómputo, 
                debido a que de esta manera se duplica el tiempo asignado al proyecto y al trabajar en pares se minimizan los errores y se logran mejores diseños.</p>
                <p align="justify">Propiedad Colectiva del Código: El equipo de desarrollo puede aportar nuevas ideas que apliquen a cualquier parte del proyecto. 
                Asimismo, los programadores pueden cambiar el código que sea necesario para corregir problemas, agregar funciones o re codificar.</p> 
                <h6>PRUEBAS</h6>
                <p align="justify">Pruebas Unitarias: El módulo debe responder efectivamente a las pruebas unitarias antes de ser aceptados, de esta forma 
                las pruebas deben ser definidas antes de la construcción del código (“Test-Driven Programming”).</p> 
                <p align="justify">Detección y Corrección de Errores: Cuando se halla un error (“Bug”), éste debe ser corregido inmediatamente, y se deben tener 
                precauciones para que errores similares no vuelvan a ocurrir. Asimismo, se generan nuevas pruebas para verificar que el error haya sido resuelto.</p> 
                <p align="justify">Pruebas de Aceptación: Estas se establecen a partir de las historias de usuarios en cada iteración del desarrollo. El Cliente debe especificar uno o 
                diversos escenarios para comprobar que una historia de usuario ha sido correctamente implementada. Asimismo, en caso de que fallen varias pruebas, deben indicar el 
                orden de prioridad de resolución. Una historia de usuario no se puede considerar terminada hasta que pase correctamente todas las pruebas de aceptación (Joskowicz, 2008).</p>
                <p align="justify">Dentro del desarrollo de los Sprints, se deben tener en cuenta las siguientes reuniones enmarcadas en la metodología ágil SCRUM:</p>
                <h6>Sprint Planning Meeting / Planeación de un Sprint</h6>
                <p align="justify">Se reúne todo el equipo y se seleccionan del backlog las prioridades a trabajar en el primer sprint, de tal manera que 
                el equipo sugiere necesidades y el Product Owner es quien decide cuales se trabajarán.</p>
                <p align="justify">Por otra parte antes de iniciar la reunión el Product Owner debe preparar todos los elementos del backlog, de esta forma es más fácil definir 
                el primer Sprint. esta reunión debe durar alrededor de 2 a  4 horas máximo y deben ejecutarse las siguientes actividades:</p>            
                <p align="justify"><i class="fa fa-check-circle"></i> El equipo elige los elementos para convertirlos de tareas a producto funcional.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> El equipo sugiere elementos para que hagan parte del primer Sprint, pero el Product Owner es quien toma la decisión de que elementos van en ese Sprint.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Para el primer Sprint el equipo elige el primer elemento a trabajar de los que previamente fueron sugeridos y aceptados por el Product Owner.</p>
                <p align="justify">El equipo debe despejar todas las dudas que tenga sobre el backlog.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Finalmente se debe acordar como debe convertirse la primera parte seleccionada en un producto funcional.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> El resultado de esta reunión debe ser un listado de tareas a realizar en el primer sprint, a lo que SCRUM denomina Sprint Backlog.
                Cada tarea debe estar bien descrita y cumplir con las siguientes características:</p>
                <p align="justify"><i class="fa fa-check-circle"></i> El tiempo invertido en cada tarea será de 4 a 16 horas, si lleva mas tiempo, debe descomponerse.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Las tareas a desarrollar deben ser coherentes con el requerimiento seleccionado para trabajar, es decir, estas tareas deben 
                estar enmarcadas dentro de la necesidad que se está desarrollando.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Una vez planeado todo el Sprint y teniendo claro los objetivos de alcance para este, se inicia el desarrollo del Sprint teniendo 
                en cuenta los siguientes aspectos:</p>
                <p align="justify"><i class="fa fa-check-circle"></i> El equipo debe auto manejarse sin establecer ningún líder durante los Sprints.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Si en el desarrollo del Sprint, nacen impedimentos que evidencie la no viabilidad de este, se organiza una nueva planeación de un nuevo Sprint.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Si la cantidad de ítems tomados para el Sprint son demasiados, el Product Owner decidirá qué ítems deben desecharse.</p>
                <p align="justify"><i class="fa fa-check-circle"></i> Si en caso contrario, el equipo se ve en la capacidad de desarrollar más ítems del backlog en el desarrollo del Sprint, 
                se debe consultar al Product Owner qué items se pueden añadir.</p>
                <h6>Reunión Semanal/Sprint weekly meeting</h6>
                <p align="justify">En esta reunión, el equipo de desarrollo comparte información acerca de lo que se está desarrollando, de tal forma 
                que se evidencien los problemas presentados, esto con el fin de mejorar la productividad del Sprint.</p>
                <p align="justify">Esta reunión gira en torno a los ítems del backlog que se están desarrollando y a las tareas que está desarrollando cada miembro, 
                esta reunión debe durar entre 15 y 20 minutos semanales y debe responder a lo siguiente:</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> ¿Qué se ha adelantado con respecto a la última reunión?</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> ¿Qué será lo siguiente a realizar?</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> ¿Existen impedimentos para realizarlo? ¿Cuáles?</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> El modelo para el control de las tareas del Sprint debe ser semejante al siguiente:</p>
              <div align="center">
                <img src='img/5.png'></img>
              </div>
                <p align="center"><small>Adaptado de James (2012).</small></p>
                <p align="justify">Para desarrollar este modelo, se recomienda crear un archivo de excel, para facilitar la lectura y escritura de los datos además de ser 
                una herramienta común para realizar tablas.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> En el lugar de los ítems del Backlog, se deben ubicar todos los requisitos o el requisito que 
                    se van a desarrollar en el primer Sprint.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> En el lugar de tareas no iniciadas, se ubicaran las tareas que están por realizar 
                    con respecto a cada requisito que esté incluido en el primer Sprint.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> En el lugar de tareas en progreso, se ubicaran las tareas que se están desarrollando 
                    con respecto a cada requisito.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> En el lugar de tareas completadas, se ubicaran las tareas que estén finalizadas con 
                    respecto a cada requisito.</p>
                <h6>Reunión para la revisión del Sprint/Sprint review meeting</h6>
                    <p align="justify">En esta reunión se presenta el producto funcional desarrollado en el Sprint, mientras los miembros del equipo de desarrollo junto 
                    con los clientes a tienden a como fue el proceso de desarrollo para este producto. esta reunión durará de 2 a 4 horas, con el fin de aclarar dudas para 
                    continuar en el desarrollo y determinar una forma de trabajo más eficiente si es necesario Gallego (2012).</p>
                    <p align="justify">En esta reunión se atenderán las siguientes características:</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> Entregar el producto funcional acordado para el Sprint completo.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> Si el producto no está completo, no se entrega.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> si existen otras funcionalidades que fueron añadidas al Sprint pero aun no funcionan, no se deben 
                    entregar, de forma contraria, esto confundiría a los clientes.</p>
                    <h6>Reunión retrospectiva/Sprint retrospective meeting</h6>
                    <p align="justify">En esta reunión, solo se reune el equipo de desarrollo con el objetivo de evaluar el ultimo Sprint y su rendimiento en este, de tal manera 
                    que el mismo equipo pueda buscar rutas de mejora en el desempeño de las actividades y aplicarlas al siguiente Sprint Gallego (2012).</p>
                    <p align="justify">La reunión gira en torno a lo siguiente:</p>
                    <p align="justify"><i class="fa fa-check-circle"></i>¿Qué fue lo bueno y que debemos mejorar para el siguiente Sprint?</p>
                    <p align="justify"><i class="fa fa-check-circle"></i>Se deben organizar por preferencia las mejoras que cada miembro del equipo sugiera.</p>
                    <h6>HERRAMIENTAS PARA LA METODOLOGÍA</h6>
                    <p align="justify">En el marco de trabajo de la presente metodología es de vital importancia llevar un seguimiento riguroso, lo cual permita la 
                    organización en el logro de cada sprint. Para ello se sugiere el uso de la aplicación ICESCRUM debido a que esta prediseñado para el desarrollo 
                    de proyectos bajo la metodología SCRUM; es decir, conserva toda la organización y actividades como, la asignación de roles, historias de usuario, 
                    pruebas de aceptación, y todo lo referente al desarrollo de la metodología, permitiendo al usuario que conoce la metodología, manejar con facilidad la aplicación.</p>
                    <p align="justify">Otro punto a favor con respecto al software, es la amplia documentación que tiene en su pagina oficial, es sencilla, 
                    y ofrece varios tutoriales de instalación y manejo de la aplicación; es una aplicación en la que se puede trabajar local u online, es gratuita 
                    hasta el punto de que cada proyecto sea público, es decir todas las personas pueden visualizar el proyecto; sin embargo, si se desea privatizar 
                    el proyecto se debe pagar para esos servicios adicionales.</p> 
                    <p align="justify">Cabe resaltar, que la metodología propuesta en estos lineamientos se ha adaptado con componentes de la metodología ágil XP, 
                    sin embargo, los componentes tomados están ligados a desarrollo del código de cada sprint, por tanto no se ve afectado la implementación de 
                    ICESCRUM con la naturaleza de la Metodología Híbrida anterior descrita.</p>
                    <p align="justify"><i class="fa fa-link"></i> Puedes Ingresar a la Pagina oficial: <a href="https://www.icescrum.com/">www.icescrum.com</a></p> 
                    <p align="justify"> Como otra sugerencia se puede desarrollar la organización del proyecto a través de plantillas preestablecidas por los lineamientos LIDERAR.</p>
                    <p align="justify"><i class="fa fa-file-pdf-o"></i> Puedes descargar las Plantillas LIDERAR : <a href="pdf/plantillas.pdf" download="plantillas"> plantillaScrum.pdf</a></p>
                    <p align="justify"><i class="fa fa-exclamation-circle"></i> ADVERTENCIA: Se debe tomar una sola opción (ya sean las anterior descritas u otro marco de 
                    desarrollo del proyecto) para la organización del proyecto. No es recomendable combinar o adaptarlas.</p>
                <h6>TECNOLOGÍAS PARA DESARROLLO SOFTWARE</h6>
                 <p align="justify">En el caso de las tecnologías a implementar, se tienen en cuenta los lenguajes de programación para el back-end y front-end, 
                 los frameworks, las herramientas de trabajo colaborativo y las bases de datos. Estas tecnologías ya fueron previamente seleccionadas y determinadas 
                 por el cuerpo docente del área de programación de la Licenciatura en Informática teniendo en cuenta las características del sistema de información.</p>
                  <h6>Lenguajes de programación:</h6>
                <p align="justify">Para el desarrollo tanto del back-end y front-end, se determinaron lenguajes de programación que el equipo de desarrollo debe aplicar 
                en la construcción de sistema de información, los lenguajes que se deben manejar son:</p>
                    <div align="center">
                    <img src='img/6.png'></img>
                    </div>
                <p align="justify">Tenga en cuenta que debe utilizar para el desarrollo del back-end JavaScript mediante el framework Node.js, y para el front-end se 
                deben implementar los tres lenguajes de programación anteriormente mencionados y en conjunto conocidos como HTML5.</p>
                <h6>Framework del lado del Cliente</h6>
                    <h6>Vue.js</h6>
                    <p align="justify"><i class="fa fa-check-circle"></i> Permite fácilmente adaptar e integrar con otras bibliotecas o proyectos existentes.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> Ofrece un rendimiento comparable en los casos de uso más comúnmente vistos.</p>
                    <p align="justify"><i class="fa fa-check-circle"></i> Es perfectamente capaz de suministrar energía a sofisticadas aplicaciones de una sola página.</p>
                    <h6>Patrón De Arquitectura De Software</h6>
                    <p align="justify">Para usar Vue.js debe implementar el patrón de arquitectura MVVM (MODELO VISTA VISTA MODELO), Vue.js (2017) afirma que este 
                    framework o librería trabaja basado en el patrón de arquitectura MVVM y por lo general utiliza la variable vm(abreviatura de ViewModel) para 
                    hacer referencia a una instancia Vue. De esta manera MVVM corresponde a:</p>
                     <div align="center">
                    <img src='img/7.png'></img>
                    </div>
                <p align="justify">Viewmodel: Significa que los cambios se actualizan automáticamente cuando estos suceden, (data-binding). El data- binding es en 
                ambos sentidos, un cambio en el modelo actualiza la Vista y viceversa (Combarros, 2015).</p>
                <h6>CDN De Vue</h6> 
                    <p align="justify"><i class="fa fa-link"></i>Tomado de la página oficial, se recomienda: <a href="https://cdn.jsdelivr.net/npm/vue">https://cdn.jsdelivr.net/npm/vue</a>, que reflejará la última 
                    versión tan pronto como se publique en npm.</p> 
                    <p align="justify">También disponible en unpkg y cdnjs (cdnjs tarda un tiempo en sincronizarse para que la última versión aún no esté disponible).</p>
                    <h6>Herramienta de desarrollo colaborativo</h6>
                    <p align="justify">En este caso, para que el equipo de desarrollo gire entorno al proyecto de manera acorde, se debe manejar una herramienta que les permita ir 
                    trabajando en el código fuente de manera individual pero paralela. Para este caso la herramienta de trabajo colaborativo qué se ha determinado es GitHub, qué es 
                    un sistema de control de versiones (SCV) qué le va a permitir al equipo de desarrolladores mantener actualizado el código y facilitar el trabajo colaborativo con 
                    los aportes de cada miembro desarrollador sobre la misma o diferentes ramas del proyecto original.</p>
                    <h6>Bases de datos</h6>
                    <p align="justify">Para el almacenamiento, procesamiento y gestión de la información, el sistema debe contar con una base de datos que soporte el gran volumen de 
                    información referente al proceso de Acreditación y Registro calificado, para eso tenga en cuenta que las bases de datos determinadas para el sistema son de tipo No 
                    Relacionales y el sistema gestor de bases de datos es Firebase.</p>
                    <h6>Herramienta para el desarrollo del Código</h6>
                        <p align="justify">Como herramienta sugerida para la edición del código se define Sublime Text, debido a que siempre se ha utilizado en el programa de Licenciatura en 
                        Informática y Medios Audiovisuales, por otra parte se puede descargar y evaluar de forma gratuita. Sin embargo no es software de código abierto​ ; por lo cual se debe 
                        obtener una licencia para el uso continuado, pero, la versión de evaluación es plenamente funcional y no tiene fecha de caducidad.</p>
                        <p align="justify">Actualmente se encuentra en la versión número 3.</p>
                        <p align="justify"><i class="fa fa-link"></i> Página oficial: <a href="www.sublimetext.com">www.sublimetext.com</a></p>
                        <p align="justify">Como una segunda sugerencia se encuenta Visual studio code, tomando como referencia la documentación oficial, Visual Studio Code es un editor 
                        de código fuente ligero, como ventaja se puede resaltar el soporte integrado para JavaScript, TypeScript y Node.js y tiene un rico ecosistema de extensiones para 
                        otros lenguajes (como C ++, C #, Java, Python, PHP, Go) y tiempos de ejecución (como .NET y Unity).</p> 
                        <p align="justify"><i class="fa fa-link"></i> Página Oficial: <a href="code.visualstudio.com">code.visualstudio.com</a></p>
                        <h6>Herramientas para Back-end Servidor</h6>
                        <p align="justify">Como servidor se sugiere la utilización de Node.js, debido a que este proporciona de manera  ágil, la ejecución de los procesos de un sistema 
                        con el mismo lenguaje de programación (JavaScript) entre frontend y backend.</p>
                        <h6>Herramientas para Front-end</h6>
                        <h6>Interfaz de Usuario con Bootstrap</h6>
                        <p align="justify">Se sugiere la utilización de plantillas de Bootstrap debido a que Bootstrap es un conjunto de herramientas de código abierto para desarrollar 
                        con HTML, CSS y JS, todo el estilo e interacción del usuario con la aplicación, existe una amplia documentación en su pagina oficial, es adaptable y permite realizar 
                        plantillas predeterminadas por el usuario.</p>
                    <h6>ESTÁNDAR DE CODIFICACIÓN</h6>
                        <p align="justify">En este apartado se habla netamente de la codificación y la escritura unificada del código fuente del sistema, teniendo en cuenta los lenguajes de programación 
                        y Frameworks.</p>
                        <p align="justify">Cabe resaltar que para la construcción de este capítulo se tomó como principal fuente los lineamientos de Desarrollo software de la República de Colombia creados en el 2016 y la 
                        guia de estilos de JavaScript de W3schools.</p>
                        <h6>Nombres de archivos</h6>
                        <p align="justify">Para nombrar los archivos que pertenezcan al aplicativo a desarrollar, se sugiere utilizar el nombre completo que describa la función o el contenido de 
                        este sin importar la longitud del nombre, seguido de la extensión del archivo, tenga presente utilizar la nomenclatura camelCase.</p>
                        <h6>Ejemplos:</h6>
                        <p align="justify"><i class="fa fa-check-circle"></i> cuadrosMaestros.js</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> informacionPersona.json</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> notificacionPlanMejoramiento.js</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> vista.html</p>
                        <h6>NOMENCLATURA BASES DE DATOS</h6>
                        <h6>Bases de datos nombres y rutas de archivo</h6> 
                        <p align="justify">El nombre de la base de datos debe venir precedido del prefijo BDS (Base de datos) y seguido por el carácter ( _ ) underline.</p>
                        <p align="justify">El nombre debe manifestar de manera precisa y exacta el contenido y su función.</p>
                        <p align="justify">La nomenclatura utilizada es camelCase. No se deben utilizar espacios en el nombre de archivo. El nombre del archivo debe 
                        ser igual al nombre de la base de datos:</p>
                         <div align="center">
                          <img src='img/8.png'></img>
                         </div>
                    <h6>Objetos</h6>
                        <p align="justify">Para determinar el nombre de un objeto y los atributos que corresponda a un fichero de almacenamiento de la base de 
                        datos se debe implementar la nomenclatura camelCase.</p>
                        <h6>Ejemplo:</h6>
                        <p align="justify">Nombre de archivo: ordenColor.json.</p>
                        <h6>Estructura:</h6>
                        <pre>
                        { “arregloColores”:[{
                          “nombreColor”:”rojo”,
                          “colorHexadescimal”:”#f00”
                         }]
                        }
                        </pre>
                        <h6>NOMENCLATURA DE PROGRAMACIÓN</h6>
                        <h6>Variables</h6>
                        <p align="justify">Según w3schools (s.f) , utilizan camelCase como estándar de codificación en la 
                        declaración de variables y sugieren que todos los nombres empiezan por letras (no números ni signos).</h6>
                        <p align="justify">Debe describir claramente el propósito de la variable en su nombre.</p> 
                        <h6>Ejemplo:</h6>
                        <p align="justify"><i class="fa fa-check-circle"></i> fechaInicial</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> edad</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> esMenor</p>
                        <h6>Constantes</h6>
                        <p align="justify"Tenga en cuenta que el lenguaje de programación que debe manejar para programar el modulo es JavaScript, por lo tanto las constantes 
                        en este lenguaje se utilizan en mayúsculas sostenidas (en este caso no aplica el estándar camelCase).</p>
                        <h6>Ejemplo:</h6>
                        <br></br>
                        <i class="fa fa-check-circle"> PI</i>
                        <br></br>
                        <i class="fa fa-check-circle"> LN10		Logaritmo natural de 10</i>
                        <br></br>
                        <h6>Operadores</h6>
                        <p align="justify">Para el caso de los operadores tenga en cuenta espacios antes y después de cada uno (w3schools, s.f).</p>
                        <h6>Ejemplo:</h6>
                        <i class="fa fa-check-circle">var x = 20 + 5;</i>
                        <br></br>
                        <i class="fa fa-check-circle">var marcas = ["chevrolet", "toyota", "kia"];</i>
                        <h6>Indentación</h6>
                        <p align="justify">Para la indentación w3schools (s.f) recomienda utilizar cuatro espacios para la sangría de los bloques de código.</p>
                        <h6>Ejemplo:</h6>
                        <pre>
                        function gradosCelcius(fahrenheit) {
                                return (5 / 9) * (fahrenheit - 32);
                        }
                        </pre>
                        <h6>Funciones</h6>
                        <p align="justify">Para las funciones utilice la nomenclatura camelCase y la apertura de la función permanece en la misma línea de declaración, 
                        mientras que el cierre queda por debajo de la declaración.</p>
                        <h6>Ejemplos:</h6>
                        <br></br>
                        <i class="fa fa-check-circle">generarTablaDeDatos(){
                        }</i>
                        <br></br>
                        <i class="fa fa-check-circle">listaDeNombres(){
                        }</i>
                        <br></br>	
                        <i class="fa fa-check-circle">determinarAumentoSueldo(){
                        }</i>
                        <br></br>
                        <h6>Definición de Clases</h6>
                        <p align="justify">Como en todos los anteriores incisos, utilice el estándar camelCase.</p>
                        <h6>Ejemplo:</h6>
                        <p align="justify"><i class="fa fa-check-circle"></i> persona</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> recoleccionDeDatos</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> Declaraciones</p>
                        <p align="justify">Utilice la misma línea de código para las declaraciones simples.</p>
                        <h6>Ejemplo:</h6>
                        <pre>
                        var values = ["chevrolet", "toyota", "kia"];
                        </pre>
                        <p align="justify">Según w3schools (s.f) en las declaraciones complejas divida las líneas de código de tal manera que:</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> En la primera línea se determine el nombre de la función, arreglo, etc.</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> En la segunda línea y con cuatro espacios de sangría mencione los elementos de la función, objeto, etc. 
                        Nota: si son mas de dos elementos dividirlo en varias líneas.</p>
                        <p align="justify"><i class="fa fa-check-circle"></i> En la última línea cierre la función, objeto, etc, sin espacio de sangría.</p>
                        <h6>Ejemplo:</h6>
                        <pre><i class="fa fa-check-circle">var persona = {
                            primerNombre: "John",
                        apellido: "Martínez",
                            edad: 50,
                        colorOjos: "Marrón"
                        };</i></pre>
                        <pre><i class="fa fa-check-circle">for (i = 0; i < 5; i++) {
                            x += i;
                        }</i></pre>
                        <pre><i class="fa fa-check-circle">if (tiempo < 20) {
                                saludo = "buenos días";
                        } else {
                                    saludo = "buenas tardes";
                        }</i>
                        </pre>

         </div>
        </div>
       </div>`
})
