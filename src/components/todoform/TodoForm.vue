<script lang="ts">
import './todoform.scss'

export default {
  name: 'TodoForm',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addItem($event: Event) {
      $event.preventDefault()
      const title = this.title.trim()

      if (title) {
        this.$store.commit('addItem', this.title)
        this.title = ''
      }
    }
  }
}
</script>

<template>
  <form class="TodoForm" @submit="addItem($event)">
    <div class="TodoFormContainer">
      <input class="TodoFormInput" name="title" placeholder="Title" v-model="title" />
    </div>
    <button class="TodoFormButton" type="submit">Add</button>
  </form>
</template>
