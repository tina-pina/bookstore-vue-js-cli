<template>
  <div id="app">
    <div class="container w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a class="navbar-brand" href="#">
          <img src="./static/book.svg" width="30" height="30" class="d-inline-block align-top" alt>
          Bookstore
        </a>
        <b-nav>
          <b-nav-item>
            <router-link :to="{ name: 'home', params: { books: this.books } }">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'bookList', params: { books: this.originalBooks} }">Book List</router-link>
          </b-nav-item>
        </b-nav>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" v-model="search" v-on:keyup.enter="filteredSearch()">
        </form>
      </nav>
    </div>

    <div v-if="booksDisplayed">
      <Home v-bind:allBooks="books" v-if="!loading"/>
      <h1 class="text-center mt-3" v-else>loading!</h1>
    </div>

    <div v-else>
      <router-view/>
    </div>
    <!-- <Carousel v-bind:displayed="carouselDisplayed"></Carousel> -->
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "app",
  components: {
    Home
  },
  data() {
    return {
      books: [],
      originalBooks: [],
      search: "",
      carouselDisplayed: false,
      booksDisplayed: true,
      loading: true
    };
  },
  methods: {
    filteredSearch: function() {
      if (this.search.length === 0) {
        this.books = this.originalBooks;
      } else {
        let searchWord = this.search.toLowerCase();
        let filtered = this.originalBooks.filter(book => {
          let inTitle = book.titulo
            .toLowerCase()
            .split(" ")
            .includes(searchWord);
          let inDesc = book.descripcion
            .toLowerCase()
            .split(" ")
            .includes(searchWord);
          return inTitle || inDesc;
        });
        this.books = filtered;
      }
    }
  },
  computed: {
    dataLoaded() {
      return this.books.length > 0;
    }
  },
  watch: {
    $route(to, from) {
      console.log("route changed", to, from);
      if (to.name === "home") this.booksDisplayed = true;
      else this.booksDisplayed = false;
    }
  },
  created() {
    let url = "https://api.myjson.com/bins/udbm5";
    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log("Request succeeded: " + response.statusText);
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(json => {
        this.books = json.books;
        this.originalBooks = json.books;
        this.loading = false;
      })
      .catch(error => {
        console.log("Request failed: " + error.message);
      });
  }
};
</script>

<style>
html {
  background-color: skyblue;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: skyblue;
}

#logo-img img {
  width: 50px;
  height: 100%;
}

.topnav input[type="text"] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  border: 3px solid #ccc;
}
</style>
