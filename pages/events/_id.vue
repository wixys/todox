<template>
  <div>
	<Map :item="item"/>
  </div>
</template>

<script>
  import TopButton from '@/components/partials/TopButton'
	import Todo from '@/components/todo/Todo'
	import Map from '@/components/map/Map'
  import { mapState } from "vuex"

	export default {
		components: {
			TopButton,
			Todo,
			Map
		},
		async fetch({ store, error, params }) {
			try {
				await store.dispatch('todo/fetchItem', params)
			} catch (e) {
				error({ statusCode: 404, message: "Data not found" })
			}
		},
		computed: mapState({
			item: state => state.todo.item
		})
	}
</script>