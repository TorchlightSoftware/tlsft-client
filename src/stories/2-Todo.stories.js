import TodoList from '../components/todo/list.vue'

export default {
  title: 'Todo',
}

const todos = [
  {id: 1, title: 'Take out trash'},
  {id: 2, title: 'Do the dishes'},
  {id: 3, title: 'Vacuum floor'},
]

export const list = () => ({
  components: {TodoList},
  data() {
    return {todos}
  },
  template: '<todo-list :todos="todos">With JSX</todo-list>',
})
