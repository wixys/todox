<template>
  <div>
    <TopButton />
    <Map :todos="todos"/>
  </div>
</template>

<script>
  import TopButton from '@/components/partials/TopButton'
  import Map from '@/components/map/Map'
  import { mapState } from "vuex"

  export default {
    name: 'Maps',
    components: {
      TopButton,
      Map
    },
    async fetch({ store, error, params }) {
      const typeResource = 'tasks'
      console.log('Here: ' + typeResource)
      try {
        await store.dispatch('todo/fetchTodos', typeResource)
      } catch (e) {
        error({ statusCode: 404, message: "Data not found" })
      }
    },
    computed: mapState({
        todos: state => state.todo.todos
    })
  }
</script>
