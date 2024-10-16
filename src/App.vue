<!-- logic -->
<script setup>
import MainButton from './components/MainButton.vue'
const name = 'muhammad dio revansa'
</script>

<!-- render tag html / render data yang ada di script -->
<template>
   <p>{{ name }}</p>
   <MainButton />
   <OptionsComponent />
   <CompositionComponent />
</template>

<!-- memberikan styling -->
<style scoped></style>
