<script>
import CardItem from "~/components/CardItem.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    CardItem
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Todo List'
    },
    firstName: String,
    lastName: String,
    logger: Function,
    externalTask: Array,
  },
  emits: ['addTask', 'clickAdd'],
  name: 'TodoList',
  data() {
    return {
      searchQuery: '',
      isCreating: false,
      titleValue: '',
      descriptionValue: '',
      customClass: '',
      type: 'C',
      task: {
        id: this.calculateId,
        title: '',
        description: '',
        isDone: false,
      }
    }
  },
  methods: {
    ...mapActions('taskList', ['addTask']),
    handleCreate() {
      this.isCreating = !this.isCreating;
    },
    changeClass() {
      this.customClass = 'my-5';
    },
    resultQueryMethod() {
      console.log('run')
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        console.log(this.tasks);
        return this.tasks
      }
    },
    shuffle() {
      this.tasks.reverse();
    }
  },
  mounted() {
    console.log({...mapState('taskList', ['tasks', 'tasks'])})
  },
  computed: {
    // tasks() {
    //   return this.$store.state.taskList.tasks;
    // },
    ...mapState('taskList', ['tasks']),
    calculateId() {
      return this.tasks.length + 1;
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.tasks
      }
    },
    display() {
      if (this.resultQuery.length > 0) {
        return true;
      } else {
        return false
      }
    }
  },
}

</script>
<template>
  <div class="list-task m-5">
    <h1>
      {{ `${title} ${firstName} ${lastName}` }}
    </h1>
    <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
      Shuffle!
    </button>
    <input type="text" placeholder="search" v-model="searchQuery">
    <p v-if="display">Item dengan kata {{searchQuery}} ditemukan</p>
    <select>
      <option>Asc</option>
      <option>Desc</option>
    </select>
    <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
      Sort
    </button>
    <transition-group name="tasks-move" tag="div" class="list-task row">
      <CardItem
          v-for="(item, i) of resultQuery"
          :task="item"
          :key="item.id"
          :isGrid="true"
      />
    </transition-group>
    <div :class="`action py-2 ${customClass}`">
      <a
          href="#"
          class="add-button"
          v-if="!isCreating"
          @click="handleCreate"
      >
        Add Task
      </a>
      <div class="add-card" v-else>
        <div class="mb-2">
          <input v-model="task.title" class="form-control mb-2" placeholder="Title" type="text">
          <textarea v-model="task.description" class="form-control small" placeholder="Description"
                    rows="3"></textarea>
        </div>
        <div class="button-wrapper d-flex">
          <button class="btn btn-primary me-2" @click="$store.dispatch('taskList/addTask', task)">Save</button>
          <button class="btn btn-outline-secondary" @click="isCreating = !isCreating">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#app .tasks-move {
  transition: .4s;
}
</style>
