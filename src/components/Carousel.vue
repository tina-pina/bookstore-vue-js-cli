<template>
  <div>
    <div id="carouselBackground" v-if="displayed">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" v-for="(book, index) in books" v-if="index === 0">
            <img class="d-block img-fluid" v-bind:src="book.detalle" alt="First slide">
          </div>
          <div class="carousel-item" v-for="(book, index) in books" v-if="index >= 1">
            <img class="d-block img-fluid" v-bind:src="book.detalle" alt="Second slide">
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div id="carouselBtn" class="text-center pb-3">
        <button v-on:click="toggleCarousel()">GO BACK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    displayed: Boolean
  }
};
</script>

<style scoped>
#carouselBackground {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#carouselExampleControls {
  width: 80%;
  height: 100%;
  margin: auto auto;
  z-index: 999;
}

#carouselExampleControls img {
  height: 35rem;
  margin: 80px auto 0 auto;
}

#carouselBtn {
  background-color: black;
}
</style>
