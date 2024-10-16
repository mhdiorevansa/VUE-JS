import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';

const app = createApp(App);
// import component secara global, component global diperuntukkan untuk component yang sering muncul seperti navbar, footer, dll
app.component('CompositionComponent', CompositionComponent)
app.component('OptionsComponent', OptionsComponent)
app.mount('#app')
