<template>
  <div class="start">
    <button @click="$router.push('/game')">Играть</button>
  </div>
</template>

<style lang="scss" scoped>
.start {
  width: 100%;
  height: 100%;
  display: flex;
  background-size: cover;
  background-image: url("@/assets/imgs/gvint_bg.jpeg");

  & button {
    width: 17%;
    height: 10%;
    margin: auto;
    font-weight: 700;
    transition: 0.3s;
    font-size: 4.5vmin;
    border-radius: 25px;
    color: rgb(79, 25, 25);
    background-color: rgba(255, 255, 255, 0.3);

    &:hover {
      background-color: rgba(64, 56, 56, 0.5);
      color: rgb(153, 16, 16);
      transition: 0.3s;
    }
  }
}
</style>
