import { useEffect, useRef, useState } from "react";
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
  const motionEnabled = useWoodMotionEnabled();
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const [motos, setMotos] = useState<SawdustMote[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });

  const springConfig = { stiffness: 48, damping: 22, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const grainShiftX = useTransform(smoothX, [0, 2000], [-28, 28]);
  const grainShiftY = useTransform(smoothY, [0, 1200], [-18, 18]);
  const plankShiftX = useTransform(smoothX, [0, 2000], [-10, 10]);

  const spotlight = useMotionTemplate`radial-gradient(720px circle at ${smoothX}px ${smoothY}px, rgba(212, 168, 58, 0.16) 0%, rgba(196, 122, 82, 0.07) 34%, transparent 62%)`;
  const sheen = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(244, 234, 213, 0.07) 0%, transparent 55%)`;

  useEffect(() => {
    if (!motionEnabled) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const now = performance.now();
      const dx = e.clientX - lastRef.current.x;
      const dy = e.clientY - lastRef.current.y;
      const distance = Math.hypot(dx, dy);
      const elapsed = now - lastRef.current.t;

      if (distance < 14 || elapsed < 22) return;

      lastRef.current = { x: e.clientX, y: e.clientY, t: now };

      const burst = Array.from({ length: 2 }).map((_, i) => ({
        id: idRef.current++,
        x: e.clientX + (Math.random() * 18 - 9),
        y: e.clientY + (Math.random() * 18 - 9),
        size: 3 + Math.random() * 4,
        rotate: Math.random() * 160 - 80,
        delayMs: i * 40,
      }));

      setMotos((prev) => [...prev.slice(-24), ...burst]);
    };

    const trim = window.setInterval(() => {
      setMotos((prev) => prev.slice(-24));
    }, 650);

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.clearInterval(trim);
    };
  }, [motionEnabled, mouseX, mouseY]);

  return (
    <div className="ss-wood-scene" aria-hidden>
      <div className="ss-wood-base" />
      <motion.div className="ss-wood-planks" style={{ x: plankShiftX }} />
      <motion.div
        className="ss-wood-grain"
        style={{ x: grainShiftX, y: grainShiftY }}
      />
      <div className="ss-wood-knots" />
      <div className="ss-wood-vignette" />

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
    </div>
  );
}
