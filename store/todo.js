import ToDo from "@/services/ToDo.js"

export const state = () => ({
    todos: [],
    item: {}
})
export const mutations = {
    SET_TODOS(state, todos) {
        state.todos = todos
    },
    SET_ITEM(state, item) {
        state.item = item
    }
}
export const actions = {
    fetchTodos({ commit }, typeResource) {
        return ToDo.getTodos().then(response => {
            const data = response.data
            const typeTodo = todo => todo.type === typeResource
            const dataSet = data.filter(typeTodo)
            commit('SET_TODOS', dataSet)
        })
    },
    fetchItem({ commit }, params) {
        return ToDo.getItem(params).then(response => {
            const data = response.data
            const item = i => i.id == params.id
            const dataSetItem = data.filter(item)
            commit('SET_ITEM', dataSetItem[0])
        })
    }
}
