import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import React from "react";

const SignglePageBlog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div>
      <Container>
        <Title>Signle Blog Page</Title>
        <p>{slug}</p>
      </Container>
    </div>
  );
};

export default SignglePageBlog;
