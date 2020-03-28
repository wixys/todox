<template>
  <div v-if="itemType === 'tasks'">
    <Task 
      :id="data.id"
      :title="data.title"
      :description="data.description"
      :completed="data.completed"
      :author="data.author"
      :created_at="data.created_at"
    />
  </div>
  <div v-else>
    <Event
      :id="data.id"
      :title="data.title"
      :description="data.description"
      :completed="data.completed"
      :author="data.author"
      :created_at="data.created_at"
    />
  </div>
</template>

<script>
  import Task from '@/components/todo/items/Task'
  import Event from '@/components/todo/items/Event'

  export default {
    name: 'TodoItem',
    components: {
      Task,
      Event
    },
    props: {
      itemType: {
        type: String,
        default: 'tasks'
      },
      data: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>
