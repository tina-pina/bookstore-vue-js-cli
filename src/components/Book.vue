<template>
     <div>
        <h1>I am coming from BookShelf</h1>
        <div class="flip-container" v-for="book in books">
          <div class="flip-card-inner">
            <div class="front"><img v-bind:src="book.portada" /></div>
            <div class="back">
              <h3>{{ book.titulo }}</h3>
              <p>{{ book.descripcion }}</p>
              <button btn btn-lg btn-primary v-bind:src="book.detalle" v-on:click="toggleCarousel()">MORE</button>
            </div>
          </div>
        </div>
      </div>
</template>


<script>
    export default {
        // props: [book]
        name: 'Book',

    }
</script>


<style scoped>
    
</style>