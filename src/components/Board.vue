<template>
  <div>
    <header>
      vuetrello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
          <!-- v-bindは:と省略して記述できる。 -->
          <list v-for="(item, index) in lists"
                :key="item.id"
                :title="item.title"
                :cards="item.cards"
                :listIndex="index"
          />
        <list-add />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'
export default {
  components: {
    ListAdd,
    List,
  },
  // stateで定義されたデータの名前と同じ名前の文字列でstateを呼び出すことができる
  computed: {
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
}
</script>