export const HOME = "/";
export const PROFILE = "/profile";
export const CENTER_LEARNING = "/learning";
export const LITERATURE = "/literature";
export const SPRAVOCHNIK = "/questions";
export const BILINGUALS = "/bilinguals";
export const PRAVOPISANIE = "/grammar";
export const NEWS = "/news";
export const POLITIC = "/politic";
export const USER_AGREEMENT = "/agreement";
export const LESSON_SHOW = (slug: string, id: number) =>
  `lessons/${slug}-${id}`;
export const LITERATURE_SHOW = (slug: string, id: number) =>
  `literature/${slug}-${id}`;
export const COURSE_SHOW = (slug: string, id: number) =>
  `courses/${slug}-${id}`;
export const NEWS_SHOW = (slug: string, id: number) => `news/${slug}-${id}`;
export const BILINGUAL_SHOW = (slug: string, id: number) =>
  `bilinguals/${slug}-${id}`;
