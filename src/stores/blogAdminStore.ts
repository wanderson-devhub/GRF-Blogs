import { BlogWithUser } from "@/types/Blog";
import { Blog } from "@prisma/client";
import { create } from "zustand";

export type BlogState = {
  blogs: Blog[] | null;
  blogSelected: BlogWithUser | null;
};

export type BlogActions = {
  setBlogs: (blog: Blog[]) => void;
  setBlogSelected: (blog: BlogWithUser) => void;
};

export const useBlogAdminStore = create<BlogState & BlogActions>((set) => ({
  blogs: [],
  blogSelected: null,
  setBlogs: (blogs) => set({ blogs }),
  setBlogSelected: (blogSelected) => set({ blogSelected }),
}));
