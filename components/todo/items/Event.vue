<template>
  <div>
      <nuxt-link
        :to="`/events/${id}`"
        class="text-lg"
      >
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
          style="background-image: url('/pic-map.jpg')" title="Woman holding a mug">
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">#{{ id }} {{ title }}</div>
              <p class="text-gray-700 text-base">{{ description }}</p>
            </div>
            <div class="flex items-center">
              <img class="w-10 h-10 rounded-full mr-4" src="/avatar.png" alt="avatar">
              <div class="text-sm">
                <p class="text-gray-900 leading-none">{{ author }}</p>
                <p class="text-gray-600">{{ created_at }}</p>
                <p class="text-gray-600">Completed: {{ completed }}</p>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'Event',
    props: {
      id: Number,
      description: String,
      title: {
        type: String,
        default: ''
      },
      completed: Boolean,
      author: String,
      created_at: String
    }
  }
</script>

<style scoped>
.card-hover:hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
