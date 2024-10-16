<!-- kalau options component, di dalam script tidak menggunakan setup -->
<script>
export default {
   data() {
      return {
         name: 'Options Component',
      }
   },
   methods: {
      showName() {
         console.log(this.name)
      },
   },
}
</script>

<template>
   <h1>
      {{ name }}
   </h1>
   <button @click="showName">Show Name</button>
</template>
