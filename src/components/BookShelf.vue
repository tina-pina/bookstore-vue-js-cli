<template>
  <div id="book-shelf">
    <div class="flip-container" v-for="book in bookList">
      <Book v-bind:bookObj="book"/>
    </div>
  </div>
</template>
<script>
import Book from "../components/Book";
import BookList from "../views/BookList";
export default {
  name: "BookShelf",
  components: {
    Book,
    BookList
  },

  props: {
    bookList: Array
  }
};
</script>
  
<style scoped>
#book-shelf {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
