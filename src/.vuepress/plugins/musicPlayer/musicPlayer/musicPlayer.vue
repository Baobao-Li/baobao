<template>
  <div class="musicPlayer" v-if="show">
    <div class="cover" style="transform: translateX(50%)">
      <img :src="src ? src : 'img/logo.jpg'" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2730414466,4018791223&fm=26&gp=0.jpg",
      show: true
    };
  },
  mounted() {
    this.show = (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// 旋转封面
.cover {
  width: 60px;
  height: 60px;
  border: 8px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 70px;
  right: 0;
  animation: rotate 10s linear infinite;
  margin-right: -30px;
  transition-duration: 0.3s;
  img {
    width: 100%;
  }
}

.cover:hover {
  margin-right: 5px;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>