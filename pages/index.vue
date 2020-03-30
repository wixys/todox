<template>
  <div>
    <div class="container mx-auto px-4 pt-8">
      <h2 class="uppercase tracking-wider text-blue-900 text-lg font-semibold">Todo by type</h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="mt-8">
            <div class="max-w-lg rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/tasks.jpg" alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Tasks</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 py-4">
                <nuxt-link to="tasks/list">
                  <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">Tasks List</button>
                </nuxt-link>
                <nuxt-link to="tasks">
                  <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">Tasks Map</button>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="max-w-lg rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/events.jpg" alt="Sunset in the mountains">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Events</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 py-4">
                <nuxt-link to="events/list">
                  <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">Events List</button>
                </nuxt-link>
                <nuxt-link to="events">
                  <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">Events Map</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/todo/Todo'

export default {
  components: {
    Todo
  }
}
</script>
