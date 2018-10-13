<template>
<div>
<div class="foto">
<div v-show="ruta">
     {{ $route.params.idPelicula }}
    
</div>
<router-link to="/">
<a class="far fa-arrow-alt-circle-left fas fa-2x has-text-black fa-fw"></a>
</router-link>
<section class="section">
    <div class="container is-widescreen">
   <div v-if="pelicula !==null">
       
  <div class="notification">
      <p class="title is-2 is-spaced"> {{pelicula.title}}</p>
<p class="subtitle is-4"> <strong>Description: </strong> {{pelicula.description}}</p>
<p class="subtitle is-5"> <strong>Director: </strong> {{pelicula.director}}</p>
<p class="subtitle is-5"> <strong>Producer: </strong> {{pelicula.producer}}</p>
<p class="subtitle is-5"> <strong>Release year: </strong> {{pelicula.release_date}}</p>
<p class="subtitle is-5"> <strong>Rating: </strong> {{pelicula.rt_score}} %</p>


</div>
</div> 
</div>
</section>
<div  class="padding" >
         <div  class="notification" >
 <p class="title is-2 is-spaced">  Characters: </p>
 <div v-show="noCharacters">
 <p class="subtitle is-4"> No characters to show </p>
 </div>
  <Tarjeta :personajes="personajes" />
         </div>
         </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import Tarjeta from '@/components/Tarjeta.vue'
export default {
name: 'Pelicula',
data(){
    return{
        PeliculaID: '',
        pelicula: null,
        personajes: [],
        ruta: false,
        noCharacters: false
    }
},
components:{
    Tarjeta
},
mounted(){
   var comp= this
   comp.PeliculaID = comp.$route.params.idPelicula
   axios.get(`https://ghibliapi.herokuapp.com/films/${comp.PeliculaID}`).then(function(pelicula){
     comp.pelicula = pelicula.data
     if(comp.pelicula.people[0] == "https://ghibliapi.herokuapp.com/people/")
     comp.noCharacters = true;
     if(comp.pelicula.people[0] !== "https://ghibliapi.herokuapp.com/people/")
     for (var urlPersonaje of pelicula.data.people)
     axios.get(urlPersonaje).then(function(personaje){
      comp.personajes.push(personaje.data);
     
     }, function(error){
       console.log('Error')
     })
     }, function(error){
    console.log('No se cargó')
   })
},
}

</script>

<style>

a{
    position:absolute;
    top: 3%;
    left: 2%
}
.notification {
    background-color: rgb(255, 253, 253, 0.7);
    padding-bottom: 5%
}
.padding{
    padding-right: 10%;
    padding-left: 10%;
    margin-bottom: 5%
}

.foto{
    width: 100%;
height: 100%;
background: url('../assets/totoro.jpg');
background-size:contain;
position: relative;
margin-bottom: 0px
}


</style>
