"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

type Work = { src: string; alt: string };

export default function Gallery({ works }: { works: Work[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) =>
      setIdx((i) => (i === null ? i : (i + d + works.length) % works.length)),
    [works.length]
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, close, step]);

  return (
    <>
      <div className="gallery">
        {works.map((w, i) => (
          <button
            key={w.src}
            className="thumb"
            onClick={() => setIdx(i)}
            aria-label={`View ${w.alt}`}
          >
            <Image
              src={w.src}
              alt={w.alt}
              fill
              sizes="(max-width: 920px) 33vw, 12vw"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-label={works[idx].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              className="lb-frame"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={works[idx].src}
                alt={works[idx].alt}
                fill
                sizes="92vw"
                priority
              />
            </motion.div>
            <div className="lb-cap">{works[idx].alt}</div>
            <button className="lb-close" onClick={close} aria-label="Close">
              ×
            </button>
            <button
              className="lb-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lb-nav next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
