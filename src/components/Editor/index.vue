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
        <!-- 网格线 -->
        <Grid />
        <!--页面组件列表展示-->
        <Shape
          v-for="(item, index) in componentData"
          :key="item.id"
          :default-style="item.style"
          :style="getShapeStyle(item.style)"
          :active="item.id === (curComponent || {}).id"
          :element="item"
          :index="index"
          :class="{ lock: item.isLock }"
        >
        <component
          :is="item.component"
          :id="'component' + item.id"
          class="component"
          :style="getComponentStyle(item.style)"
          :prop-value="item.propValue"
          :element="item"
        />
        </Shape>
  </div>
</template>

<script>
import { getCanvasStyle, getShapeStyle, getStyle } from '@/utils/style';
import { changeStyleWithScale } from '@/utils/translate';
import { mapState } from 'vuex';
import Grid from './Grid.vue';
import Shape from './Shape.vue';

export default {
  components: { Grid, Shape },
  props: {
    isEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      svgFilterAttrs: ['width', 'height', 'top', 'left', 'rotate'],
    };
  },
  computed: mapState([
    'componentData',
    'curComponent',
    'canvasStyleData',
  ]),
  methods: {
    getCanvasStyle,
    changeStyleWithScale,
    getShapeStyle,
    getStyle,

    getComponentStyle(style) {
      return getStyle(style, this.svgFilterAttrs);
    },
  },
  mounted() {
    // 获取编辑器元素
    this.$store.commit('getEditor');
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
