<template>
  <form :class="classList" @submit.prevent="addCardList">
    <input v-model="body"
    type="text"
    class="text-input"
    placeholder="カードをつくる"
    @focusin="startEditing"
    @focusout="finishEditing"
  />
    <!-- フォームがアクティブの場合にボタンが出現 -->
    <button type="submit"
            class="add-button"
            v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
  export default {
    props: {
      listIndex: {
        type: Number,
        required: true,
      }
    },
    data: function() {
      return {
        body: '',
        isEditing: false,
        }
      },

  computed: {
    classList() {
      const classList = ['addcard']

      if (this.isEditing) {
        classList.push('active')
      }
      // フォームに文字が入力されたときにボタンが緑になる
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    // フォームに文字が入力されたとき
    titleExists() {
      return this.body.length > 0
    },
  },

  methods: {
    // フォームにフォーカスがあたってるかどうか
    startEditing:function () {
      this.isEditing = true
    },
    finishEditing: function() {
      this.isEditing = false
    },
    addCardToList: function() {
      this.$store.dispatch('addCardTolist', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    }
  }
}

</script>
