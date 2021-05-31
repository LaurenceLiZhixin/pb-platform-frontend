<template>
  <div>
    <codemirror ref="mycode" v-model="code" :options="options"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/rubyblue.css'
import 'codemirror/mode/python/python.js'

export default {
  name: 'Mycodemirror',
  data () {
    return {
      code: '', // 编辑器绑定的值
      content: '', // 内容
      mode: 'javascript',
      // 默认配置
      options: {
        tabSize: 2, // 缩进格式
        theme: 'rubyblue', // 主题，对应主题库 JS 需要提前引入
        lineNumbers: true, // 显示行号
        line: true,
        styleActiveLine: true, // 高亮选中行
        hintOptions: {
          completeSingle: true // 当匹配只有一项的时候是否自动补全
        }
      },
      modes: [{
        value: 'css',
        label: 'CSS'
      }, {
        value: 'javascript',
        label: 'Javascript'
      }, {
        value: 'html',
        label: 'XML/HTML'
      }, {
        value: 'x-java',
        label: 'Java'
      }, {
        value: 'x-objectivec',
        label: 'Objective-C'
      }, {
        value: 'x-python',
        label: 'Python'
      }, {
        value: 'x-rsrc',
        label: 'R'
      }, {
        value: 'x-sh',
        label: 'Shell'
      }, {
        value: 'x-sql',
        label: 'SQL'
      }, {
        value: 'x-swift',
        label: 'Swift'
      }, {
        value: 'x-vue',
        label: 'Vue'
      }, {
        value: 'markdown',
        label: 'Markdown'
      }]
    }
  },
  methods: {
    getContent () {
      return this.code
    }
  },
  components: {
    codemirror
  }
}
</script>
