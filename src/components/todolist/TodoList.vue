<script lang="ts">
import './todolist.scss'

export default {
  name: 'TodoList',
  computed: {
    items() {
      return this.$store.getters.items
    }
  },
  methods: {
    deleteItem(index: number) {
      this.$store.commit('deleteItem', index)
    }
  }
}
</script>

<template>
  <div class="TodoList">
    <div v-for="(item, i) in items" class="TodoListItem" :key="i">
      <span class="TodoListItemTitle">{{ item.title }}</span>
      <span class="TodoListItemDelete" @click="deleteItem(i)">&#10005;</span>
    </div>
  </div>
</template>
