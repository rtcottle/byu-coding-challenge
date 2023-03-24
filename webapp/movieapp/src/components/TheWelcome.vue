<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
// import api from '../../../../webservice/api.js'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Search:</template>

    <input placeholder="Hidalgo" id="query" class="search-box" />
    <button @click="api" class="submit">Submit</button>
  </WelcomeItem>
</template>
