<template>
  <div>
    <div class="container mx-auto px-4 pt-8">
      <div class="grid grid-cols-2 gap-8 shadow-lg">
        <TodoItem
          v-for="entity in todos"
          :key="entity.id"
          :item-type="source"
          :data="entity"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import TodoItem from '@/components/todo/items/TodoItem'

  export default {
    name: 'Todo',
    components: {
      TodoItem
    },
    props: {
      source: {
        type: String,
        default: 'tasks'
      },
      todos: Array
    },
  }
</script>
