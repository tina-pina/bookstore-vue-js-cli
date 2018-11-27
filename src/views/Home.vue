<template>
  <div class="home">
    <BookShelf v-bind:bookList="allBooks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BookShelf from "../components/BookShelf";

export default {
  name: "home",
  props: {
    allBooks: Array
  },
  components: {
    BookShelf
  }
};
</script>
