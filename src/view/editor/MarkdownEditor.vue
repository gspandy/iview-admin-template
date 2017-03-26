<template>
  <div class="v-markdown">
    <Row>
      <i-col :xs="24" :sm="24" :md="12" :lg="12">
        <Card>
          <markdown-editor v-model="source" ref="markdownEditor"></markdown-editor>
        </Card>
      </i-col>
      <i-col :xs="24" :sm="24" :md="12" :lg="12">
        <Card>
          <div>预览效果：</div>
          <vue-markdown class="result-html full-height"
                        :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                        :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                        :emoji="emoji" :typographer="typographer" :toc="toc"
                        toc-id="toc">
          </vue-markdown>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import { markdownEditor } from 'vue-simplemde'
  export default {
    components: {
      VueMarkdown, markdownEditor
    },
    data () {
      return {
        source: '## 可以开始编写您的Markdown文档了~',
        show: true,
        html: true,
        breaks: true,
        linkify: true,
        emoji: true,
        typographer: true,
        toc: false
      }
    }
  }
</script>

<style>

</style>
