// practicing vuex

import { db } from '~/plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const state = () => ({
    projects: [],
})

export const getters = {
    getProjects: (state) => {
        return state.projects;
    },
    getProject: (state) => (id) => {
        return state.projects.find(project => project.id === id);
    }
}

export const mutations = {
    setProjects(state, projects){
        state.projects = projects;
    }
}

export const actions = {
    async fetchProjects({ commit })
    {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // state.projects = projects;
        commit('setProjects', projects);

    }
}

/* //nuxt example
export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
*/