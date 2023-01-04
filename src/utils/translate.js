import store from '@/store';
import { divide, multiply } from 'mathjs';

// multiply乘法  divide除法
export function changeStyleWithScale(value) {
  // eslint-disable-next-line radix
  return multiply(value, divide(parseInt(store.state.canvasStyleData.scale), 100));
}

export function toPercent(val) {
  return `${val * 100}%`;
}
