"use client";

import Link from "next/link";
import styles from "./NewsCard.module.css";

interface Props {
  className?: string;
}

export function NewsCard({ className }: Props) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div>
        <time className={styles.date} dateTime="2025-07-27">
          27.07.2025
        </time>
        <div className={styles.author}>Иванов Вячеслав</div>
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>Категория</div>
        <div className={styles.tag}>Категория</div>
      </div>
      <Link href={'/'}>
        <h2 className={`${styles.title} line-clamp-2`}>
          Международная конференция лингвистов: пути сохранения и развития
          осетинского языка в современном мире
        </h2>
      </Link>
      <p className={`${styles.text} line-clamp-6`}>
        Современное состояние осетиноведения в Республике характеризуется
        значительным интересом ученых различных специальностей — историков,
        филологов, этнографов, археологов, культурологов и искусствоведов — к
        изучению истории, культуры, традиций и языка осетинского народа. Особый
        акцент делается на изучении наследия выдающихся деятелей науки и
        искусства Осетии, таких как Коста Хетагуров, Асланбек Пухаев, Инал-Паша
        Кануков и др., чьи труды стали основой осетинской литературы и
        искусства.
      </p>
      <Link href={"/"} className={styles.link}>
        Читать полностью
      </Link>
    </article>
  );
}
