<template>
  <div class="user-header">
    <div class="header-info">
      <img src="" alt="" class="info-avatar">
      <p class="info-name">{{ nickname }}</p>
      <p class="info-followers"></p>
    </div>
    <div class="header-buttons">
      <button class="button-home">HOME</button>
      <button class="button-more">MORE</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'UserCommonHeader',
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        nickname: 'nickname'
      })
    }
  }
</script>
