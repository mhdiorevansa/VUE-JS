<!-- logic -->
<script setup>
import MainButton from './components/MainButton.vue'
const name = 'muhammad dio revansa'
const blogPost = '<p style="color:red;">ini adalah BlogPost</p>'
const idBlog = 'blog-1'
const classBlog = 'text-red'
</script>

<!-- tag template untuk render tag html / render data yang ada di script -->
<template>
   <!-- ini merupakan text interpolation. namun yang dirender adalah plain text, dengan menggunakan {{ nama_variabel }} -->
   <!-- untuk membuat id dinamis, kita bisa menggunakan v-bind:id -->
   <!-- v-bind bisa disingkat dengan :nama-atribut, tanpa harus menggunakan v-bind -->
   <p v-bind:id="idBlog" :class="classBlog">{{ name }}</p>

   <!-- ini juga merupakan text interpolation. namun yang dirender adalah html, dengan menggunakan v-html -->
   <div v-html="blogPost"></div>

   <MainButton :title="`button`" />
   <MainButton :title="`submit`" />
   <MainButton />
   <OptionsComponent />
   <CompositionComponent />
</template>

<!-- memberikan styling -->
<style scoped></style>
