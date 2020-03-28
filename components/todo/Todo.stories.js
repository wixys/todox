import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Todo from '@/components/todo/Todo'
import store from '@/.storybook/store'


storiesOf('Todos', module)
  .add('Tasks', () => ({
    components: { Todo },
    store: store,
    template: '<Todo />'
  }))
  .add('Events', () => ({
    components: { Todo },
    store: store,
    template: `<Todo :source="'events'" />`
  }))
