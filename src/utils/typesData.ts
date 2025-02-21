export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  published: true;
  cover: string;
  createdAt: string;
  updatedAt: string;
  tags: string;
  author: {
    id: number;
    username: string;
    createdAt: string;
    updatedAt: string;
  };
  categories: [
    {
      category: {
        id: number;
        name: string;
        slug: string;
      };
    }
  ];
}

export interface PostAll {
  posts: Array<Post>;
  total: number;
  pages: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number;
}
