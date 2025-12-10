"use client";

import Link from "next/link";
import styles from "./Result.module.css";
import { TypeGlobalSearch, typeGlobalSearchLabels } from "@enums";
import {
  BILINGUAL_SHOW,
  COURSE_SHOW,
  HOME,
  LESSON_SHOW,
  LITERATURE_SHOW,
  NEWS_SHOW,
} from "@navigate";

interface Props {
  className?: string;
  searchItems: Array<IGlobalSearchItem>;
  searchText: string;
}

function getLinkPageByType(type: string, slug: string, id: number): string {
  switch (type) {
    case TypeGlobalSearch.LESSON:
      return LESSON_SHOW(slug, id);
    case TypeGlobalSearch.COURSE:
      return COURSE_SHOW(slug, id);
    case TypeGlobalSearch.LITERATURE:
      return LITERATURE_SHOW(slug, id);
    case TypeGlobalSearch.NEWS:
      return NEWS_SHOW(slug, id);
    case TypeGlobalSearch.BILINGUAL:
      return BILINGUAL_SHOW(slug, id);
    default:
      return HOME;
  }
}

export function Result({ className = "", searchText, searchItems }: Props) {
  return (
    <div className={`${styles.inner} ${className}`}>
      <div className={styles.title}>Результаты выдачи</div>
      <div className={styles.result}>
        {searchText.length === 0 && (
          <div className={styles.empty}>Введите запрос в поисковой строке</div>
        )}
        {searchText.length > 0 && searchItems.length === 0 && (
          <div className={styles.empty}>
            Ничего не найдено. Попробуйте изменить запрос
          </div>
        )}
        {searchText.length > 0 &&
          searchItems.length > 0 &&
          searchItems.map((searchItem) => (
            <div className={styles.item} key={searchItem.id}>
              <div>
                <Link
                  className={`line-clamp-1 ${styles.item_title}`}
                  href={getLinkPageByType(searchItem.type, searchItem.slug, searchItem.id)}
                >
                  {searchItem.title}
                </Link>
                <div className={`line-clamp-1 ${styles.item_type}`}>
                  {typeGlobalSearchLabels[searchItem.type]}
                </div>
              </div>
              <div>
                <Link className={styles.link} href={getLinkPageByType(searchItem.type, searchItem.slug, searchItem.id)}>
                  Перейти
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
