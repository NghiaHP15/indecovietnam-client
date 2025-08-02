"use client";

import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import FeedBackCard from "@/components/FeedBackCard";
import SocialMedia from "@/components/SocialMedia";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Feedback } from "@/constants/types";
import { check } from "@/images";
import { createFeedback, getAllFeedback } from "@/services/feedbackService";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const dataDefault = { name: "", email: "", phone: "", subject: "", message: "" }

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Feedback>(dataDefault);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await getAllFeedback({ params: { limit: 5, show: true } });
        if (res.data.success) {
          setFeedbacks(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedbacks();
  },[]) 

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await createFeedback(data);
      if(res.data.success){
        setOpen(true);
        setData(dataDefault);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  },[data]);

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
      <div className=" bg-white/70">
        <Breakcrum title={"Liên hệ"} description="Liên hệ với Indeco" />
        <Container className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-3" data-aos="fade-right" data-aos-delay="100">
                <h1 className="text-2xl md:text-3xl font-bold uppercase">Liên hệ với <span className="text-light_brownish">chúng tôi</span></h1>
              </div>
              <div className="col-span-2 md:col-span-1 space-y-4" data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-dark_brownish text-lg">Cửa hàng nội thất</h2>
                <p>Thương hiệu nội thất dành riêng cho những ai yêu không gian sống có chiều sâu, có gu thẩm mỹ rõ ràng, và trân trọng những giá trị thiết kế bền vững hãy đặt trước hôm nay để là một trong những người đầu tiên sở hữu những thiết kế độc bản từ INDECO</p>
                <h2 className="text-dark_brownish text-lg">Thông tin liên hệ</h2>
                <div>
                  <span className="text-dark_brownish">SĐT: </span>
                  <a href="tel:+843284994998">+84 32.8494.998</a>
                </div>
                <div>
                  <span className="text-dark_brownish">Email: </span>
                  <a href="mailto:indecovietnam.fur@gmail">indecovietnam.fur@gmail</a>
                </div>
                <div>
                  <span className="text-dark_brownish">Giờ hoạt động: </span>
                  <span >T2 - T7: 10:00 AM - 7:00 PM  </span>
                </div>
                <SocialMedia/>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-4" data-aos="fade-left" data-aos-delay="200">
                <h2 className="text-dark_brownish text-lg">Gửi thông tin</h2>
                <form action="" onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                  <Input value={data.name} required onChange={(e) => setData({ ...data, name: e.target.value })} type="name" placeholder="Họ tên" className="col-span-2" />
                  <Input value={data.email} required onChange={(e) => setData({ ...data, email: e.target.value })} type="email" placeholder="Email" className="col-span-1" />
                  <Input value={data.phone} required onChange={(e) => setData({ ...data, phone: e.target.value })} type="phone" placeholder="Số điện thoại" className="col-span-1" />
                  <Input value={data.subject} required onChange={(e) => setData({ ...data, subject: e.target.value })} type="address" placeholder="Tiêu đề" className="col-span-2" />
                  <Textarea value={data.message} required onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Thông tin gửi." className="col-span-2" />
                  <Button type="submit" isLoading={loading} className="px-3 py-2 bg-light_brownish hover:bg-dark_brownish hoverEffect text-white rounded-[2px]">Gửi thông tin</Button>           
                  </form>
              </div>
            </div>
        </Container>
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751920415/indeco/banner2_hx1wjw.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
          data-aos="fade-up" data-aos-delay="300"
          className="h-[400px] w-full my-8 md:my-16 flex items-center justify-end"
        >
          <Container >
            <div className="grid grid-cols-3" data-aos="fade-left" data-aos-delay="400">
              <Carousel className="w-[450px]">
                <CarouselContent>
                {feedbacks.map((item, index) => (
                  <CarouselItem key={index}>
                    <FeedBackCard key={index} data={item} />
                  </CarouselItem>
                ))}
                </CarouselContent>
              </Carousel>
            </div>
          </Container>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[600px]">
          <DialogTitle className="sr-only">Phản hồi thành công</DialogTitle> {/* ✅ thêm tiêu đề */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={check}
              alt="check"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-center text-xl font-medium text-green-900">Bạn đã phản hồi thành công</h3>
            <p className="text-center">Chúng tôi đã tiếp nhận phản hồi của bạn, <br />Chúng tôi sẽ phản hồi quý khách trong thời gian sớm nhất.</p>
          </div>
        </DialogContent>
      </Dialog>     
    </div>
  );
};

export default ContactPage;
