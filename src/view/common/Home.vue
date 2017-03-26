<template>
  <div class="layout">
    <Row type="flex" class="layout-container">
      <i-col :span="4" class="layout-menu-left">
        <Menu :active-name="activeName" theme="dark" width="auto" :open-names="['0']" accordion @on-select="select">
          <div class="layout-logo-left"><h3>运营系统</h3></div>
          <Submenu name="0">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span class="layout-text">Introduction</span>
            </template>
            <Menu-item name="0-0">Introduction</Menu-item>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span class="layout-text">Components</span>
            </template>
            <Menu-item name="1-0">MarkdownEditor</Menu-item>
            <Menu-item name="1-1">QuillEditor</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span class="layout-text">Charts</span>
            </template>
            <Menu-item name="2-0">Chart</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span class="layout-text">Form</span>
            </template>
            <Menu-item name="3-0">Form</Menu-item>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span class="layout-text">Table</span>
            </template>
            <Menu-item name="4-0">Table</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col :span="20" class="layout-menu-right">
        <div class="layout-header">
          <i-button type="text">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          <div class="layout-ceiling-main">
            <a href="#">注册登录</a> |
            <a href="#">帮助中心</a>
          </div>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item>首页</Breadcrumb-item>
            <Breadcrumb-item>{{currentPathNameParent}}</Breadcrumb-item>
            <Breadcrumb-item>{{currentPathName}}</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <transition name="router-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <div class="layout-copy">2014-2017 &copy; QuantGroup</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName: '0-0',
        currentPathName: 'Introduction',
        currentPathNameParent: 'Introduction',
        page: [{
          name: 'Introduction',
          children: ['Introduction']
        }, {
          name: 'Components',
          children: ['MarkdownEditor', 'QuillEditor']
        }, {
          name: 'Charts',
          children: ['Charts']
        }, {
          name: 'Form',
          children: ['Form']
        }, {
          name: 'Table',
          children: ['Table']
        }
        ]
      }
    },
    methods: {
      select (name) {
        let currentPath = this.$data.page[name.split('-')[0]]
        let currentPathNameParent = currentPath.name
        let currentPathName = currentPath.children[name.split('-')[1]]
        this.$set(this.$data, 'currentPathNameParent', currentPathNameParent)
        this.$set(this.$data, 'currentPathName', currentPathName)
        this.$router.push({
          path: currentPathName
        })
      }
    }
  }

</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-container {
    height: 100%;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    flex: 1;
    margin: 15px;
    overflow: auto;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-menu-right {
    display: flex;
    flex-direction: column;
  }

  .layout-header {
    height: 45px;
    line-height: 45px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-ceiling-main {
    float: right;
    margin-right: 15px;
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    color: white;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  .router-fade-enter-active,
  .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter,
  .router-fade-leave-active {
    opacity: 0;
  }

</style>
