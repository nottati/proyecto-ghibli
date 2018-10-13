<template>
  
  <div class="foto" >
    <div class="titulo">
      <img src="../assets/studio.png">

      </div>
    
<div class="content">
     <h1 class="ordenar"> Ordenar de: </h1>
     </div>
    <div class="buttons">
  <div class="control">
    <button class="button " @click="cambiarOrdenAntigua"> Más antigua a más reciente </button>
  </div>
  <div class="control">
    <button class="button " @click="cambiarOrdenReciente"> Más reciente a más antigua </button>
  </div>
  <div class="control">
    <button class="button" @click="cambiarOrdenRating"> Mayor a menor puntaje de rating </button>
  </div>
  
</div>
<div class="seccion">
    <section class="section">
    <div class="container">
     <div v-for="pelicula in pelis" :key="pelicula.id" > 
       <h1 class="title"> 
        <router-link :to="{name: 'Pelicula', params: {idPelicula: pelicula.id}}">  {{pelicula.title}} 
          </router-link> </h1>
    <h2 class="subtitle"> Año de lanzamiento: {{pelicula.release_date}} </h2>
    <h2 class="subtitle"> Director: {{pelicula.director}} </h2>
    <p> Rating: {{pelicula.rt_score}} %</p>
   
    </div>
  </div>
  </section>
  </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Lista',
  data () {
    return {
      pelis: null
     }
  },
  created(){
   var comp= this
   axios.get('https://ghibliapi.herokuapp.com/films').then(function(peliculas){
     console.log(peliculas);
     comp.pelis= peliculas.data
     comp.pelis.sort(function(a, b) {
                    if ( a.release_date > b.release_date) {
                        return -1;
                    } else if (a.release_date == b.release_date) {
                        return 0;
                    } else {
                        return 1;
                    }
    
  })
},
    function (error){
     console.log('No se cargaron')
   }
   )},
   
  methods: {
    cambiarOrdenAntigua(){
     this.pelis.sort(function(a, b) {
                    if ( a.release_date < b.release_date) {
                        return -1;
                    } else if (a.release_date == b.release_date) {
                        return 0;
                    } else {
                        return 1;
                    }
    
  })
      
    },
    cambiarOrdenReciente(){
      this.pelis.sort(function(a, b) {
                    if ( a.release_date > b.release_date) {
                        return -1;
                    } else if (a.release_date == b.release_date) {
                        return 0;
                    } else {
                        return 1;
                    }
    })
    },
    cambiarOrdenRating(){
   console.log('hola'),
   this.pelis.sort(function(a, b) {
                    if ( a.rt_score > b.rt_score) {
                        return -1;
                    } else if (a.rt_score == b.rt_score) {
                        return 0;
                    } else {
                        return 1;
                    }
     
  })
  
}
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.foto{
  background: url('../assets/ghibli2.jpg');
  background-size:contain;
}
.section{
  background-color: rgba(203, 212, 212, 0.938);
  margin-left: 10%;
  margin-right: 50%; 
  
}
.ordenar{
  color: black
}
.content{
  
  padding-top: 3%;
}
.seccion{
 padding-top: 5%;
 padding-bottom: 7%
}
.field{
  position:absolute;
   top: 5%;
  left: 57%;
}


</style>
