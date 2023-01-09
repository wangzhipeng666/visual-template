<template>
  <div
    class="shape"
    :class="{ active }"
    @mousedown="handleMouseDownOnShape"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    element: {
      required: true,
      type: Object,
      default: () => {},
    },
    defaultStyle: {
      required: true,
      type: Object,
      default: () => {},
    },
    index: {
      required: true,
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    handleMouseDownOnShape(e) {
      e.stopPropagation();
      this.$store.commit('setCurComponent', { component: this.element, index: this.index });

      // 修改当前组件样式
      const pos = { ...this.defaultStyle };
      this.$store.commit('setShapeStyle', pos);
    },
  },
};
</script>

<style lang="scss" scoped>
.shape {
    position: absolute;

    &:hover {
        cursor: move;
    }
}

.active {
    outline: 1px solid #70c0ff;
    user-select: none;
}
</style>
