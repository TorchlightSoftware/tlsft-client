<template>
  <f7-list simple-list>
    <f7-list-item v-for="todo in todos" :key="todo.id" :title="todo.title"></f7-list-item>
  </f7-list>
</template>

<script>
import F7List from 'framework7-vue/components/list.js'
import F7ListItem from 'framework7-vue/components/list-item.js'

// validator... perhaps we can use JSON-schema in real world examples?
const isTodo = p => {
  return typeof p === 'object' && p.id !== undefined && p.title !== undefined
}

export default {
  components: {F7List, F7ListItem},
  props: {
    todos: {
      type: Array,
      validator(prop) {
        return prop.every(isTodo)
      },
    },
  },
  data() {
    return {}
  },
}
</script>
