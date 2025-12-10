// Глобальный поиск

export enum TypeGlobalSearch {
  LESSON = "lesson",
  LITERATURE = "literature",
  COURSE = "course",
  NEWS = "news",
  BILINGUAL = "bilingual",
}

export const typeGlobalSearchLabels: { [key: string]: string } = {
  [TypeGlobalSearch.LESSON]: "Центр обучения",
  [TypeGlobalSearch.COURSE]: "Центр обучения",
  [TypeGlobalSearch.LITERATURE]: "Литература",
  [TypeGlobalSearch.NEWS]: "Новости",
  [TypeGlobalSearch.BILINGUAL]: "Билингвы",
};

