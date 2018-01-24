export type BookNumbers = {
  [key: string]: number;
};

export type Versification = {
  [key: string]: Array<number>;
};

export type Passage = {
  bookNameShort: string;
  bookNumber: number;
  startChapter: number;
  startVerse: number;
  endChapter: number;
  endVerse: number;
  invalidRef?: boolean;
  invalidRefMessage?: string;
};
