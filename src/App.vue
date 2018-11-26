<template>
  <div id="app">
    <Header src="resources/book.svg"/>
    <BookShelf/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import BookShelf from './components/BookShelf'
import Footer from './components/Footer'


export default {
  name: 'app',
  components: {
    Header,
    BookShelf,
    Footer 
  }, 
  data() {
    return {
    
    };
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
        // json = {books: [{}, {}, ....]}
        console.log(json)
      })
      .catch(error => {
        console.log("Request failed: " + error.message);
      });
  }

}

</script>


<style>

  #app {
    background-color: skyblue;
  }

</style>
