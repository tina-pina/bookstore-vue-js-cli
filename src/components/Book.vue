<template>
  <div>
    <div class="flip-container">
      <div class="flip-card-inner">
        <div class="front">
          <img v-bind:src="bookObj.portada">
        </div>
        <div class="back">
          <h3>{{ bookObj.titulo }}</h3>
          <p>{{ bookObj.descripcion }}</p>
          <button
            btn
            btn-lg
            btn-primary
            v-bind:src="bookObj.detalle"
            v-on:click="toggleCarousel()"
          >MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Book",
  props: {
    bookObj: Object
  }
};
</script>

<style scoped>
.front img {
  width: 92%;
  border: 5px solid black;
}

.flip-container {
  margin: 0;
  padding: 0;
  perspective: 1000px;
}

.flip-container,
.front,
.back {
  margin: 0;
  padding: 0;
  width: 300px;
  height: 400px;
  margin: 30px 0;
  padding: 0;
}

.flip-container:hover .flip-card-inner,
.flip-container.hover .flip-card-inner {
  transform-origin: center center;
  transform: rotateY(180deg);
}

.flip-card-inner {
  position: relative;
  transition: 0.6s;
  text-align: center;
  transform-style: preserve-3d;
  width: 100%;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform-origin: center center;
  transform: rotateY(0deg);
}

.back {
  transform-origin: center center;
  transform: rotateY(180deg);
  width: 280px;
}

.back p {
  font-size: 10px;
}
</style>
