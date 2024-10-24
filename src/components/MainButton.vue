<!-- nama component sebaiknya ditulis dengan pascal case -->
<script setup>
// const nameButton = 'Button'
const isLoading = false
// isDisabled mengikuti nilai dari isLoading
const isDisabled = isLoading
// dynamic binding multiple attributes
const buttonAttr = {
   class: 'text-xl bg-black text-white',
   id: '1',
   type: 'button',
}
// const renderIsLoading = () => {
//    if (isLoading) {
//       return 'Loading...'
//    } else {
//       return nameButton
//    }
// }
const url = {
   attr: 'href',
   link: '/home',
}
// pembuatan props, props ini menggunakan teknik destructuring dan props ini bisa menggunakan nilai default jika atribut di component tidak ada
const { title = 'test' } = defineProps({
   title: String,
})
</script>

<template>
   <!-- ini merupakan dynamic argument -->
   <a :[url.attr]="url.link">
      <!-- kita bisa menerapkan boolean atributes -->
      <button
         :disabled="isDisabled"
         v-bind="buttonAttr"
         :id="`btn-${buttonAttr.id}`"
      >
         <!-- pemanggilan function -->
         <!-- {{ renderIsLoading() }} -->

         <!-- pemanggilan props -->
         {{ title }}
      </button>
   </a>
</template>

<style scoped></style>
