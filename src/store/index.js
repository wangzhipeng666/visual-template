import Vue from 'vue';
import Vuex from 'vuex';
import compose from './compose';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...compose.state,

    canvasStyleData: { // 页面全局数据
      width: 1200,
      height: 740,
      scale: 100,
      color: '#000',
      opacity: 1,
      background: '#fff',
      fontSize: 14,
    },
    componentData: [], // 画布组件数据
  },
  mutations: {
    ...compose.mutations,

    addComponent(state, { component, index }) {
      if (index !== undefined) {
        state.componentData.splice(index, 0, component);
      } else {
        state.componentData.push(component);
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
