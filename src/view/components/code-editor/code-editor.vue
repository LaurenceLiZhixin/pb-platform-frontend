<template>
  <Layout>
    <div>
      <Layout>
        <mycodemirror :originCode="content.defaultContent" ref="mycodemirror"/>
      </Layout>
    </div>
    <Row style="margin-bottom: 5px;margin-top: 5px;">
      <i-col>
        <Button type="primary" style="float: right; width: 150px;"  @click="compile">编译</Button>
      </i-col>
    </Row>

    <div>
      <Layout>
        <mycodemirror originCode='' :writable="false" ref="mycodemirrorresult"/>
      </Layout>
    </div>
  </Layout>
</template>

<script>
import Mycodemirror from '@/components/codemirror/App.vue'
import { mapActions } from 'vuex'

export default {
  name: 'editor_page',
  components: {
    Mycodemirror
  },

  computed:{
  },
  data () {
    return {
      content: {
        defaultContent: '',
        defaultGRPCContent: `/*example*/
syntax = "proto3";

option go_package = "protobuf/dubbo3";
package protobuf;

service Greeter {
  rpc SayHello (HelloRequest) returns (User) {}
  rpc SayHelloStream (stream HelloRequest) returns (stream User) {}
}

message HelloRequest {
  string name = 1;
}

message User {
  string name = 1;
  string id = 2;
  int32 age = 3;
}`,
        defaultDubbeGRPCContent: `syntax = "proto3";

option java_multiple_files = true;
option java_package = "org.apache.dubbo";
option java_outer_classname = "HelloWorldProto";
option objc_class_prefix = "HLW";

package protobuf;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}`,
        defaultTripleContent: `/*example*/
syntax = "proto3";
package protobuf;

service Greeter {
  rpc SayHello (HelloRequest) returns (User) {}
  rpc SayHelloStream (stream HelloRequest) returns (stream User) {}
}

message HelloRequest {
  string name = 1;
}

message User {
  string name = 1;
  string id = 2;
  int32 age = 3;
}`
      },

    }
  },
  mounted:  function mounted() {
    var subPath = this.$route.path
    switch (subPath) {
      case '/triple':
        this.$refs.mycodemirror.setContent(this.content.defaultTripleContent)
        break
      case '/dubbo_grpc':
        this.$refs.mycodemirror.setContent(this.content.defaultTripleContent)
        break
      case '/grpc':
        this.$refs.mycodemirror.setContent(this.content.defaultGRPCContent)
        break
      default:
    }
  },
  methods: {
    ...mapActions([
      'compileFile'
    ]),

    handleChange (html, text) {
      console.log(html, text)
    },
    compile () {
      let idlFile = this.$refs.mycodemirror.getContent()
      var subPath = this.$route.path
      this.compileFile({idlFile, subPath}).then(res => {
        this.$refs.mycodemirrorresult.setContent(this.$store.state.compiler.compiledFile)
      }).catch(err => {
        alert('server conn error = '+err)
      })
    }
  }
}
</script>

<style>

</style>
