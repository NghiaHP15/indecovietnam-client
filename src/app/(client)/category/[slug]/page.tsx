import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({params}: {params: Promise<{ slug: string }>}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>Products by Category: 
          <span className="font-bold text-green-600 capitalize tracking-wide"> {slug}</span>
        </Title>
        <CategoryProducts slug={slug} categories={categories} />
      </Container>
    </div>
  );
};

export default CategoryPage;
