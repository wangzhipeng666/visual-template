/* eslint-disable */
import Vue from 'vue';

const components = [
  'VButton',
];
components.forEach(key => {
  Vue.component(key, resolve => require([`@/custom-component/${key}/Component`], resolve))
  Vue.component(key + 'Attr', resolve => require([`@/custom-component/${key}/Attr`], resolve))
})
