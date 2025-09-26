export type Person = {
  name: string;
  phone: string; // dummy/fake
  age: number;
  about: string; // one-line
  image: string; // path in /public/images
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown or HTML string
  thumbnail: string; // path in /public/images
  author: string;
  date: string; // ISO string
  readingTime: string;
  tags: string[];
  person: Person;
};