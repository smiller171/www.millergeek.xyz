// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'
import Card from './Card.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Card', Card)
  }
}
