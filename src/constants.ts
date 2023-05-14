import { Card } from "@/types";

const tempArr: Card[] = [];
let numId = 1;

for (let i = 1; i <= 15; ++i) {
  tempArr.push(
    {
      id: numId,
      imgNum: i,
      active: false,
    },
    {
      id: numId + 1,
      imgNum: i,
      active: false,
    }
  );

  numId += 2;
}

export const CardsArr: Card[] = [...tempArr];
