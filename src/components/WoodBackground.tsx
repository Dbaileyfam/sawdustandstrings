import { getWoodBackgroundSrc } from "@/lib/woodBackgrounds";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type SawdustMote = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  delayMs: number;
};

function useWoodMotionEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setEnabled(!reduced.matches && fine.matches);
    update();

    reduced.addEventListener("change", update);
    fine.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      fine.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function WoodBackground() {
  const woodTexture = getWoodBackgroundSrc();
  const motionEnabled = useWoodMotionEnabled();
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth * 0.5 : 0,
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight * 0.4 : 0,
  );
  const [motos, setMotos] = useState<SawdustMote[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });

  const springConfig = { stiffness: 55, damping: 20, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const photoShiftX = useTransform(smoothX, [0, 2000], [-24, 24]);
  const photoShiftY = useTransform(smoothY, [0, 1200], [-16, 16]);

  const spotlight = useMotionTemplate`radial-gradient(900px circle at ${smoothX}px ${smoothY}px, rgba(255, 210, 120, 0.28) 0%, rgba(212, 168, 58, 0.12) 28%, rgba(139, 90, 43, 0.06) 48%, transparent 68%)`;
  const sheen = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(255, 245, 220, 0.1) 0%, transparent 58%)`;

  useEffect(() => {
    document.body.classList.add("ss-has-wood-bg");
    return () => document.body.classList.remove("ss-has-wood-bg");
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      const point = "touches" in e ? e.touches[0] : e;
      if (!point) return;

      mouseX.set(point.clientX);
      mouseY.set(point.clientY);

      if (!motionEnabled) return;

      const now = performance.now();
      const dx = point.clientX - lastRef.current.x;
      const dy = point.clientY - lastRef.current.y;
      const distance = Math.hypot(dx, dy);
      const elapsed = now - lastRef.current.t;

      if (distance < 10 || elapsed < 16) return;

      lastRef.current = { x: point.clientX, y: point.clientY, t: now };

      const burst = Array.from({ length: 4 }).map((_, i) => ({
        id: idRef.current++,
        x: point.clientX + (Math.random() * 22 - 11),
        y: point.clientY + (Math.random() * 22 - 11),
        size: 4 + Math.random() * 6,
        rotate: Math.random() * 160 - 80,
        delayMs: i * 30,
      }));

      setMotos((prev) => [...prev.slice(-36), ...burst]);
    };

    const trim = window.setInterval(() => {
      setMotos((prev) => prev.slice(-36));
    }, 500);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.clearInterval(trim);
    };
  }, [motionEnabled, mouseX, mouseY]);

  const scene = (
    <div className="ss-wood-scene" aria-hidden>
      <motion.div
        className="ss-wood-photo"
        style={{
          backgroundImage: `url(${woodTexture})`,
          x: photoShiftX,
          y: photoShiftY,
        }}
      />
      <div className="ss-wood-tint" />
      <div className="ss-wood-warmth" />

      {motionEnabled ? (
        <>
          <motion.div className="ss-wood-spotlight" style={{ background: spotlight }} />
          <motion.div className="ss-wood-sheen" style={{ background: sheen }} />
          <div className="ss-wood-sawdust-layer">
            {motos.map((mote) => (
              <span
                key={mote.id}
                className="ss-sawdust-mote"
                style={{
                  left: mote.x,
                  top: mote.y,
                  width: mote.size,
                  height: mote.size * 0.55,
                  rotate: `${mote.rotate}deg`,
                  animationDelay: `${mote.delayMs}ms`,
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="ss-wood-spotlight-static" />
      )}

      <div className="ss-wood-vignette" />
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(scene, document.body);
}
