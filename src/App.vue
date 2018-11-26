<template>
  <div id="app">
    <Header/>
    <BookShelf v-bind:bookList="books"/>
    <Carousel v-bind:displayed="carouselDisplayed"></Carousel>
  </div>
</template>

<script>
import Header from './components/Header'
import BookShelf from './components/BookShelf'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

export default {
  name: 'app',
  components: {
    Header,
    BookShelf,
    Footer,
    Carousel
  },
  data () {
    return {
      books: [],
      carouselDisplayed: false
    }
  },
  created () {
    let url = 'https://api.myjson.com/bins/udbm5'

    fetch(url)
      .then(response => {
        if (response.ok) {
          console.log('Request succeeded: ' + response.statusText)
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(json => {
        // json = {books: [{}, {}, ....]}
        this.books = json.books
      })
      .catch(error => {
        console.log('Request failed: ' + error.message)
      })
  }

}
</script>

<style>
html {
  background-color: skyblue;
  margin: 0;
  padding: 0;
}
</style>

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: skyblue;
}
</style>
