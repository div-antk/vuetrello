<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">x</div>
    </div>
    <card-add :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd'

export default {
  components: {
    CardAdd
  },

  // String、requiredで受け取ることを指定
  // propsはプロパティの意味
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    // テンプレートでクリック時にハンドルされるように定義したメソッド
    removeList: function() {
      if(confirm('このリストを削除しますか？')){
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
}
</script>