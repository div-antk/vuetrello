<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
    />
    <card-add :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd'
import Card from './Card'

export default {
  components: {
    CardAdd,
    Card
  },

  // String、requiredで受け取ることを指定
  // propsはプロパティの意味
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
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