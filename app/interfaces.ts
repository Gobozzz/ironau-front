interface IGlobalSearchItem {
  id: number;
  title: string;
  slug: string;
  type: string;
}

interface ServerErrors {
  [key: string]: string[];
}

interface Interesting {
  content: string;
}
