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
new Vue({
    el: "#elemento",
    created(){
       dbejemplo.ref('actividades/').on('value', snapshot => 
       this.leerDatos(snapshot.val()))
       dbejemplo.ref('templates/').on('value', snapshot => 
       this.leerTemplate(snapshot.val()))     
   },
    data:{
        ocultar : true,
        ocultar2 : false,
        ocultar3 : false,
        nuevaActividad:"",
        nuevoResponsable:"",
        nuevaDescripcion:"",
        nuevaTarea:"",
        datos: [],
        templates:[],
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
    agregarActividad: function(actividad, responsable, descripcion, tarea){
        dbejemplo.ref('actividades/').push({
        Actividad: this.nuevaActividad,
        descripcion: this.nuevaDescripcion
    })
        dbejemplo.ref('responsables/').push({
        Responsable: this.nuevoResponsable,
        Tareas:this.nuevaTarea  
    })
},
   leerDatos: function(datos){
        this.datos = [];
       for( let index in datos){
           this.datos.push(datos[index])    
       }
   },
    leerTemplate: function(templates){
       for( let index in templates){
           this.templates.push(templates[index])
       }
    },  
    eliminarNombre: function(index){
        dbejemplo.ref('actividades/'+ index).remove()
        // this.actividades.splice(index, 1);
    },
    // editar: function(actividades){
    //     dbejemplo.ref('actividades/' + Actividad['.index'] ).update({
    //         Actividad: actividades.Actividad
    //     })
    // },
        
}
});