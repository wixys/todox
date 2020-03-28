<script>
  export default {
    name: 'MapMarker',
    props: {
      google: {
        type: Object,
        required: true
      },
      map: {
        type: Object,
        required: true
      },
      marker: {
        type: Object,
        required: true
      },
      itemType: {
        type: String,
        default: 'tasks'
      }
    },
    mounted() {
      const { Marker } = this.google.maps

      const customMarker = new Marker({
        position: this.marker.position,
        marker: this.marker,
        map: this.map,
        title: this.marker.title,
        icon: '/pin.svg',
        animation: google.maps.Animation.DROP
      })

      let contentString = `<div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">#${this.marker.id} ${this.marker.title}</div>
          <p class="text-gray-700 text-base">
            ${this.marker.description}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#${this.marker.type}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Completed: ${this.marker.completed}</span>
          <a href="/${this.$route.name}/${this.marker.id}">
            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              See more
            </button>
          </a>
        </div>
      </div>`
      
      let infowindow = new google.maps.InfoWindow({
	      content: contentString
      })

      if(!this.$route.params.id)
        customMarker.addListener('click', function() {
          infowindow.open(this.map, this)
        })

    },

    render(h) {
      return h()
    }
  }

</script>
