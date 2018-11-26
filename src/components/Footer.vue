<template>
        <small class="text-center">THANK YOU FOR VISITING!</small>
</template>

<script>
export default {
  name: 'Footer',
  props: {
      msg: String
  }
}
</script>

<style scoped>
small {
    width: 100%;
    text-decoration: bold;
    text-align: center;
    margin: 0;
    padding: 0;
}
</style>
