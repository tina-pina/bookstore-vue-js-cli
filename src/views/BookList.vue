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
#book-shelf {
  padding: 20px 0;
  background-image: url("../static/list.jpg");
  opacity: 0.8;
  color: steelblue;
}

.listBooksHeader {
  padding: 20px 0;
  color: white;
}
</style>