<template>
  <div id="book-shelf">
    <h4 class="text-center mt-4" v-for="book in bookTitle">{{ book.titulo }}</h4>
  </div>
</template>
<script>
export default {
  name: "BookList",
  data() {
    return {
      bookTitle: this.$route.params.books
    };
  }
};
</script>
  
<style scoped>
</style>