<template>
  <div class="main">
    <div class="header">
      <img src="@/assets/imgs/logo.png" alt="logo" />
      <div
        class="header-reload"
        @click="refreshGame"
        :class="{ 'header-reload-desable': !reloadDesable }"
      >
        <img src="@/assets/icons/reload.svg" alt="reload" />
      </div>
    </div>
    <the-field
      :cards="cards"
      :win="isWin"
      @update="changeActiveCard"
    ></the-field>
  </div>
</template>

<script lang="ts">
import TheField from "@/components/TheField.vue";
import { defineComponent, ref, onMounted, provide } from "vue";
import { CardsArr } from "@/constants";
import { Card } from "@/types";

export default defineComponent({
  components: {
    TheField,
  },
  setup() {
    const cards = ref<Card[]>([...CardsArr]);
    const reloadDesable = ref<boolean>(false);
    const isWin = ref<boolean>(false);
    const selectCard = ref<Card>();

    const shuffle = () => {
      let curIndex = cards.value.length;
      let randIndex = 0;

      while (curIndex != 0) {
        randIndex = Math.floor(Math.random() * curIndex);
        curIndex--;

        [cards.value[curIndex], cards.value[randIndex]] = [
          cards.value[randIndex],
          cards.value[curIndex],
        ];
      }
    };

    const activeReverseCards = (flag: boolean) => {
      cards.value = cards.value.map((card: Card) => ({
        ...card,
        active: flag,
      }));

      if (!flag) selectCard.value = undefined;
    };

    const refreshGame = () => {
      activeReverseCards(false);
      isWin.value = false;
      reloadDesable.value = false;
      setTimeout(() => {
        activeReverseCards(true);
        reloadDesable.value = true;
      }, 5000);
      shuffle();
    };

    const changeActiveCard = ({ id, imgNum }: Card) => {
      cards.value = cards.value.map((card: Card) =>
        card.id != id
          ? { ...card }
          : {
              ...card,
              active: !card.active,
            }
      );

      if (!selectCard.value) {
        selectCard.value = cards.value.find((card: Card) => {
          return card.id === id;
        });
      } else if (selectCard.value.imgNum === imgNum) {
        selectCard.value = undefined;
      } else {
        selectCard.value = cards.value.find((card: Card) => {
          return card.id === id;
        });
        setTimeout(() => {
          activeReverseCards(true);
          selectCard.value = undefined;
        }, 400);
      }

      if (cards.value.filter((card: Card) => card.active).length === 0) {
        isWin.value = true;
      }
    };

    onMounted(() => {
      shuffle();
      setTimeout(() => {
        activeReverseCards(true);
        reloadDesable.value = true;
      }, 5000);
    });

    provide("selectCard", selectCard);

    return {
      cards,
      isWin,
      reloadDesable,
      refreshGame,
      changeActiveCard,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(44, 44, 46);
  // background-color: rgb(62, 95, 138);
  // background-color: rgb(91, 93, 113);
  // background-color: rgb(10, 95, 56);
}

.header {
  width: 80%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;

  & img {
    width: 150px;
    margin: auto 0;
  }

  &-reload {
    width: 50px;
    height: 50px;
    display: flex;
    margin: auto 0;
    background-color: rgb(54, 53, 53);
    border-radius: 100%;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 0, 0);
      transition: 0.3s;
    }

    &-desable {
      pointer-events: none;
      opacity: 0.3;
      cursor: none;
    }

    & img {
      width: 55%;
      margin: auto;
    }
  }
}
</style>
