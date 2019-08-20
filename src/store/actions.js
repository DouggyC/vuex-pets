// actions call mutations, usually this is were api calls are

export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
