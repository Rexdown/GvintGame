<template>
  <div
    class="card"
    :class="{
      'card-close': card.active,
      'card-select': card.id === selectCard?.id,
    }"
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/imgs/gvint_card_${card.imgNum}.jpeg`) + ')',
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from "vue";
import { Card } from "@/types";

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
  setup() {
    const selectCard = inject<Card>("selectCard");

    return {
      selectCard,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 15%;
  height: 18%;
  display: flex;
  pointer-events: none;
  background-size: cover;
  transform-style: preserve-3d;
  transition: 0.33s;

  &-close {
    transition: 0.33s;
    transform: rotateX(-180deg);
    cursor: pointer;
    pointer-events: auto;
    background-image: url("@/assets/imgs/card_shirt.png") !important;
  }

  &-select {
    -webkit-box-shadow: 0px 2px 7px 7px rgba(255, 221, 0, 0.7);
    -moz-box-shadow: 0px 2px 7px 7px rgba(255, 221, 0, 0.7);
    box-shadow: 0px 0px 10px 6px rgba(255, 221, 0, 0.7);
    // pointer-events: auto;
    // cursor: pointer;
    transition: 0.3s;
  }
}

.close-card {
  transition: 0.33s;
  transform: rotateX(-180deg);
  background-image: url("@/assets/imgs/card_shirt.png") !important;
}
</style>
