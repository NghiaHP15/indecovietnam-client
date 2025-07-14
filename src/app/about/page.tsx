import Breakcrum from "@/components/Breakcrum";
import CarouselGallery from "@/components/CarouselGallery";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div
        style={{
            backgroundImage: `url(${"https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751922004/indeco/tbn5_szfy3z.jpg"})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}
        className="relative"
    >
        <div className="bg-white/70">
            <Breakcrum title="Về chúng tôi" description="Giới thiệu về chúng tôi" />
            <Container>
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="col-span-2 space-y-10" data-aos="fade-right" data-aos-delay="100">
                            <h1 className="text-2xl font-medium uppercase">Giới thiệu <span className="text-light_brownish">IndecoVietNam</span></h1>
                            <p className="text-lightColor">
                                INDECO VIETNAM là thương hiệu nội thất hiện đại hàng đầu, mang sứ mệnh kiến
                                tạo không gian sống tinh tế, tiện nghi và đậm chất cá nhân cho mọi gia đình
                                Việt. <br /><br />
                                Với phương châm `&quot;`Hiện đại trong từng chi tiết - Tinh tế trong từng không
                                gian`&quot;`, Chúng tôi không ngừng đổi mới thiết kế, cải tiến công nghệ và nâng
                                cao chất lượng sản phẩm.<br /><br />
                                Mang đến giải pháp nội thất toàn diện, từ thiết kế đến thi công – với chất lượng vượt trội, thiết kế sáng tạo và dịch vụ tận tâm – góp phần nâng tầm trải nghiệm sống cho mọi khách hàng.
                            </p>
                        </div>
                        <div className="col-span-3 flex justify-end" data-aos="fade-left" data-aos-delay="100">
                            <div className="relative z-0">
                                <Image
                                    src={"https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751925096/indeco/about_cuw3do.jpg"}
                                    alt=""
                                    width={350}
                                    height={350}
                                    className="w-auto h-full object-cover z-10 hover:scale-95 transition-all duration-300 relative"
                                >
                                </Image>
                                <div className="absolute top-10 left-[-40px] w-full h-full border border-gray-100 z-0"></div>
                                <div className="bg-gray-100 w-max h-[80px] px-8 flex items-center justify-center absolute z-20 right-[40px] bottom-[-40px]">
                                    <span className="text-base uppercase">Indeco <span className="text-light_brownish">VietNam</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${"https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751926860/indeco/FBI_BLADESMAN_06-scaled_gok9ki.jpg"})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            // backgroundAttachment: 'fixed',
                        }}
                        data-aos="fade-up" data-aos-delay="200"
                        className="relative h-[200px] md:h-[400px] w-full mt-20 mb-10"
                    >
                    </div>
                    <div className="mb-10 flex items-center justify-center" data-aos="fade-up" data-aos-delay="300">
                        <span className="text-lightColor">
                            Trở thành thương hiệu nội thất hiện đại được yêu thích hàng đầu tại Việt Nam và khu vực, tiên phong trong xu hướng thiết kế nội thất tối giản, thông minh và bền vững.
                        </span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <CarouselGallery/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  );
};

export default AboutUs;
