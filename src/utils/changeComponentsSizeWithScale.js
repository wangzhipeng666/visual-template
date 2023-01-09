import store from '@/store';
import { divide, multiply } from 'mathjs';

function format(value, scale) {
  return multiply(value, divide(parseFloat(scale), 100));
}

const needToChangeAttrs2 = ['width', 'height', 'fontSize'];
export default function changeComponentSizeWithScale(component) {
  Object.keys(component.style).forEach((key) => {
    if (needToChangeAttrs2.includes(key)) {
      if (key === 'fontSize' && component.style[key] === '') return;

      // eslint-disable-next-line no-param-reassign
      component.style[key] = format(component.style[key], store.state.canvasStyleData.scale);
    }
  });
}
