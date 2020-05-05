<template>
  <form :class="classList" @submit.prevent="addList">
    <input v-model="title"
      type="text"
      class="text-input"
      placeholder="リストをつくる"
      @focusin="startEditing"
      @focusout="finishEditing"
      >

    <!-- フォームがアクティブの場合にボタンが出現 -->
    <button type="submit"
            class="add-button"
            v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  
  data: function() {
    return {
      title: '',
      isEditing: false,
    }
  },

  computed: {
    classList() {
      const classList = ['addlist']

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
      return this.title.length > 0
    },
  },

  methods: {
    addList() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },

    // フォームにフォーカスがあたってるかどうか
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  }
}
</script>