<template>
  <div class="flex mt-5">
    <div class="mx-auto">
			<nuxt-link :to="`/${source}/list`">
				<button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">List</button>
			</nuxt-link>
			<nuxt-link :to="`/${source}`">
				<button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">Map</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopButton',
		props: {
			source: {
				type: String,
				default: 'tasks'
			}
		}
	}
</script>