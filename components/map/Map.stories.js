import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Map from '@/components/map/Map'
import store from '@/.storybook/store'

storiesOf('Lists', module)
  .add('Users', () => ({
    components: { Map },
    store: store,
    template: '<Map />'
  }))
  .add('Comments', () => ({
    components: { Map },
    store: store,
    template: `<Map :source="'comments'" />`
  }))
