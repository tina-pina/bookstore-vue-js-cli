<template>
    <div>
       <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2">
            <h1>
              BOOK STORE
              <span id="logo-img"><img class="logo-header" src="../static/book.svg" alt="booksLogo" /></span>
            </h1>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 p-2">
            <div class="topnav">
              <input id="myInput" type="text" placeholder="Search..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
</script>

<style scoped>
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
