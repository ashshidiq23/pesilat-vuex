<script>
export default {
  props: {
    task: Object,
    isGrid: Boolean,
  },
  methods: {
    onChangeTask(id) {
      this.$store.commit('taskList/TOGGLE_DONE', id)
    }
  }
}
</script>

<template>
  <div
      :class="[
        'item-task d-flex align-items-start border-bottom pt-3 pb-4',
        isGrid ? 'col-6 col-md-6 col-lg-4' : 'col-12'
        ]"
  >
    <input
        type="checkbox"
        name="status"
        id="task"
        class="me-2 mt-2"
        :checked="task.isDone"
        @click="onChangeTask(task.id)"
    >
    <div
        :class="[
          'd-flex flex-column',
          task.isDone ? 'text-decoration-line-through fst-italic' : ''
          ]"
    >
      <nuxt-link class="title-task mb-1" :to="'app/detail/' + task.id">
        {{ task.title }}
      </nuxt-link>
      <div class="description-task small text-muted">
        {{ task.description }}
      </div>
      <input class="form-control form-control-sm" type="date"/>
    </div>
  </div>
</template>

<style scoped>
</style>
