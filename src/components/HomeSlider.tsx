'use client';
import React, { useCallback, useEffect, useRef, useState } from "react";
import slide1 from "@/images/data/banner/slide1.jpg"
import slide2 from "@/images/data/banner/slide2.jpg"
import slide3 from "@/images/data/banner/slide3.jpg"
import slide4 from "@/images/data/banner/slide4.jpg"
import slide5 from "@/images/data/banner/slide5.jpg"
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
interface ItemSlider {
    bg: string
    title: string,
    name: string,
    des: string,
    button: string
} 

const sliderData = [
  {
    bg: slide1.src,
    name: 'Phòng khách hiện đại',
    title: 'LUNDEV Interiors',
    des: 'Tận hưởng không gian sống tinh tế với sofa cao cấp và thiết kế tối giản đậm chất châu Âu.',
    button: 'Khám phá ngay'
  },
  {
    bg: slide2.src,
    name: 'Phòng ngủ ấm cúng',
    title: 'LUNDEV Bedroom',
    des: 'Giấc ngủ trọn vẹn trong căn phòng được thiết kế với ánh sáng dịu nhẹ và nội thất gỗ tự nhiên.',
    button: 'Xem chi tiết'
  },
  {
    bg: slide3.src,
    name: 'Bếp mở hiện đại',
    title: 'LUNDEV Kitchen',
    des: 'Thiết kế bếp mở kết hợp đảo bếp tiện nghi, tạo nên điểm nhấn cho ngôi nhà hiện đại.',
    button: 'Tìm hiểu thêm'
  },
  {
    bg: slide4.src,
    name: 'Phòng làm việc sang trọng',
    title: 'LUNDEV Office',
    des: 'Không gian làm việc đẳng cấp với bàn gỗ óc chó và ghế da cao cấp, nâng tầm hiệu suất.',
    button: 'Khám phá thiết kế'
  },
  {
    bg: slide5.src,
    name: 'Nội thất căn hộ thông minh',
    title: 'LUNDEV Smart Home',
    des: 'Kết hợp công nghệ thông minh với thiết kế nội thất hiện đại cho trải nghiệm sống tiện nghi.',
    button: 'Đặt thiết kế ngay'
  },
  {
    bg: slide1.src,
    name: 'Không gian thư giãn',
    title: 'LUNDEV Lounge',
    des: 'Tạo góc thư giãn lý tưởng với ghế bành êm ái và đèn trang trí phong cách Bắc Âu.',
    button: 'Xem gợi ý'
  },
  {
    bg: slide2.src,
    name: 'Thiết kế tối giản',
    title: 'LUNDEV Minimal',
    des: 'Tinh gọn không gian sống bằng nội thất tối giản, đầy đủ công năng và tính thẩm mỹ.',
    button: 'Khám phá phong cách'
  }
]

const HomeSlider = () => {
    const [mounted, setMounted] = useState(false);
    const [data, ] = useState<ItemSlider[]>(sliderData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);


    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // reset lại mỗi khi currentIndex thay đổi
        stopAutoSlide();
        startAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    const startAutoSlide = useCallback(() => {
        stopAutoSlide(); // clear nếu đã có
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const stopAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    const handleNext = useCallback(() => {
        const list = slideRef.current?.querySelectorAll('.item');
        if (list && list.length > 0) {
        slideRef.current?.appendChild(list[0]);
        setCurrentIndex((prev) => (prev + 1) % data.length);
        }
    },[data.length]);

    const handlePrev = useCallback(() => {
        const list = slideRef.current?.querySelectorAll('.item');
        if (list && list.length > 0) {
        slideRef.current?.prepend(list[list.length - 1]);
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
        }
    },[data.length]);

    if (!mounted) return null; 

    return (
        <div className="relative overflow-hidden" suppressHydrationWarning>
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                ref={slideRef} className="slider w-full h-[100vh]"
            >
                {data.map((item, index) => (
                    <div
                        key={index} 
                        className="item w-[200px] h-[300px] rounded-xl"
                        style={{
                            backgroundImage: `url(${item.bg})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} 
                    >
                        <div className="content relative z-2 flex flex-col gap-2 h-full justify-end p-4 text-white">
                            <span className="top border-b border-white w-3"></span>
                            <span className="name text-sm line-clamp-1 tracking-tighter text-shadow-lg">{item.name}</span>
                            <h3 className="title text-2xl font-semibold line-clamp-2 tracking-tighter leading-[0.9] text-shadow-lg">{item.title}</h3>
                            <span className="des hidden tracking-wide leading-[1] text-shadow-lg">{item.des}</span>
                            <span className="btn hidden relative overflow-hidden py-2 mt-4 w-[100px] md:w-[150px] items-center justify-center text-sm font-semibold border rounded-3xl border-white shadow-md group">
                                <span className="relative text-sm md:text-base z-10 text-white text-shadow-lg">Xem thêm</span>
                                <div className="absolute inset-0 bg-btn_light_brownish/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
                            </span>
                        </div>
                        <div className="bg z-1 absolute rounded-xl top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                ))}
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute top-[calc(70%+120px)] left-1/2 right-20 z-2 flex items-center justify-between gap-6"
            >
                <div className="flex gap-2">
                    <button onClick={handlePrev} className="p-2 h-[40px] w-[40px] border rounded-full text-white border-white hover:text-btn_dark_brownish hover:border-btn_dark_brownish hoverEffect"><ChevronLeft/></button>
                    <button onClick={handleNext} className="p-2 h-[40px] w-[40px] border rounded-full text-white border-white hover:text-btn_dark_brownish hover:border-btn_dark_brownish hoverEffect"><ChevronRight/></button>
                </div>
                <div className="w-full">
                    <Progress value={((currentIndex + 1) / data.length) * 100} className="[&>div]:bg-white bg-white/10 h-1" />
                </div>
                <div className="text-4xl text-white font-medium underline-offset-4 relative">
                    <span>0</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-x-5.5"
                        >
                            {String(currentIndex + 1)}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeSlider;
