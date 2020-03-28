<template>
  <div>
    <div class="container mx-auto px-4 pt-8">
      <div class="grid grid-cols-1 gap-8 shadow-lg">
        <MapLoader
          :configMap="configMap"
          apiKey="AIzaSyDwO_9T_m5lEI1v87Dsinlj7aJEoWfhlbk"
        >
          <template slot-scope="{ google, map }">
            <div v-if="todos">
              <MapMarker
                v-for="marker in todos"
                :key="marker.id"
                :marker="marker"
                :google="google"
                :map="map" 
              />
            </div>
            <div v-else>
              <MapMarker
                :key="item.id"
                :marker="item"
                :google="google"
                :map="map" 
              />
            </div>
          </template>
        </MapLoader>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 capitalize">
            <span v-if="item">#{{ id }}</span> {{ title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ description }}
          </p>
          <div class="flex items-center py-3" v-if="item">
            <img class="w-10 h-10 rounded-full mr-4" src="/avatar.png" alt="avatar">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{{ author }}</p>
              <p class="text-gray-600">{{ created_at }}</p>
              <p class="text-gray-600">Completed: {{ completed }}</p>
            </div>
          </div>
        </div>
        <div class="px-6 py-4" v-if="!item">
          <nuxt-link :to="`/${this.$route.name}/list`">
            <button class="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-blue-300 rounded">List</button>
          </nuxt-link>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
  import MapLoader from '@/components/map/MapLoader'
  import MapMarker from '@/components/map/MapMarker'
  import { configMap } from '@/constants/configMap'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Map',
    data() {
      return {
        title: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        type: this.$route.name,
        center: { position: { lat: 40.419753, lng: -3.689831 } },
      }
    },
    props: {
      todos: Array,
      item: Object
    },
    components: {
      MapLoader,
      MapMarker
    },
    created() {
      this.setData()
    },
    methods: {
      setData: function() {
        if(this.item) {
          this.id = this.item.id
          this.title = this.item.title
          this.description = this.item.description
          this.author = this.item.author
          this.created_at = this.item.created_at
          this.completed = this.item.completed
        } else {
          this.title = this.$route.name
        }
      }
    },
    computed: {
      configMap() {
        return {
          ...configMap,
          center: this.mapCenter
        }
      },
      mapCenter() {
        if(this.item) {
          return this.item.position
        }
        
        return this.center.position
      }
    }
  }
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
