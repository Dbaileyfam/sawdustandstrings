import woodBackgroundOne from "@/assets/wood-background-1.jpg";
import woodBackgroundTwo from "@/assets/wood-background-2.jpg";
import woodBackgroundThree from "@/assets/wood-background-3.jpg";

export const woodBackgrounds = {
  "1": woodBackgroundOne,
  "2": woodBackgroundTwo,
  "3": woodBackgroundThree,
} as const;

export type WoodBackgroundId = keyof typeof woodBackgrounds;

/** Switch backgrounds: "1" horizontal grain, "2" vertical planks, "3" horizontal planks. */
export const activeWoodBackground: WoodBackgroundId = "3";

export function getWoodBackgroundSrc(id: WoodBackgroundId = activeWoodBackground) {
  return woodBackgrounds[id];
}
