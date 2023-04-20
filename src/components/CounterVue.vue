<script>
export default {
  props: ['title'],
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">{{title}}: {{count}}</button>
</template>

<style>
  button {
    background: #eee;
    border: 1px solid green;
    border-radius: 3px;
    padding: 0.5em 1em;
  }
</style>