import { Clock, Facebook, GitCompareArrows, Headset, Instagram, Mail, MapPin, Phone, ShieldCheck, Truck, Youtube } from "lucide-react"
import { ContactItemData } from "./types";
import { TikTokIcon } from "@/icons";

export const headerData = [
    { title: "Trang chủ", href: "/" },
    { 
      title: "Sản phẩm", 
      layout: "grid", 
      href: "/product", 
      items: [
        {
          title: "Phòng ngủ",
          href: "/product?room=bedroom",
          items: [
            {
              title: "Giường",
              href: "/product?room=bedroom&category=bed",
              image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/12/6/0/RX_HGMAG097_Nasir-06.jpg.rend.hgtvcom.616.822.85.suffix/1638822975797.webp",
            },
            {
              title: "Tủ quần áo",
              href: "/product?room=bedroom&category=wardrobe",
              image: "https://qghome.vn/wp-content/uploads/2024/08/TQA15.jpg",
            },
            {
              title: "Bàn trang điểm",
              href: "/product?room=bedroom&category=dressing-table",
              image: "https://product.hstatic.net/200000539781/product/ban-trang-diem-treo-tuong-1_bb1e1a3485d7453ea2c3787b9c85078f.png",
            },
            {
              title: "Tủ đầu giường",
              href: "/product?room=bedroom&category=nightstand",
              image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljz2dsch3p2sd7"
            },
          ]
        },
        {
          title: "Phòng khách",
          href: "/product?room=living-room",
          items: [
            {
              title: "Sofa",
              href: "/product?room=living-room&category=sofa",
              image: "https://www.made4home.com.vn/wp-content/uploads/2024/08/living-room-japandi-interior-design2-2.jpg"
            },
            {
              title: "Bàn trà",
              href: "/product?room=living-room&category=coffee-table",
              image: "https://taduko.com/wp-content/uploads/2023/04/Ban-Tra-Sofa-Doi-Mat-Kinh-Gia-Da.jpg"
            },
            {
              title: "Kệ TV",
              href: "/product?room=living-room&category=tv-stand",
              image: "https://media.loveitopcdn.com/39292/anh-dai-dien-005.jpg"
            },
            {
              title: "Kệ sách",
              href: "/product?room=living-room&category=bookcase",
              image: "https://anhquanpro.vn/wp-content/uploads/2019/03/ke-sach-dung-hinh-cay.jpg"
            }
          ]
        },
        {
          title: "Phòng ăn",
          href: "/product?room=dining-room",
          items: [
            {
              title: "Bàn ăn",
              href: "/product?room=dining-room&category=dining-table",
              image: "https://hoaphatsaigon.com/upload/sanpham/large/1158-ban-an-ba504a-1.jpg",
            },
            {
              title: "Ghế ăn",
              href: "/product?room=dining-room&category=dining-chair",
              image: "https://haydecor.com/wp-content/uploads/2022/02/Ghe-FAUTEUIL-7.jpg",
            },
            {
              title: "Tủ rượu",
              href: "/product?room=dining-room&category=wine-cabinet",
              image: "https://noithatab.net/wp-content/uploads/2023/11/tu-trung-bay-ruou-nho-gon-TTB072.png",
            },
            {
              title: "Tủ bếp",
              href: "/product?room=dining-room&category=kitchen-cabinet",
              image: "https://media.noithatcaco.vn/upanh/uploads/03-2023/og1t2d.jpg"
            }
          ]
        },
        {
          title: "Phòng làm việc",
          href: "/product?room=office",
          items: [
            {
              title: "Bàn làm việc",
              href: "/product?room=office&category=desk",
              image: "https://noithattoz.com/wp-content/uploads/2024/07/ban-lam-viec-ikea-1m4-IKA1606.jpg",
            },
            {
              title: "Ghế văn phòng",
              href: "/product?room=office&category=office-chair",
              image: "https://ghexoayvanphong.com.vn/wp-content/uploads/2017/11/ghe-xoay-van-phong-mc10114-u2.jpg",
            },
            {
              title: "Tủ hồ sơ",
              href: "/product?room=office&category=file-cabinet",
              image: "https://toanmanh.com/wp-content/uploads/2022/09/THS421.png",
            },
            {
              title: "Kệ sách văn phòng",
              href: "/product?room=office&category=office-bookcase",
              image: "https://nicegarden.vn/upload/hinhthem/kesatvanphong8-9417.jpg"
            }
          ]
        },
      ]
    },
    { title: "Về Indeco", href: "/about" },
    { 
      title: "Bài viết", 
      href: "/blog", 
      layout: "list", 
      items: [
        { title: "Tin tức", href: "/blog?category=news" },
        { title: "Mẹo trang trí", href: "/blog?category=decor-tips" },
        { title: "Xu hướng nội thất", href: "/blog?category=interior-trends" },
        { title: "Câu chuyện khách hàng", href: "/blog?category=customer-stories" },
      ]
    },
    // { title: "Thiết kế", href: "/desgin" },
    { title: "Liên hệ", href: "/contact" },
]

export const footer1 = {
  description: "Indeco Việt Nam là một cửa hàng nội thất hàng đầu tại Việt Nam, cung cấp nhiều sản phẩm chất lượng cao để nâng cao không gian nhà và văn phòng của bạn."
}

export const footer2 = {
  title: "Thông tin nhanh",
  items: [
    { title: "Sản phẩm", href: "/product" },
    { title: "Phòng ngủ", href: "/product/bedroom" },
    { title: "Phòng khách", href: "/product/living-room" },
    { title: "Phòng ăn", href: "/product/dining-room" },
    { title: "Phòng làm việc", href: "product/office" },
  ]
};

export const footer3 = {
  title: "Chính sách",
  items: [
    { title: "Chính sách bán hàng", href: "/blog" },
    { title: "Chính sách giao hàng", href: "/blog" },
    { title: "Chính sách đổi trả", href: "/blog" },
    { title: "Chính sách bảo hành", href: "/blog" },
    { title: "Chính sách đối tác", href: "/blog" },
  ]
};

export const footer4 = {
  title: "Mạng xã hội",
  description: "Theo dõi fanpage của chúng tôi để cập nhật những sản phẩm mới nhất và các chương trình khuyến mãi hấp dẫn.",
  fanpage: ""
}

export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];

export const socailLinks = [
    { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61576607768367", icon: <Facebook className="w-5 h-5"/> },
    { title: "Instagram", href: "https://www.instagram.com/indeco.vietnam/", icon: <Instagram className="w-5 h-5"/> },
    { title: "YouTube", href: "https://www.youtube.com", icon: <Youtube className="w-5 h-5"/> },
    { title: "TikTok", href: "https://www.tiktok.com/@indeco_vietnam", icon: <TikTokIcon className="w-5 h-5 fill-darkColor/60"/> },
    
]

export const extraData = [
  {
    title: "Free Delivery",
    description: "Free shipping over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "Free shipping over $100",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back guarantee",
    description: "Quality checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];

export const contact: ContactItemData[] = [
  {
    title: "Địa chỉ",
    subtitle: "Đống Đa, Hà Nội",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-dark_brownish transition-colors" />
    ),
  },
  {
    title: "Liên hệ",
    subtitle: "+84 32 8494998",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
  {
    title: "Giờ làm việc",
    subtitle: "T2 - T7: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
  {
    title: "Email",
    subtitle: "indecovietnam.fur@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
];

export const categoryProduct = [
  {
    id: "1",
    title: "Phòng ngủ",
    href: "/product/bedroom",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751690538/indeco/1_tdi9du.png",
    items: [
      {
        title: "Giường",
        href: "/product/bedroom/bed",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/12/6/0/RX_HGMAG097_Nasir-06.jpg.rend.hgtvcom.616.822.85.suffix/1638822975797.webp",
      },
      {
        title: "Tủ quần áo",
        href: "/product/bedroom/wardrobe",
        image: "https://qghome.vn/wp-content/uploads/2024/08/TQA15.jpg",
      },
      {
        title: "Bàn trang điểm",
        href: "/product/bedroom/dressing-table",
        image: "https://product.hstatic.net/200000539781/product/ban-trang-diem-treo-tuong-1_bb1e1a3485d7453ea2c3787b9c85078f.png",
      },
      {
        title: "Tủ đầu giường",
        href: "/product/bedroom/nightstand",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljz2dsch3p2sd7"
      },
    ]
  },
  {
    id: "2",
    title: "Phòng khách",
    href: "/product/living-room",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751690538/indeco/2_vhomvb.jpg",
    items: [
      {
        title: "Sofa",
        href: "/product/living-room/sofa",
        image: "https://www.made4home.com.vn/wp-content/uploads/2024/08/living-room-japandi-interior-design2-2.jpg"
      },
      {
        title: "Bàn trà",
        href: "/product/living-room/coffee-table",
        image: "https://taduko.com/wp-content/uploads/2023/04/Ban-Tra-Sofa-Doi-Mat-Kinh-Gia-Da.jpg"
      },
      {
        title: "Kệ TV",
        href: "/product/living-room/tv-stand",
        image: "https://media.loveitopcdn.com/39292/anh-dai-dien-005.jpg"
      },
      {
        title: "Kệ sách",
        href: "/product/living-room/bookcase",
        image: "https://anhquanpro.vn/wp-content/uploads/2019/03/ke-sach-dung-hinh-cay.jpg"
      }
    ]
  },
  {
    id: "3",
    title: "Phòng ăn",
    href: "/product/dining-room",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751690538/indeco/3_wggau0.jpg",
    items: [
      {
        title: "Bàn ăn",
        href: "/product/dining-room/dining-table",
        image: "https://hoaphatsaigon.com/upload/sanpham/large/1158-ban-an-ba504a-1.jpg",
      },
      {
        title: "Ghế ăn",
        href: "/product/dining-room/dining-chair",
        image: "https://haydecor.com/wp-content/uploads/2022/02/Ghe-FAUTEUIL-7.jpg",
      },
      {
        title: "Tủ rượu",
        href: "/product/dining-room/wine-cabinet",
        image: "https://noithatab.net/wp-content/uploads/2023/11/tu-trung-bay-ruou-nho-gon-TTB072.png",
      },
      {
        title: "Tủ bếp",
        href: "/product/dining-room/kitchen-cabinet",
        image: "https://media.noithatcaco.vn/upanh/uploads/03-2023/og1t2d.jpg"
      }
    ]
  },
  {
    id: "4",
    title: "Phòng làm việc",
    href: "/product/office",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751690540/indeco/4_xmxq0j.png",
    items: [
      {
        title: "Bàn làm việc",
        href: "/product/office/desk",
        image: "https://noithattoz.com/wp-content/uploads/2024/07/ban-lam-viec-ikea-1m4-IKA1606.jpg",
      },
      {
        title: "Ghế văn phòng",
        href: "/product/office/office-chair",
        image: "https://ghexoayvanphong.com.vn/wp-content/uploads/2017/11/ghe-xoay-van-phong-mc10114-u2.jpg",
      },
      {
        title: "Tủ hồ sơ",
        href: "/product/office/file-cabinet",
        image: "https://toanmanh.com/wp-content/uploads/2022/09/THS421.png",
      },
      {
        title: "Kệ sách văn phòng",
        href: "/product/office/office-bookcase",
        image: "https://nicegarden.vn/upload/hinhthem/kesatvanphong8-9417.jpg"
      }
    ]
  }
]

export const dataProducts = [
  {
    id: "1e3c7901-d0ef-40b5-8bf7-67984c270001",
    name: "Ghế Sofa Cổ Điển",
    slug: "ghe-sofa-co-dien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Kích thước: D250x S109x C77 cm /Phong cách: Contemporary Italian – thanh lịch, hiện đại /Chất liệu: Vải cao cấp phối viền da nhân tạo - Khung gỗ tự nhiên - Chân inox /Gối đi kèm: 8 gối rời, bao gồm gối tựa lưng và gối trang trí /Màu sắc: Trắng xám phối đen – hiện đại, tinh tế và dễ kết hợp",
    status: 1,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40b5-8bf7-67984c270001",
        sku: "CODE.SP01",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "small",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-50b5-8bf7-67984c270001",
        sku: "CODE.SP02",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-67984c270001",
        sku: "CODE.SP03",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP04",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-67984c270301",
        sku: "CODE.SP05",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "small",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7902-d0ef-40b5-8bf7-67984c270002",
    name: "Bàn Ăn Gỗ Tự Nhiên",
    slug: "ban-an-go-tu-nhien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Bàn ăn cho gia đình 6 người",
    status: 2,
    featured: false,
    body: "updating",
    variants: [
      {
        id: "3e3c7901-d1ef-40b5-8bf7-67984a270001",
        sku: "CODE.SP06",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "4e3c7901-d0ef-50a5-8bf7-67984c270001",
        sku: "CODE.SP07",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "5e3c7901-d0ef-58b5-8bf7-6a984c270001",
        sku: "CODE.SP08",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "6e3c7901-d0ef-58b5-8bf7-67984cs70201",
        sku: "CODE.SP09",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "7e3c7901-d0ef-58b5-8bf7-679s4c270301",
        sku: "CODE.SP10",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7903-d0ef-40b5-8bf7-67984c270003",
    name: "Tủ Giày Hiện Đại",
    slug: "tu-giay-hien-dai",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Tủ giày gọn gàng",
    status: 3,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "8e3c7901-d1ef-40b5-8bf7-97984c270001",
        sku: "CODE.SP11",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "M",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "9e3c7901-d0ef-50b5-8bf7-6798sc270001",
        sku: "CODE.SP12",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "L",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e5c7901-d0ef-58b5-8bf7-67984cx70001",
        sku: "CODE.SP13",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "XL",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e6c7901-d0ef-58b5-8bf7-c7984c270201",
        sku: "CODE.SP14",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "L",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e7c7901-d0ef-58b5-8bf7-67984c270x01",
        sku: "CODE.SP15",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7914-d0ef-40b5-8bf7-67984c270004",
    name: "Giường Ngủ Gỗ Sồi",
    slug: "giuong-ngu-go-soi",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Giường ngủ đơn giản, chắc chắn",
    status: 1,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40bs-8bf7-67984c270001",
        sku: "CODE.SP16",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "1m",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7921-d0ef-50b5-8bf7-64984c270001",
        sku: "CODE.SP17",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "2m",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7931-d0ef-58b5-8bf7-67984c2700b1",
        sku: "CODE.SP18",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "1.5m",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7951-d0ef-58b7-8bf7-67984c270201",
        sku: "CODE.SP19",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "1m",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7991-d0ef-58b5-8bf7-67984c271301",
        sku: "CODE.SP20",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "1m",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7901-d0ef-40b5-8bf7-6b984c270001",
    name: "Ghế Sofa Cổ Điển",
    slug: "ghe-sofa-co-dien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Ghế cho phòng khách sang trọng",
    status: 2,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40b5-8bf7-f7984c270001",
        sku: "CODE.SP01",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-50b5-8bf7-6798ac270001",
        sku: "CODE.SP02",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-67a84c270001",
        sku: "CODE.SP03",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7s01-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP04",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8tf7-67984c270301",
        sku: "CODE.SP05",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7902-d0ef-40b5-8bf7-67984c270s02",
    name: "Bàn Ăn Gỗ Tự Nhiên",
    slug: "ban-an-go-tu-nhien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Bàn ăn cho gia đình 6 người",
    status: 3,
    featured: false,
    body: "updating",
    variants: [
      {
        id: "3e3c7901-d1ef-40b5-8bf7-c7984c270001",
        sku: "CODE.SP06",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "4e3c7901-d0ef-50b5-8bf7-6798xc270001",
        sku: "CODE.SP07",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "5e3c7901-d0ef-58b5-8bf7-67984c271001",
        sku: "CODE.SP08",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "6e3c7901-d0ef-58b5-8bf7-67984c2c0201",
        sku: "CODE.SP09",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "7e3c7901-d0ef-58b5-3bf7-67984c270301",
        sku: "CODE.SP10",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7903-d0ef-40b5-8bf7-6s984c270003",
    name: "Tủ Giày Hiện Đại",
    slug: "tu-giay-hien-dai",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Tủ giày gọn gàng",
    status: 1,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "8e3c7901-d1ef-40b5-8bf7-679841270001",
        sku: "CODE.SP11",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "9e3c7901-d0ef-50b5-8bf7-67984s270001",
        sku: "CODE.SP12",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e5c7901-d0ef-58b5-8bf7-17984c270001",
        sku: "CODE.SP13",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e6c7901-d0ef-58b5-8bf7-6798sc270201",
        sku: "CODE.SP14",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e7c7901-d0ef-58b5-8bf7-67984c370301",
        sku: "CODE.SP15",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7914-d0ef-40b5-8bf7-6798gc270004",
    name: "Giường Ngủ Gỗ Sồi",
    slug: "giuong-ngu-go-soi",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Giường ngủ đơn giản, chắc chắn",
    status: 2,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40b5-8bf7-6798cc270001",
        sku: "CODE.SP16",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7921-d0ef-50b5-8bf7-27984c270001",
        sku: "CODE.SP17",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7931-d0ef-58b5-8bf7-67984c270c01",
        sku: "CODE.SP18",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7931-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP19",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7991-d0ef-58b5-8bf7-67184c270301",
        sku: "CODE.SP20",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7901-d0ef-40b5-8bf7-679s4c270001",
    name: "Ghế Sofa Cổ Điển",
    slug: "ghe-sofa-co-dien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Ghế cho phòng khách sang trọng",
    status: 3,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40b5-8bf7-67984c2d0001",
        sku: "CODE.SP01",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-50b5-8bf7-v7984c270001",
        sku: "CODE.SP02",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c790a-d0ef-58b5-8bf7-67984c270001",
        sku: "CODE.SP03",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-6s984c270201",
        sku: "CODE.SP04",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7901-d0ef-58b5-8bf7-67984cd70301",
        sku: "CODE.SP05",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7902-d0ef-40b5-8bf7-67984c270f02",
    name: "Bàn Ăn Gỗ Tự Nhiên",
    slug: "ban-an-go-tu-nhien",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Bàn ăn cho gia đình 6 người",
    status: 1,
    featured: false,
    body: "updating",
    variants: [
      {
        id: "3e3c7901-d1ef-40b5-8bf7-67984c270001",
        sku: "CODE.SP06",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "4e3c7901-d0ef-50b5-8bf7-67984c270001",
        sku: "CODE.SP07",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "5e3c7901-d0ef-58b5-8bf7-67984c270001",
        sku: "CODE.SP08",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "6e3c7901-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP09",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "7e3c7901-d0ef-58b5-8bf7-67984c270301",
        sku: "CODE.SP10",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7903-d0ef-40b5-8bf7-67984c27t003",
    name: "Tủ Giày Hiện Đại",
    slug: "tu-giay-hien-dai",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Tủ giày gọn gàng",
    status: 2,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "8e3c7901-d1ef-40b5-8bf7-67984c270001",
        sku: "CODE.SP11",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "9e3c7901-d0ef-50b5-8bf7-67984c270001",
        sku: "CODE.SP12",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e5c7901-d0ef-58b5-8bf7-67984c270001",
        sku: "CODE.SP13",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e6c7901-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP14",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e7c7901-d0ef-58b5-8bf7-67984c270301",
        sku: "CODE.SP15",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
  {
    id: "1e3c7914-d0ef-40b5-8bf7-67984c2700h4",
    name: "Giường Ngủ Gỗ Sồi",
    slug: "giuong-ngu-go-soi",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg",
    description: "Giường ngủ đơn giản, chắc chắn",
    status: 3,
    featured: true,
    body: "updating",
    variants: [
      {
        id: "1e3c7901-d1ef-40b5-8bf7-6a984c270001",
        sku: "CODE.SP16",
        image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769696/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_02_fz0dzd.jpg',
        color: "bg-gray-100",
        size: "large",
        price: 12000000,
        show: true,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7921-d0ef-50b5-8bf7-67984c270001",
        sku: "CODE.SP17",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_01_actnfi.jpg",
        color: "bg-stone-200" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7931-d0ef-58b5-8bf7-67984c270001",
        sku: "CODE.SP18",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769695/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_03_repp7x.jpg",
        color: "bg-gray-400" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7951-d0ef-58b5-8bf7-67984c270201",
        sku: "CODE.SP19",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-neutral-900" ,
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
      {
        id: "1e3c7991-d0ef-58b5-8bf7-67984c270301",
        sku: "CODE.SP20",
        image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751769694/indeco/01._GH%E1%BA%BE_XOAY_NHUNG_CAO_C%E1%BA%A4P_0_cnt7sy.jpg",
        color: "bg-amber-300",
        size: "large",
        price: 12000000,
        show: false,
        discount: 10,
        is_active: true,
        material: "Gỗ sồi",
        inventoryitems: 5
      },
    ],
    category: {
      title: "Phòng khách",
      slug: "living-room",
      subCategory: {
        title: "Sofa",
        slug: "sofa"
      }
    }
  },
]

export const slideData = [
  { id: 1, image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751810324/indeco/XLD_k98bat.png', title: 'Bạn thiết kế nó', description: "Quên một kích cỡ phù hợp với tất cả. Không có khoảng trống, không có phỏng đoán - sử dụng công nghệ CustomFit® thông minh của chúng tôi để tạo ra sự phù hợp hoàn hảo của bạn một cách dễ dàng." },
  { id: 2, image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751810325/indeco/XLD_1_owb7gl.png', title: 'Chúng tôi làm cho nó theo đơn đặt hàng của bạn', description: "Mỗi mảnh được chế tạo chỉ dành cho bạn, với chất lượng ở cốt lõi. Không sản xuất hàng loạt, chỉ là sự hoàn hảo cho bạn." },
  { id: 3, image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751810468/indeco/XLD_2_gkv8xh.png', title: 'Build in no time', description: "Mỗi mảnh được chế tạo chỉ dành cho bạn, với chất lượng ở cốt lõi. Không sản xuất hàng loạt, chỉ là sự hoàn hảo cho baise." },
  { id: 4, image: 'https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751810324/indeco/XLD_3_ucr0dw.png', title: 'Thưởng thức suốt đời', description: "Mỗi mảnh được chế tạo chỉ dành cho bạn, với chất lượng ở cốt lõi. Không sản xuất hàng loạt, chỉ là sự hoàn hảo cho bạn." },
]

export const blogData = [
  {
    id: "1",
    title: "Cách chọn nội thất phù hợp cho không gian sống của bạn",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chăm chỉ. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn A",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_2_ufdbue.jpg",
    blogCategories: {
      title: "Tin tức",
      slug: "news",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: ["giường ngủ", "ưu đãi", "giường ngủ", "giường ngủ cao cấp", "đồ gỗ nội thất"],
    body: `<p>Tiếp nối những chương tr&igrave;nh ưu đ&atilde;i trong th&aacute;ng 03 n&agrave;y,&nbsp;<strong><a href="https://moho.com.vn/" target="_blank">Nội Thất</a></strong>&nbsp;MOHO gửi đến qu&yacute; kh&aacute;ch 02 chương tr&igrave;nh ưu đ&atilde;i mua sắm với mức chiết khấu cực kỳ tốt, gi&uacute;p bạn thỏa sức mua sắm với danh mục l&ecirc;n đến gần 50 d&ograve;ng sản phẩm kh&aacute;c nhau cho bạn thỏa sức chọn lựa.</p>
          <h2><strong>1/ Chương tr&igrave;nh &ldquo;<a href="https://moho.com.vn/collections/clearance" target="_blank">Nội thất chuẩn &Acirc;u &ndash; gi&aacute; Việt</a>&rdquo;</strong></h2>
          <p><strong>Thời gian</strong>: từ ng&agrave;y 07/03/2023</p>
          <p><strong>Số lượng sản phẩm</strong>: 12 mẫu&nbsp;<strong><a href="https://moho.com.vn/" target="_blank">nội thất</a></strong></p>
          <p><strong>D&ograve;ng sản phẩm</strong>:</p>
          <ul>
          <li><strong><a href="https://moho.com.vn/collections/tu-giay-tu-trang-tri" target="_blank">Tủ gi&agrave;y</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/tu-dau-giuong" target="_blank">Tủ đầu giường</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/tu-quan-ao" target="_blank">Tủ quần &aacute;o</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/ban-lam-viec" target="_blank">B&agrave;n l&agrave;m việc</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/tu-ke-tivi" target="_blank">Tủ đa ngăn</a></strong></li>
          </ul>
          <p><a href="https://moho.com.vn/collections/clearance" target="_blank"><img src="https://file.hstatic.net/200000065946/file/noi-that-moho-hang-au-chuan-viet_f88fe778fae54b619d0400279b2bccf2.jpg" alt="Khuyến m&atilde;i nội thất chuẩn &acirc;u" /></a></p>
          <p align="center">Khuyến m&atilde;i nội thất phong c&aacute;ch ch&acirc;u &Acirc;u</p>
          <p>Đặc biệt đối với những kh&aacute;ch h&agrave;ng đang c&oacute; nhu cầu mua sắm tủ gi&agrave;y trang tr&iacute; cho ph&ograve;ng kh&aacute;ch gia đ&igrave;nh m&igrave;nh, đ&acirc;y ch&iacute;nh l&agrave; dịp ph&ugrave; hợp để bạn mua sắm. Với 06 mẫu tủ gi&agrave;y kh&aacute;c nhau về k&iacute;ch thước lẫn m&agrave;u sắc ph&ugrave; hợp cho từng nhu cầu lưu trữ kh&aacute;c nhau. Từ những chiếc tủ gi&agrave;y nhỏ th&iacute;ch hợp cho người độc th&acirc;n, cho đến những mẫu tủ lớn c&oacute; sức chứa l&ecirc;n đến 20 đ&ocirc;i gi&agrave;y d&eacute;p kh&aacute;c nhau cho cả gia đ&igrave;nh.</p>
          <p>Xem ngay danh s&aacute;ch sản phẩm khuyến m&atilde;i&nbsp;<a href="https://moho.com.vn/collections/clearance" target="_blank"><strong>Nội thất chuẩn &Acirc;u &ndash; gi&aacute; Việt</strong></a>&nbsp;nh&eacute;.</p>
          <h2><strong>2/ Chương tr&igrave;nh &ldquo;Thanh l&yacute; sản phẩm trưng b&agrave;y &ndash; Thay layout mới cửa h&agrave;ng&rdquo;</strong></h2>
          <p>Nhằm kho&aacute;c l&ecirc;n m&igrave;nh một chiếc &aacute;o mới cho cho cửa h&agrave;ng của MOHO tại quận 12 v&agrave; quận 9, ch&uacute;ng t&ocirc;i gửi đến bạn chương tr&igrave;nh giảm gi&aacute; h&agrave;ng trưng b&agrave;y tại showroom.</p>
          <p><strong>Thời gian</strong>: 13/03 &ndash; 19/03/2023</p>
          <p><strong>Số lượng sản phẩm</strong>: 34 mẫu&nbsp;<strong><a href="https://moho.com.vn/" target="_blank">nội thất</a></strong></p>
          <p><strong>Chiết khấu</strong>&nbsp;l&ecirc;n đến 60%</p>
          <p><strong>D&ograve;ng sản phẩm</strong>:</p>
          <ul>
          <li><strong><a href="https://moho.com.vn/collections/ghe-sofa" target="_blank">Ghế sofa</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/ban-sofa-ban-cafe-ban-tra" target="_blank">B&agrave;n tr&agrave; sofa</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/ban-an" target="_blank">B&agrave;n ăn</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/ghe-an" target="_blank">Ghế ăn</a></strong></li>
          <li><strong><a href="https://moho.com.vn/collections/tu-quan-ao" target="_blank">Tủ quần &aacute;o</a></strong></li>
          </ul>
          <p><img src="https://file.hstatic.net/200000065946/file/thanh-ly-noi-that-tai-showroom_f493da0e87484d93858e1127376d0c52.jpg" alt="Thanh l&yacute; nội thất tại showroom MOHO" /></p>
          <p align="center"><em>Giảm gi&aacute; l&ecirc;n đến 60% cho 34 sản phẩm kh&aacute;c nhau</em></p>
          <p>Đến ngay cửa h&agrave;ng showroom nội thất của MOHO để chọn mua ngay m&oacute;n đồ ph&ugrave; hợp cho tổ ấm của bạn nh&eacute;.</p>
          <ul>
          <li>Showroom: 162 HT17, P. Hiệp Th&agrave;nh, Q. 12, TP. HCM. Google Maps:&nbsp;<a href="https://g.page/noithatmoho?share" target="_blank">https://g.page/noithatmoho?share</a></li>
          <li>Experience Store 1: S05.03-S18 ph&acirc;n khu The Rainbow | Vinhomes Grand Park, TP. Thủ Đức. Google Maps:&nbsp;<a href="https://g.page/r/CUdL_0NpVPv_EBA" target="_blank">https://g.page/r/CUdL_0NpVPv_EBA</a></li>
          </ul>
          <p>Lưu &yacute;: Kh&ocirc;ng được &aacute;p dụng c&aacute;c ch&iacute;nh s&aacute;ch khuyến m&atilde;i, bảo h&agrave;nh, bảo tr&igrave;.</p>
          <p>Được giao h&agrave;ng lắp đặt miễn ph&iacute;. Miễn ph&iacute; đổi trả.</p>
          <p>B&ecirc;n cạnh đ&oacute;, khi kh&aacute;ch h&agrave;ng đến mua sắm tại showroom nội thất của MOHO c&oacute; thực hiện check-in tr&ecirc;n mạng x&atilde; hội sẽ nhận được một phần qu&agrave; l&agrave; chiếc mũ bảo hiểm chất lượng.</p>
          <p><img src="https://file.hstatic.net/200000065946/file/mu-bao-hiem-noi-that-moho_1dba30731135495a9145713fd0b9a896_grande.jpg" alt="Mũ bảo hiểm nội thất MOHO" /></p>
          <p align="center"><em>Qu&agrave; tặng mũ bảo hiểm khi mua h&agrave;ng v&agrave; check-in tr&ecirc;n mạng x&atilde; hội</em></p>
          <p>Qu&yacute; kh&aacute;ch h&agrave;ng h&atilde;y nhanh tay đặt h&agrave;ng để sở hữu c&aacute;c sản phẩm nội thất ưng &yacute; với mức gi&aacute; ưu đ&atilde;i chỉ c&oacute; trong thời gian giới hạn n&agrave;y.</p>
          <p>Xem th&ecirc;m:</p>
          <ul>
          <li><strong><a title="Nội Thất MOHO tham gia triển l&atilde;m đồ gỗ VIFA EXPO 2023" href="https://moho.com.vn/blogs/media/noi-that-moho-tham-gia-trien-lam-do-go-vifa-expo-2023">Nội Thất MOHO tham gia triển l&atilde;m đồ gỗ VIFA EXPO 2023</a></strong></li>
          <li><strong><a title="MOHO is Turning 3 - H&agrave;nh Tr&igrave;nh 3 Năm Kh&ocirc;ng Ngừng Nỗ Lực" href="https://moho.com.vn/blogs/news/moho-is-turning-3-hanh-trinh-3-nam-khong-ngung-no-luc">MOHO is Turning 3 - H&agrave;nh Tr&igrave;nh 3 Năm Kh&ocirc;ng Ngừng Nỗ Lực</a></strong></li>
          <li><strong><a href="https://moho.com.vn/blogs/media/moho-tham-du-hoi-cho-xuat-khau-do-go-noi-that-tphcm-hawa-expo-2023" target="_blank">MOHO Tham Dự Hội Chợ Xuất Khẩu Đồ gỗ &amp; Nội thất TPHCM &ndash; HAWA Expo 2023</a></strong></li>
          <li><strong><a title="Tổng quan ng&agrave;nh gỗ v&agrave; thị trường đồ nội thất 2022. Dự b&aacute;o 2023." href="https://moho.com.vn/blogs/news/tong-quan-thi-truong-go-va-noi-that-2022-du-bao-trien-vong-2023" target="_blank">Tổng quan ng&agrave;nh gỗ v&agrave; thị trường đồ nội thất 2022. Dự b&aacute;o 2023.</a></strong></li>
          </ul>
          <p>-------</p>
          <p><strong>Gi&aacute; trị vượt trội:</strong></p>
          <p>✔&nbsp;Th&acirc;n thiện m&ocirc;i trường: Đạt chứng nhận bảo vệ v&agrave; ph&aacute;t triển Rừng &ndash; FSC</p>
          <p>✔&nbsp;An to&agrave;n sức khỏe: Đạt chứng nhận giảm ph&aacute;t thải Formaldehyde &ndash; CARB P2</p>
          <p>✔&nbsp;Chất lượng quốc tế: D&acirc;y chuyền sản xuất hiện đại với đội ngũ thợ tay nghề cao</p>
          <p>-------</p>
          <p><strong>Dịch vụ chuy&ecirc;n nghiệp:</strong></p>
          <p>✔&nbsp;Freeship TP. HCM, H&agrave; Nội, Bi&ecirc;n H&ograve;a v&agrave; một số khu vực tại B&igrave;nh Dương</p>
          <p>✔&nbsp;Miễn ph&iacute; 1 đổi 1 - Bảo h&agrave;nh 2 năm - Bảo tr&igrave; trọn đời</p>
          <p>-------</p>
          <p><strong>MOHO - Modern Life &amp; Home</strong></p>
          <p>&bull; Website:&nbsp;<a href="https://moho.com.vn/" target="_blank">https://moho.com.vn/</a></p>
          <p>&bull; Email: cskh@moho.com.vn</p>
          <p>&bull; Hotline: 097 114 1140</p>
          <p>&bull; Showroom: 162 HT17, P. Hiệp Th&agrave;nh, Q. 12, TP. HCM</p>
          <p>&bull; Experience Store: S05.03-S18 ph&acirc;n khu The Rainbow | Vinhomes Grand Park, TP. Thủ Đức</p>
          <p>&bull; Experience Store 2: S3.03-Sh15 ph&acirc;n khu Sapphire | Vinhomes Smart City, H&agrave; Nội</p>`,
  },
  {
    id: "2",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn B",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_1_hiuung.jpg",
    blogCategories: {
      title: "Mẹo trang trí",
      slug: "decor-tips",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "3",
    title: "Cách chọn nội thất phù hợp cho không gian sống của baise",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn C",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_3_ml8nhf.jpg",
    blogCategories: {
      title: "Xu hướng nội thất",
      slug: "interior-trends",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "4",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn D",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_4_rtjl6c.jpg",
    blogCategories: {
      title: "Câu truyện khách hàng",
      slug: "customer-stories",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
 {
    id: "5",
    title: "Cách chọn nội thất phù hợp cho không gian sống của bạn",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chăm chỉ. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn A",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_2_ufdbue.jpg",
    blogCategories: {
      title: "Tin tức",
      slug: "news",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "6",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn B",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_1_hiuung.jpg",
    blogCategories: {
      title: "Mẹo trang trí",
      slug: "decor-tips",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "7",
    title: "Cách chọn nội thất phù hợp cho không gian sống của baise",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn C",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_3_ml8nhf.jpg",
    blogCategories: {
      title: "Xu hướng nội thất",
      slug: "interior-trends",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "8",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn D",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_4_rtjl6c.jpg",
    blogCategories: {
      title: "Câu truyện khách hàng",
      slug: "customer-stories",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "9",
    title: "Cách chọn nội thất phù hợp cho không gian sống của bạn",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chăm chỉ. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn A",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_2_ufdbue.jpg",
    blogCategories: {
      title: "Tin tức",
      slug: "news",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "10",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn B",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_1_hiuung.jpg",
    blogCategories: {
      title: "Mẹo trang trí",
      slug: "decor-tips",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "11",
    title: "Cách chọn nội thất phù hợp cho không gian sống của baise",
    slug: "chon-noi-that-phu-hop",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn C",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_3_ml8nhf.jpg",
    blogCategories: {
      title: "Xu hướng nội thất",
      slug: "interior-trends",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
  {
    id: "12",
    title: "Xu hướng nội thất hiện đại năm 2024",
    slug: "xu-huong-noi-that-2024",
    description: "Thành công cần làm việc chamedi. Don Tiết lắng nghe những điều này có được những kế hoạch nhanh chóng.",
    author: "Nguyễn Văn D",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751814428/indeco/blog_4_rtjl6c.jpg",
    blogCategories: {
      title: "Câu truyện khách hàng",
      slug: "customer-stories",
    },
    publishedAt: "2024-08-01",
    latestBlog: true,
    tags: [],
    body: "updating",
  },
]

export const blogCategories = [
  {
    id: "bc1",
    title: "Tin tức",
    slug: "news",
  },
  {
    id: "bc2",
    title: "Mẹo trang trí",
    slug: "decor-tips",
  },
  {
    id: "bc3",
    title: "Xu hướng nội thất",
    slug: "interior-trends",
  },
  {
    id: "bc4",
    title: "Câu truyện khách hàng",
    slug: "customer-stories",
  },
]

export const feedbackData = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    address: "Hanoi, Vietnam",
    message: "Dịch vụ kiến trúc augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.",
    avatar: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751919873/indeco/1_uf43pd.jpg",
  },
  {
    id: "2",
    name: "Nguyễn Văn A",
    address: "Hanoi, Vietnam",
    message: "Dịch vụ kiến trúc augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.",
    avatar: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751919873/indeco/1_uf43pd.jpg",
  }
]

export const galleryData = [
  {
    id: "1",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927903/indeco/Image-2_2x_nr45tj.jpg",
  },
  {
    id: "2",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927876/indeco/Image-1_2x-1_z4pg4k.jpg",
  },
  {
    id: "3",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927860/indeco/Image_2x-1_u7w83k.jpg",
  },
  {
    id: "4",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927903/indeco/Image-2_2x_nr45tj.jpg",
  },
  {
    id: "5",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927876/indeco/Image-1_2x-1_z4pg4k.jpg",
  },
  {
    id: "6",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927860/indeco/Image_2x-1_u7w83k.jpg",
  },
  {
    id: "7",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927903/indeco/Image-2_2x_nr45tj.jpg",
  },
  {
    id: "8",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927876/indeco/Image-1_2x-1_z4pg4k.jpg",
  },
  {
    id: "9",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927860/indeco/Image_2x-1_u7w83k.jpg",
  },
  {
    id: "10",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927903/indeco/Image-2_2x_nr45tj.jpg",
  },
  {
    id: "11",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927876/indeco/Image-1_2x-1_z4pg4k.jpg",
  },
  {
    id: "12",
    image: "https://res.cloudinary.com/dn1tmr9ya/image/upload/v1751927860/indeco/Image_2x-1_u7w83k.jpg",
  }
  
]

export const colorOptions: { color: string; code: string }[] = [
  { color: "Trắng sữa", code: "bg-gray-100" },
  { color: "Be nhạt", code: "bg-stone-200" },
  { color: "Xám trung tính", code: "bg-gray-400" },
  { color: "Đen mềm", code: "bg-neutral-900" },
  { color: "Nâu gỗ nhạt", code: "bg-amber-300" },
  { color: "Gỗ óc chó", code: "bg-amber-700" },
  { color: "Nâu đất", code: "bg-amber-900" },
  { color: "Kem đất", code: "bg-stone-100" },
  { color: "Xanh biển nhạt", code: "bg-emerald-200" },
  { color: "Xanh đá", code: "bg-cyan-400" },
  { color: "Xanh rêu xám", code: "bg-teal-500" },
  { color: "Xanh navy", code: "bg-blue-900" },
  { color: "Rượu vang", code: "bg-rose-900" },
  { color: "Vàng đồng", code: "bg-yellow-600" },
  { color: "Trắng kem", code: "bg-neutral-50" },
  { color: "Hồng phấn", code: "bg-pink-100" },
];

export const materialOptions: { material: string; code: string }[] = [
  { material: "Gỗ sồi", code: "wood-oak" },
  { material: "Gỗ óc chó", code: "wood-walnut" },
  { material: "Gỗ mun", code: "wood-ebony" },
  { material: "Gỗ thông", code: "wood-pine" },
  { material: "Gỗ công nghiệp", code: "wood-industrial" },
  { material: "Gỗ veneer", code: "wood-veneer" },
  { material: "Kim loại sơn tĩnh điện", code: "metal-paint" },
  { material: "Kim loại mạ đồng", code: "metal-gold" },
  { material: "Nhựa composite", code: "plastic-composite" },
  { material: "Nhựa acrylic", code: "plastic-acrylic" },
  { material: "Vải nỉ", code: "fabric-felt" },
  { material: "Vải linen", code: "fabric-linen" },
  { material: "Vải bố", code: "fabric-canvas" },
  { material: "Vải cotton", code: "fabric-cotton" },
  { material: "Vải nhung", code: "fabric-velvet" },
  { material: "Da PU", code: "leather-pu" },
  { material: "Da thật", code: "leather-real" },
  { material: "Kính cường lực", code: "glass-tempered" },
  { material: "Đá tự nhiên", code: "stone-natural" },
  { material: "Đá nhân tạo", code: "stone-artificial" },
];

export const sizeOptions: { size: string; code: string }[] = [
  { size: "Nhỏ", code: "S" },
  { size: "Vừa", code: "M" },
  { size: "Lớn", code: "L" },
  { size: "Tùy chỉnh", code: "custom" },
];

export const priceOptions: { title: string; value: string }[] = [
  { title: "Dưới 1 Triệu", value: "0-1000000" },
  { title: "1 Triệu - 3 Triệu", value: "1000000-3000000" },
  { title: "3 Triệu - 6 Triệu", value: "3000000-6000000" },
  { title: "6 Triệu - 9 Triệu", value: "6000000-9000000" },
  { title: "Trên 9 Triệu", value: "9000000-100000000" },
];

export const dataAddress: {id: string, receiverName: string, addressLine: string, ward: string, district: string, city: string, isDefault: boolean }[] = [
  {
    id: "1",
    receiverName: "Nguyen Van A",
    addressLine: "So 1, Nguyen Van Linh, Dong Da, Ha Noi",
    ward: "Phuong Dong Da",
    district: "Quan Dong Da",
    city: "Ha Noi",
    isDefault: true
  },
  {
    id: "2",
    receiverName: "Nguyen Van B",
    addressLine: "So 2, Nguyen Van Linh, Dong Da, Ha Noi",
    ward: "Phuong Dong Da",
    district: "Quan Dong Da",
    city: "Ha Noi",
    isDefault: false
  },
  {
    id: "3",
    receiverName: "Nguyen Van C",
    addressLine: "So 3, Nguyen Van Linh, Dong Da, Ha Noi",
    ward: "Phuong Dong Da",
    district: "Quan Dong Da",
    city: "Ha Noi",
    isDefault: false
  }
]