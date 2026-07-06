"use client";

import Image from "next/image";
import { casts } from "@/data/casts";
import { useEffect, useMemo, useState } from "react";
import styles from "./CastCarousel.module.css";

type CastItem = {
  image: string;
  x: string;
};

const visibleOffsets = [-2, -1, 0, 1, 2];

function wrapIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function CastCarousel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const safeCasts = casts as CastItem[];

  const visibleCasts = useMemo(() => {
    if (safeCasts.length === 0) return [];

    return visibleOffsets.map((offset) => {
      const index = wrapIndex(current + offset, safeCasts.length);
      return {
        cast: safeCasts[index],
        index,
        offset,
      };
    });
  }, [current, safeCasts]);

  const move = (amount: number) => {
    if (safeCasts.length === 0) return;
    setCurrent((prev) => wrapIndex(prev + amount, safeCasts.length));
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (safeCasts.length === 0) {
    return null;
  }

  const activeCast = safeCasts[current];

  return (
    <section id="cast" className={styles.castSection}>
      <div className={styles.bg} />

      <div className={styles.header}>
        <h2 className={styles.title}>CAST</h2>
      </div>

      <div
        className={styles.carousel}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) return;

          const diff = touchStart - event.changedTouches[0].clientX;

          if (diff > 45) move(1);
          if (diff < -45) move(-1);

          setTouchStart(null);
        }}
      >
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => move(-1)}
          aria-label="前のキャストを見る"
        >
          ‹
        </button>

        <div className={styles.stage}>
          {visibleCasts.map(({ cast, index, offset }) => (
            <button
              key={`${cast.image}-${offset}`}
              className={`${styles.card} ${styles[`pos${offset}` as keyof typeof styles]}`}
              onClick={() => {
                if (offset === 0) {
                  setModalOpen(true);
                } else {
                  setCurrent(index);
                }
              }}
              aria-label="キャストポスターを見る"
            >
              <Image
                src={cast.image}
                alt="Rouge Cast"
                width={540}
                height={960}
                priority={offset === 0}
                className={styles.poster}
              />
            </button>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => move(1)}
          aria-label="次のキャストを見る"
        >
          ›
        </button>
      </div>

      <div className={styles.dots}>
        {safeCasts.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`${index + 1}番目のキャストを見る`}
          />
        ))}
      </div>

      <a
        href={activeCast.x}
        target="_blank"
        rel="noreferrer"
        className={styles.xButton}
      >
        𝕏を見る
      </a>

      {modalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <button
            className={styles.close}
            onClick={() => setModalOpen(false)}
            aria-label="閉じる"
          >
            ×
          </button>

          <Image
            src={activeCast.image}
            alt="Rouge Cast"
            width={900}
            height={1600}
            className={styles.modalPoster}
          />
        </div>
      )}
    </section>
  );
}