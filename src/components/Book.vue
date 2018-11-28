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
          <div>
            <button class="info btn btn-lg btn-info">
              <a target="_blank" v-bind:href="bookObj.detalle">More Info</a>
            </button>
          </div>

          <button v-on:click="modal =! modal" class="buy btn btn-lg btn-primary">Buy it here</button>
          <div v-if="modal" class="modal">
            <div class="field-inside d-flex align-items-center justify-content-center mt-5">
              <div>
                <div class="pl-1">
                  <a :href="'//' + url" target="_blank">BUY
                    <font-awesome-icon icon="shopping-cart"/>
                  </a>
                </div>
                <button v-on:click="modal =! modal" id="close" class="btn btn-lg btn-primary">Close</button>
              </div>
            </div>
          </div>
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
  },
  data() {
    return {
      url: "www.google.com",
      modal: false
    };
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
  background-color: #f8f9fa;
  border: 5px solid black;
}

.back h3 {
  margin: 50px 0 25px 0;
  font-weight: bold;
}

.back p {
  font-size: 12px;
  margin: 10px 0;
  font-style: italic;
}

.back button.info {
  margin: 10px 0;
}

.back button.info a {
  text-decoration: none;
  color: white;
}

.back button#close {
  margin: 10px 0;
  background-color: grey;
}

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.field-inside {
  background-color: white;
  height: 50%;
}

/* modal */
</style>
