<template>
  <div
        id="editor"
        class="editor"
        :class="{ edit: isEdit }"
        :style="{
            ...getCanvasStyle(canvasStyleData),
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }"
    >

  </div>
</template>

<script>
import { getCanvasStyle } from '@/utils/style';
import { changeStyleWithScale } from '@/utils/translate';
import { mapState } from 'vuex';

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: true,
    },
  },
  computed: mapState([
    'canvasStyleData',
  ]),
  methods: {
    getCanvasStyle,
    changeStyleWithScale,
  },
};
</script>

<style lang="scss" scoped>
.editor {
    position: relative;
    background: #fff;
    margin: auto;

    .lock {
        opacity: .5;

        &:hover {
            cursor: not-allowed;
        }
    }
}

.edit {
    .component {
        outline: none;
        width: 100%;
        height: 100%;
    }
}
</style>
