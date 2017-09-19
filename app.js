firebase.initializeApp(config);
const dbejemplo = firebase.database();
new Vue({
    el: "#elemento",
    created(){
       dbejemplo.ref('actividades/').on('value', snapshot => 
       this.leerDatos(snapshot.val()))
   },
    data:{
        ocultar : true,
        nuevaActividad:"",
        nuevoResponsable:"",
        nuevaDescripcion:"",
        nuevaTarea:"",
        datos: [],
        index:"",
    },
methods:{
    mostrar: function(){
       this.ocultar = !this.ocultar
     },
    agregarActividad: function(actividad, responsable, descripcion, tarea){
        dbejemplo.ref('actividades/').push({
        Actividad: this.nuevaActividad,
        descripcion: this.nuevaDescripcion,
    })
        dbejemplo.ref('responsables/').push({
        Responsable: this.nuevoResponsable,
        Tareas:this.nuevaTarea,  
    })
},
   leerDatos: function(datos){
        this.datos = [];
       for( let index in datos){
           this.datos.push(datos[index])     
       }
   },
    eliminarNombre: function(index){
        dbejemplo.ref('actividades/'+index).remove()
        // this.actividades.splice(index, 1);
    },
    // editar: function(actividades){
    //     dbejemplo.ref('actividades/' + Actividad['.index'] ).update({
    //         Actividad: actividades.Actividad
    //     })
    // },
    
}
});