<template>
  <div>
    <TopButton :source="'tasks'" />
    <Todo :todos="todos" :source="'tasks'" />
  </div>
</template>

<script>
  import TopButton from '@/components/partials/TopButton'
  import Todo from '@/components/todo/Todo'
  import { mapState } from "vuex"

	export default {
		components: {
			TopButton,
			Todo
		},
		async fetch({ store, error, params }) {
      const typeResource = 'tasks'
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