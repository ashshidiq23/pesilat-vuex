<script>
import TodoList from "~/components/TodoList.vue";
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      firstName: 'John',
      lastName: 'Smith',
      signedUp: false,
      tasks: [
        {
          title: 'External Task 1',
          description: 'Description External Task 1'
        },
        {
          title: 'External Task 2',
          description: 'Description External Task 2'
        },
      ],
      showLifecycle: false,
    }
  },
  methods: {
    handleAddTask(value) {
      console.log(value);
    },
    handleClickAdd(value) {
      alert(value);
    }
  },
}
</script>

<template>
  <TodoList
      title="Todo Task"
      :firstName="firstName"
      :lastName="lastName"
  />
</template>
