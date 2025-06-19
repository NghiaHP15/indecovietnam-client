import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({params}: {params: {slug: string}}) => {
  const categories = await getCategories();
  return (
    <div className="py-10">
      <Container>
        <Title>Products by Category: 
          <span className="font-bold text-green-600 capitalize tracking-wide"> {params?.slug}</span>
        </Title>
        <CategoryProducts slug={params?.slug} categories={categories} />
      </Container>
    </div>
  );
};

export default CategoryPage;
