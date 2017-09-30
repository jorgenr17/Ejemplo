
Vue.component('plantilla',{
    template:`
    <div>
    <div class="card mb-3">
    <div class="card-header">
    <H2 align="center">Acreditación</H2>
      <div class="card-body">
       <p>Esta es la conceptualización genereal de Acreditaión</p>
      </div>
       </div>
       </div>`
}),
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
const dbejemplo = firebase.database();
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
                    Tareas: obj[info].Tareas,
                    Fecha: obj[info].Fecha,
                })
            }
        })
    },
    data:{
        ocultar : true,
        ocultar2 : false,
        ocultar3 : false,
        nuevaActividad:"",
        nuevoResponsable:"",
        nuevaDescripcion:"",
        nuevaTarea:"",
        fecha:"",
        style:"",
        editandoTarea: null,
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
    agregarActividad: function(actividad, responsable, descripcion, tarea, fecha){
    if(this.nuevaActividad == "" && this.nuevaDescripcion == "" && this.nuevoResponsable == "" && this.nuevaTarea == ""
    && this.fecha == ""){
    alert('¡Por favor llene los datos solicitados!')
    }
    else{
        dbejemplo.ref('actividades/').push({
        Actividad: this.nuevaActividad,
        Descripción: this.nuevaDescripcion,
        Responsable: this.nuevoResponsable,
        Tareas: this.nuevaTarea,
        Fecha: this.fecha,    
    })
            this.nuevaActividad=""
            this.nuevoResponsable=""
            this.nuevaDescripcion=""
            this.nuevaTarea=""
            this.fecha=""
    }
    },
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
}
});
