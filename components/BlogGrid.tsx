import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";

type Props = {
  blogs: Blog[];
};

export default function BlogGrid({ blogs }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  );
}
