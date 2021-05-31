<template>
  <Layout>
    <div>
      <Layout>
        <mycodemirror  ref="mycodemirror"/>
      </Layout>
    </div>
    <Button @click="compile">编译</Button>
    <div>
      <Layout>
        <editor ref="editor" :value="content" @on-change="handleChange"/>
      </Layout>
    </div>
  </Layout>
</template>

<script>
import Editor from '_c/editor'
import Mycodemirror from '@/components/codemirror/App.vue'
import getGRPCCompiledFile from '@/api/compiler'
import { mapActions } from 'vuex'
export default {
  name: 'editor_page',
  components: {
    Editor,
    Mycodemirror
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    ...mapActions([
      'compileFile'
    ]),
    handleChange (html, text) {
      console.log(html, text)
    },
    changeContent () {
      this.$refs.editor.setHtml('<p>powered by wangeditor</p>')
    },
    compile () {
      let content = this.$refs.mycodemirror.getContent()
      this.compileFile(content).then(res => {
        this.$refs.editor.setText(this.$store.state.compiledFile)
      }).catch(err => {
        console.log('err = ', err)
        alert('server conn error')
      })
    }
  }
}
</script>

<style>

</style>
