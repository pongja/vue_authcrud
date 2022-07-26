<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script setup>

</script>

<style>
.container {
	min-height: calc(100vh - 120px);
  width: calc(100% - 32px);
  max-width: 400px;
  min-width: 310px;
  margin-top: 60px;
  background-color: white;
  margin: 0 auto; 
	position: relative;
}
</style>