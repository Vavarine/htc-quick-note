export type RawNote = {
  title: string;
  text: string;
};

export type INote = RawNote & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
