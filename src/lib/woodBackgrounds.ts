import woodBackgroundOne from "@/assets/wood-background-1.jpg";
import woodBackgroundTwo from "@/assets/wood-background-2.jpg";

export const woodBackgrounds = {
  "1": woodBackgroundOne,
  "2": woodBackgroundTwo,
} as const;

export type WoodBackgroundId = keyof typeof woodBackgrounds;

/** Switch between background textures: "1" (horizontal grain) or "2" (vertical planks). */
export const activeWoodBackground: WoodBackgroundId = "2";

export function getWoodBackgroundSrc(id: WoodBackgroundId = activeWoodBackground) {
  return woodBackgrounds[id];
}
