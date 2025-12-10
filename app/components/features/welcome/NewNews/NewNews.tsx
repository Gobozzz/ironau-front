"use client";

import { NewsCard } from "@components/shared/NewsCard/NewsCard";
import styles from "./NewNews.module.css";
import { Marquee } from "@components/features/welcome/Marque/Marque";
import { NEWS } from "@navigate";
import Link from "next/link";

interface Props {
  className?: string;
}

export function NewNews({ className }: Props) {
  return (
    <div className={`${styles.inner} ${className}`}>
      <div>
        <Marquee />
      </div>
      <div className={styles.news}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Link className={styles.more} href={NEWS} aria-label="Больше новостей">
        Больше новостей
      </Link>
    </div>
  );
}
