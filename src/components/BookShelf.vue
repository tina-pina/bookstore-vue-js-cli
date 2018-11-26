<template>
     <div id="book-shelf">
        <h1>I am coming from BookShelf</h1>
        <div class="flip-container" v-for="book in books">
          <Book />
        </div>
      </div>
</template>



<script>
  // import Book from './components/Book'



  export default {
    name: 'BookShelf',
    // components: {
    //   Book
    // }

  }
</script>


<style scoped>
    
</style>