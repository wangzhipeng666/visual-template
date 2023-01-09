/* eslint-disable no-param-reassign */
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
    curComponent: null,
    curComponentIndex: null,
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
    setCurComponent(state, { component, index }) {
      state.curComponent = component;
      state.curComponentIndex = index;
    },
    setShapeStyle({ curComponent }, {
      top, left, width, height, rotate,
    }) {
      if (top) curComponent.style.top = Math.round(top);
      if (left) curComponent.style.left = Math.round(left);
      if (width) curComponent.style.width = Math.round(width);
      if (height) curComponent.style.height = Math.round(height);
      if (rotate) curComponent.style.rotate = Math.round(rotate);
    },
    setShapeSingleStyle({ curComponent }, { key, value }) {
      curComponent.style[key] = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
