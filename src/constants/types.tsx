import { OrderStatus, PaymentMethod, ProductStatus } from "./enum";

export interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

export interface ProductVariant {
  id: string;
  sku: string;
  image: string; 
  color: string;
  size: string;
  show: boolean;
  material: string;
  price: number;
  discount: number;
  is_active: boolean; 
  inventoryitems: number;
}

export interface SubCategoryProduct {
  title: string;
  slug: string;
}

export interface CategoryProduct {
  title: string;
  slug: string;
  subCategory: SubCategoryProduct;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string | null; 
  description: string;
  status: ProductStatus 
  featured: boolean; 
  body: string;
  variants: ProductVariant[];
  category: CategoryProduct;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface FavoriteItem {
  product: Product;
  variant: ProductVariant;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  variant_id: string;
  sku: string;
  image: string | null;
  color: string;
  size: string;
  quantity: number;
  unit_price: number;
  discount: number;
  total_price: number;
}

export interface Order {
  customer_id: string;
  order_date: string;
  status: OrderStatus;
  shipping_address: string;
  payment_method: PaymentMethod;
  items: OrderItem[];
  total_amount: number;
  note?: string;
}

export interface CategoryBlog {
  title: string;
  slug: string;
}

export interface Blog {
  id: string,
  title: string,
  slug: string,
  description: string,
  author: string,
  image: string | null,
  blogCategories: CategoryBlog,
  publishedAt: string,
  latestBlog: boolean,
  tags: string[],
  body: string | null,
}

export interface FeebBack {
  id: string,
  name: string,
  email?: string,
  phone?: string,
  address: string,
  message: string,
  avatar: string | null,
}

export interface Address {
  id: string,
  receiverName: string,
  addressLine: string,
  ward: string,
  district: string,
  city: string,
  isDefault: boolean
}