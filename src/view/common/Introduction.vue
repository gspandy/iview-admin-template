<style scoped>

  .about {
    margin: 10px 20px 0 30px;
    color: black;
  }

</style>

<template>

  <div class="about">
    <vue-markdown># 运营系统初始化模板</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 基于Vue2 + iView2.0 + Vuex + Vue-Router，快速搭建基于Vue的运营系统。</vue-markdown>
    <br/>
    <vue-markdown># 组件</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### iView： [iView2.0](https://github.com/iview/iview)</vue-markdown>
    <vue-markdown>### Markdown显示： [VueMarkdown](https://github.com/miaolz123/vue-markdown)</vue-markdown>
    <vue-markdown>### Markdown编辑器： [MarkdownEditor](https://github.com/alecgorge/MarkdownEditor)&amp[Vue-SimpleMDE](https://github.com/F-loat/vue-simplemde)</vue-markdown>
    <vue-markdown>### 富文本框： [quillEditor](https://github.com/surmon-china/vue-quill-editor)</vue-markdown>
    <vue-markdown>### 图表： [百度Echarts](http://echarts.baidu.com)&amp[Vue-Echarts](https://github.com/xlsdg/vue-echarts-v3)</vue-markdown>
    <br/><br/>
  </div>

</template>

<script>

  import VueMarkdown from 'vue-markdown'
  export default {
    components: {
      VueMarkdown
    }
  }

</script>
