import { getWoodBackgroundSrc } from "@/lib/woodBackgrounds";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export function WoodBackground() {
  const woodTexture = getWoodBackgroundSrc();

  useEffect(() => {
    document.body.classList.add("ss-has-wood-bg");
    return () => document.body.classList.remove("ss-has-wood-bg");
  }, []);

  const scene = (
    <div className="ss-wood-scene" aria-hidden>
      <div
        className="ss-wood-photo"
        style={{ backgroundImage: `url(${woodTexture})` }}
      />
      <div className="ss-wood-tint" />
      <div className="ss-wood-warmth" />
      <div className="ss-wood-spotlight-static" />
      <div className="ss-wood-vignette" />
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(scene, document.body);
}
