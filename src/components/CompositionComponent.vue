<!-- kalau composition component, dia menggunakan atribut setup di script -->
<script setup>
const name = 'Composition Component'
const showName = () => {
   console.log(name)
}
</script>

<template>
   <h1>
      {{ name }}
   </h1>
   <button @click="showName">Show Name</button>
</template>
