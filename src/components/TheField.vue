<template>
  <div class="field">
    <transition-group name="cards-list">
      <the-card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @click="setActiveCard(card)"
        :class="{ 'game-win': win }"
      >
      </the-card>
    </transition-group>
  </div>
</template>

<script lang="ts">
import TheCard from "@/components/TheCard.vue";
import { defineComponent, PropType } from "vue";
import { Card } from "@/types";
export default defineComponent({
  components: {
    TheCard,
  },
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      default: () => [],
    },
    win: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const setActiveCard = (card: Card) => {
      emit("update", card);
    };

    return {
      setActiveCard,
    };
  },
});
</script>

<style lang="scss" scoped>
.field {
  width: 80%;
  height: 70%;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  row-gap: 2.5%;
  flex-wrap: wrap;
  justify-content: space-between;
  // background-color: rgb(153, 146, 138);
}

.cards-list-move {
  transition: transform 0.5s ease;
}

.game-win {
  -webkit-box-shadow: 0px 2px 7px 7px rgba(35, 115, 21, 0.7);
  -moz-box-shadow: 0px 2px 7px 7px rgba(35, 115, 21, 0.7);
  box-shadow: 0px 0px 10px 6px rgba(35, 115, 21, 0.7);
  transition: 0.3s;
}
</style>
