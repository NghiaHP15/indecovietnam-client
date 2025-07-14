import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import { SubText, SubTitle } from "./ui/text";
import { footer1, footer2, footer3 } from "@/constants/data";
import Link from "next/link";
import LogoImage from "./LogoImage";
import FacebookPage from "./FacebookPage";

const Footer = () => {
  return (
    <footer className="bg-white border-t flex-none">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center">
              <LogoImage />
              <Logo />
            </div>
            <SubText className="mt-2">
              {footer1.description}
            </SubText>
          </div>
          <div>
            <SubTitle>{footer2.title}</SubTitle>
            <ul className="space-y-3 mt-4">
              {footer2?.items.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-light_brownish hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>{footer3.title}</SubTitle>
            <ul className="space-y-3 mt-4">
              {footer3?.items.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-light_brownish hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Mạng xã hội</SubTitle>
            <SubText>
              Theo dõi fanpage của chúng tôi để cập nhật những sản phẩm mới nhất và
              các chương trình khuyến mãi hấp dẫn.
            </SubText>
            <FacebookPage/>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <Logo className="text-sm" />
            <span>. All rights reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;