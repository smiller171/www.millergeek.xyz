<script setup lang="ts">
import { Content, useData } from 'vitepress'
import About from './About.vue'
import Resume from './Resume.vue'
import Contact from './Contact.vue'
import WordMark from './WordMark.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData()
</script>

<template>
  <Content v-if="page.filePath == 'keybase.txt'" />
  <div v-else>
    <header class="titlebar primary on-primary-text" id="titlebar">
      <WordMark />
      <span class="contact">scott@millergeek.xyz</span></br>
      <span class="contact">(512) 814-8521</span></br>
      <span class="contact">Leesburg, VA, USA</span>
    </header>
    <div class="topnav surface no-print">
      <nav class="elevation-3 primary" id="topnav">
        <ul>
          <li class="nav-item"><a class="on-primary-text" href="/">About</a></li>
          <li class="nav-item"><a class="on-primary-text" href="/resume">Resume</a></li>
          <li class="nav-item"><a class="on-primary-text" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="main surface on-surface-text">
      <Resume v-if="frontmatter.layout === 'resume'" />
      <About v-else-if="frontmatter.layout === 'about'" />
      <Contact v-else-if="frontmatter.layout === 'contact'" />
      <Card v-else>
        <Content />
      </Card>
    </div>
    <footer class="primary on-primary-text elevation-3 no-print">
      <div class="footer-left">
        <span>Scott </span>
        <span>Miller</span>
      </div>
      <div class="footer-right">
        <ul>
          <li><a class="on-primary-text" href="https://www.linkedin.com/in/scott-miller-91713652/">LinkedIn</a></li>
          <li><a class="on-primary-text" href="https://github.com/smiller171">GitHub</a></li>
          <li><a class="on-primary-text" href="https://keybase.io/smiller171">KeyBase</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  z-index: -1;
  font-family: 'Istok Web', sans-serif;
}

header {
  text-align: center;
  font-weight: bold;

  > h1 {
    margin: 0;
    font-size: 5rem;
  }

  .contact {
    display: none;
  }
}

.topnav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding-bottom: 1em;
  overflow: hidden;
}

nav {
  > ul {
    padding: 1em 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;

    > li {
        display: inline;
        margin-right: 1em;
      }
  }
}

.main {
  padding: 0 1em 1em;
  min-height: calc(100vh - (8rem + 6em));
}

h2 {
  /* margin-block-start: 0; */
}

footer {
  padding: 1em;
  margin: 0;
  position: sticky;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  .footer-right {
    > ul {
      margin: 0;
      padding: 0;

      > li {
        display: inline;
        margin-left: 1em;
      }
    }
  }
}

@media print {
  .no-print {
    display: none !important;
  }

  .main {
    display: block !important;
    padding-bottom: 0;
  }

  .jobtitle {
    display: block !important;
  }

  * {
    box-shadow: none !important;
    background-color: white;
  }

  .contact {
    display: block !important;
    color: black !important;
  }

}
</style>
