<template>
  <div class="v-quill">
    <quill-editor ref="myTextEditor"
                  v-model="content"
                  :config="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>

    <div class="html" v-html="content"></div>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        content: '<h2>JSPangAdmin 是一个由Vue2为框架开发的后台管理系统。</h2><h3>你可以随意的使用并编辑它，希望可以帮助前端开发者减轻开发步骤，让大家有时间泡妞和享受生活。</h3>',
        editorOption: {}
      }
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    }
  }
</script>

<style>
  .ql-container .ql-editor {
    min-height: 200px;
    padding-bottom: 10px;
    max-height: 400px;
  }

  .html {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
    background-color: #fff;
  }
</style>
