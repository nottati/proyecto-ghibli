<template>
    <div  >
      
     

          <div class="columns is-multiline"  >
          <div v-for="personaje in personajes" :key="personaje.name" >
               
  <div class="column" >
              <div class="card">
                  <div>
  <div class="card-content">
    <p class="title is-4">
      Name: {{personaje.name}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
       Gender: {{personaje.gender}} 
      </span>
    </p>
    <p class="card-footer-item">
      <span>
         Age: {{personaje.age}} 
        
      </span>
    </p>
  </footer>
  </div>
</div>
  </div>
  </div>
</div>
  
 </div>
 
</template>

<script>
import axios from 'axios'
export default {
    name: 'Tarjeta',
    props: {
        personajes: {
            type: Array,
            required: true
        
        },
       
    },
 
       } 
    
    
</script>

<style>



.card{
    background-color: rgba(156, 208, 240, 0.719)
}


</style>
