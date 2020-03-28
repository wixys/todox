<template>
    <nav class="border-b bg-blue-900">
        <div class="container mx-auto flex items-center justify-between p-4">
            
            <ul class="flex items-center text-white mr-6">
                <li>
                    <nuxt-link to="/">
                        <span class="font-bold text-xl">TODOX</span>
                    </nuxt-link>
                </li>
                <li class="ml-16">
                    <nuxt-link to="/tasks/list" class="text-white hover:text-blue-200">
                        Tasks
                    </nuxt-link>
                </li>
                <li class="ml-6">
                    <nuxt-link to="/events/list" class="text-white hover:text-blue-200">
                        Events
                    </nuxt-link>
                </li>
            </ul>

            <div class="flex items-center">
                <div class="relative">
                    <input type="text" class="bg-gray-800 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline" placeholder="Search">
                    <div class="absolute top-0">
                        <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/></svg>
                    </div>
                </div>
            </div>

        </div>

    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
        
    }
</script>