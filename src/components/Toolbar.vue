<template>
  <div class="toolbar">
    <el-button @click="console.log(111);">JSON</el-button>
    <el-button @click="console.log(111);">撤消</el-button>
    <el-button @click="console.log(111);">重做</el-button>
    <label for="input" class="insert">
        插入图片
        <input
            id="input"
            type="file"
            hidden
            @change="console.log(111);"
        />
    </label>

    <el-button style="margin-left: 10px;" @click="console.log(111);">预览</el-button>
    <el-button @click="console.log(111);">保存</el-button>
    <el-button @click="console.log(111);">清空画布</el-button>
    <el-button @click="console.log(111);">组合</el-button>
    <el-button
        @click="console.log(111);"
    >
        拆分
    </el-button>

    <el-button @click="console.log(111);">锁定</el-button>
    <el-button @click="console.log(111);">解锁</el-button>
    <el-button @click="console.log(111);">截图</el-button>

    <div class="canvas-config">
        <span>画布大小</span>
        <input v-model="canvasStyleData.width">
        <span>*</span>
        <input v-model="canvasStyleData.height">
    </div>
    <div class="canvas-config">
        <span>画布比例</span>
        <input v-model="scale" @input="handleScaleChange"> %
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      scale: 100,
      timer: null,
    };
  },
  computed: mapState([
    'canvasStyleData',
  ]),
  methods: {
    handleScaleChange() {
      // 画布比例设一个最小值，不能为 0，否则画布的组件会消失。
      this.timer = setTimeout(() => {
        // eslint-disable-next-line no-bitwise
        this.scale = (~~this.scale) || 1;
        // 根据画布比例修改画布样式
      }, 1000);
    },
  },
  created() {
    this.scale = this.canvasStyleData.scale;
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
    padding: 15px 10px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }
}
</style>
