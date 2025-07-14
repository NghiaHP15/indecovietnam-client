import BlogCard from "@/components/BlogCard";
import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import { blogData } from "@/constants/data";
import { slugify } from "@/lib/utils";

const TagPage = async ({ params }: { params: Promise<{ tagSlug: string }>}) => {
  const { tagSlug } = await params;

  const filteredBlogs = blogData.filter((blog) =>
    blog.tags.some((tag) => slugify(tag) === tagSlug)
  );

  return (
    <>
    <Breakcrum title={tagSlug} description={`Tất cả bài viết với ${tagSlug}`} />
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
            <BlogCard  key={blog.id} blog={blog}/>
            ))}
        </div>
      </Container>
    </div>
    </>
  );
}
export default TagPage;