<template>
  <div class="about">
    <h1 class="text-center">Welcome to our book store :)</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <span id="logo-img">
            <img class="fluid" src="../static/book.svg" alt="booksLogo">
          </span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <span id="logo-img">
            <img class="fluid" src="../static/books-heart-sofa-159712.jpg" alt="booksLogo">
          </span>
        </div>
      </div>
      <div class="row">
        <p class="about-text">
          "A book is both a usually portable physical object and the body of immaterial representations or intellectual object whose material signs—written or drawn lines or other two-dimensional media—the physical object contains or houses.
          As a physical object, a book is a stack of usually rectangular pages (made of papyrus, parchment, vellum, or paper) oriented with one longer side (either left or right, depending on the direction in which one reads a script) tied, sewn, or otherwise fixed together and then bound to the flexible spine of a protective cover of heavier, relatively inflexible material so that, when the opened front cover has received a massy enough stack of sheets, the book can lie flat. The technical term for this physical arrangement is codex (in the plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll." (source: Wikipedia)
        </p>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import App from '../App.vue'

export default {
  name: "about",
  components: {}
};
</script>

<style scoped>
h1 {
  padding: 50px;
}

#logo-img img {
  width: 70%;
  height: 70%;
  margin: 0;
}

.about-text {
  background-color: antiquewhite;
  border-radius: 9px;
  border: 1px solid black;
  max-width: 600px;
  margin: 0 auto 50px auto;
}

.about-text p {
  font-style: oblique;
}

.about-text img {
  width: 100px;
  height: 100px;
}
</style>
