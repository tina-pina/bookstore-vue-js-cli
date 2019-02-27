<template>
  <div class="about">
    <div class="container-fluid">
      <h1 class="text-center about-header">About this bookstore</h1>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-center">
          <span id="logo-img">
            <img class="fluid" src="../static/womanInBookstore.jpg" alt="booksLogo">
          </span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-center">
          <span id="logo-img">
            <img class="fluid" src="../static/books-heart-sofa-159712.jpg" alt="booksLogo">
          </span>
        </div>
      </div>
      <div class="row">
        <div class="about-text mt-5 mb-5 p-3">
          <p>"A book is both a usually portable physical object and the body of immaterial representations or intellectual object whose material signs—written or drawn lines or other two-dimensional media—the physical object contains or houses.</p>
          <p>As a physical object, a book is a stack of usually rectangular pages..." (source: Wikipedia)</p>
        </div>
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
  width: 300px;
  height: 250px;
  margin: 0 auto;
  padding: 20px 0;
}

.about-text {
  background-color: #f8f9fa;
  border-radius: 9px;
  border: 1px solid black;
  max-width: 600px;
  margin: 0 auto;
}

.about-header {
  background-color: #17a2b8;
  margin-top: 20px;
}

.about-text p {
  font-style: oblique;
}

.about-text img {
  width: 100px;
  height: 100px;
}
</style>
