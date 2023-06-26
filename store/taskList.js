export const state = () => ({
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'ini deskripsi',
      isDone: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'ini deskripsi 2',
      isDone: false,
    },
    {
      id: 3,
      title: 'Task 3',
      description: ' ini deskripsi 3',
      isDone: false,
    }
  ],
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  TOGGLE_DONE(state, id) {
    const task = state.tasks.find((task) => task.id === id)
    task.isDone = !task.isDone;
    console.log(state.tasks);
  }
}

export const actions = {
  addTask(context, task) {
    task.id = context.state.tasks.length + 1;
    context.commit('ADD_TASK', task)
  }
}

export const getters = {
  getTasks: (state) => {
    return state.tasks
  },
  getTasksById: (state) => (id) => {
    return state.tasks.find(task => task.id === id)
  },
}
