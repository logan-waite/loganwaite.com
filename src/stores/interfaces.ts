export type Widget = {
  id: string;
  text: string;
  query: string;
  position: { x: number; y: number };
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  widgets: Widget[];
};
