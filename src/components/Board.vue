<template>
  <div>
    <header>
      vuetrello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <draggable :list="lists"
                  @end="movingList"
                  class="list-index">
          <!-- v-bindは:と省略して記述できる。 -->
          <list v-for="(item, index) in lists"
                :key="item.id"
                :title="item.title"
                :cards="item.cards"
                :listIndex="index"
                @change="movingCard"
          />
        <list-add />
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'
export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  // stateで定義されたデータの名前と同じ名前の文字列でstateを呼び出すことができる
  computed: {
    ...mapState([
      'lists',
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
  }
}
</script>