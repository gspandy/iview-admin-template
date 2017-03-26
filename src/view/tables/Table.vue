<template>
  <div class="v-table">
    <Table border :context="self" :columns="columns7" :data="data6"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="count" :current="currentPage" :page-size="itemsPerPage" @on-change="changePage"
              @on-page-size-change="changeSize"
              size="small" show-total show-elevator show-sizer></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        count: Math.ceil(Math.random() * 30 + 20),
        currentPage: 1,
        itemsPerPage: 10,
        self: this,
        columns7: [
          {
            title: '姓名',
            key: 'name',
            render (row, column, index) {
              return `<Icon type="person"></Icon> <strong>${row.name}</strong>`
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
            }
          }
        ],
        data6: []
      }
    },
    mounted () {
      this.mock(this.itemsPerPage)
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1)
      },
      mock (count) {
        const mock = [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
        this.$data.data6 = []
        for (let i = 0; i < count; i++) {
          this.$data.data6.push(mock[Math.ceil(Math.random() * 3)])
        }
      },
      changePage (page) {
        this.currentPage = page
        this.mock(this.itemsPerPage)
      },
      changeSize (size) {
        this.itemsPerPage = size
        this.mock(this.itemsPerPage)
      }
    }
  }
</script>

