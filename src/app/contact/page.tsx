"use client";

import Breakcrum from "@/components/Breakcrum";
import Container from "@/components/Container";
import FeedBackCard from "@/components/FeedBackCard";
import SocialMedia from "@/components/SocialMedia";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { typeFeedbackOptions } from "@/constants/data";
import { Feedback } from "@/constants/types";
import { check } from "@/images";
import { createFeedback, getAllFeedback } from "@/services/feedbackService";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";

const dataDefault = {
  name: "",
  email: "",
  phone: "",
  type: "",
  subject: "",
  message: "",
};

export const contactSchema = z.object({
  name: z.string().min(1, "Họ tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .regex(/^(0|\+84)\d{9}$/, "Số điện thoại không hợp lệ"),
  type: z.string().min(1, "Vui lòng chọn kiểu liên hệ"),
  subject: z.string().min(1, "Tiêu đề không được để trống"),
  message: z.string().min(1, "Vui lòng nhập nội dung liên hệ"),
});

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: dataDefault,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllFeedback({ params: { limit: 5, show: true } });
        if (res.data.success) {
          setFeedbacks(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const onSubmit = useCallback(async (values: z.infer<typeof contactSchema>) => {
    try {
      setLoading(true);
      const res = await createFeedback(values);
      if (res.data.success) {
        setOpen(true);
        form.reset(dataDefault);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <div
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751922004/indeco/tbn5_szfy3z.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="relative"
    >
      <div className=" bg-white/70">
        <Breakcrum title="Liên hệ" description="Liên hệ với Indeco" />
        <Container className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thông tin liên hệ */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-2xl md:text-3xl font-bold uppercase">
                Liên hệ với <span className="text-light_brownish">chúng tôi</span>
              </h1>
              <div className="space-y-3 mt-4">
                <p>Thương hiệu nội thất dành riêng cho những ai yêu không gian sống có chiều sâu, có gu thẩm mỹ rõ ràng, và trân trọng những giá trị thiết kế bền vững hãy đặt trước hôm nay để là một trong những người đầu tiên sở hữu những thiết kế độc bản từ INDECO</p>
                <h2 className="text-dark_brownish text-lg">Thông tin liên hệ</h2>
                <div><span className="text-dark_brownish">Địa chỉ: </span><span>Thạch thất - Hà Nội</span></div>
                <div><span className="text-dark_brownish">SĐT: </span><a href="tel:+843284994998">+84 32.8494.998</a></div>
                <div><span className="text-dark_brownish">Email: </span><a href="mailto:indecovietnam.fur@gmail">indecovietnam.fur@gmail</a></div>
                <div><span className="text-dark_brownish">Giờ hoạt động: </span>T2 - T7: 10:00 AM - 7:00 PM</div>
                <SocialMedia />
              </div>
            </div>

            {/* Form liên hệ */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-dark_brownish text-lg mb-4">Gửi thông tin</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-2 gap-3"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <Input placeholder="Họ tên" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="tel" placeholder="Số điện thoại" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <Input placeholder="Tiêu đề" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Chọn kiểu liên hệ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {typeFeedbackOptions.map((item) => (
                                  <SelectItem key={item.value} value={item.value}>
                                    {item.title}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <Textarea placeholder="Thông tin gửi" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    isLoading={loading}
                    className="col-span-2 px-3 py-2 bg-light_brownish hover:bg-dark_brownish text-white rounded-[2px]"
                  >
                    Gửi thông tin
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Container>

        {/* Feedback Carousel */}
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751920415/indeco/banner2_hx1wjw.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="h-[400px] w-full my-8 md:my-16 flex items-center"
        >
          <Container>
            <Carousel className="w-[450px]">
              <CarouselContent>
                {feedbacks.map((item, index) => (
                  <CarouselItem key={index}>
                    <FeedBackCard data={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Container>
        </div>
      </div>

      {/* Dialog thành công */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[600px] py-10 md:py-20">
          <DialogTitle className="sr-only">Phản hồi thành công</DialogTitle>
          <div className="flex flex-col items-center gap-4">
            <Image src={check} alt="check" width={100} height={100} />
            <h3 className="text-xl font-medium text-green-900">Bạn đã phản hồi thành công</h3>
            <p className="text-center">
              Chúng tôi đã tiếp nhận phản hồi của bạn. <br />
              Sẽ phản hồi quý khách trong thời gian sớm nhất.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactPage;
