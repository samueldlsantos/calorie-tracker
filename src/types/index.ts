export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  category: number;
  description: string;
  calories: number;
};