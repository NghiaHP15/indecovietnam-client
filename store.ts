import { CartItem, FavoriteItem, OrderItem, Product, ProductVariant } from "@/constants/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
    items: CartItem[];
    addItem: (product: Product, variant: ProductVariant) => void;
    removeItem: (variantId: string) => void;
    deleteCartProduct: (variantId: string) => void;
    resetCart: () => void;
    getTotalPrice: () => number;
    getSubTotalPrice: () => number;
    getItemCount: (variantId: string) => number;
    getGroupedItems: () => CartItem[];
    //favorite
    favoriteProduct: FavoriteItem[];
    addToFavorite: (product: Product, variant: ProductVariant) => Promise<void>;
    removeFromFavorite: (variantId: string) => void;
    resetFavorite: () => void;
    //order
    toOrderItems: () => OrderItem[];
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      favoriteProduct: [],
       addItem: (product, variant) =>
        set((state) => {
          const existing = state.items.find(
            (item) => item.variant.id === variant.id
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.variant.id === variant.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { product, variant, quantity: 1 }],
            };
          }
        }),
      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.variant.id === variantId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),
      deleteCartProduct: (variantId) =>
        set((state) => ({
          items: state.items.filter(
            ({ variant }) => variant.id !== variantId
          ),
        })),
      resetCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.variant.price ?? 0) * item.quantity,
          0
        );
      },
      getSubTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = Number(item.variant.price ?? 0);
          const discount = (Number(item.variant.discount ?? 0) * price) / 100;
          const discountedPrice = price + discount;
          return total + (discountedPrice * item.quantity);
        }, 0);
      },
      getItemCount: (variantId) => {
        const item = get().items.find((item) => item.variant.id === variantId);
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,
      addToFavorite: (product, variant) => {
        return new Promise<void>((resolve) => {
          set((state: StoreState) => {
            const isFavorite = state.favoriteProduct.some(
              (item) => item.variant.id === variant.id
            );
            return {
              favoriteProduct: isFavorite
                ? state.favoriteProduct.filter(
                    (item) => item.variant.id !== variant.id
                  )
                : [...state.favoriteProduct, { product,variant }],
            };
          });
          resolve();
        });
      },
      removeFromFavorite: (variantId: string) => {
        set((state: StoreState) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (item) => item?.variant?.id !== variantId
          ),
        }));
      },
      resetFavorite: () => {
        set({ favoriteProduct: [] });
      },
      toOrderItems: () => {
        return get().items.map((item) => ({
          product_id: item.product.id,
          product_name: item.product.name,
          variant_id: item.variant.id,
          sku: item.variant.sku,
          image: item.variant.image || item.product.image,
          color: item.variant.color,
          size: item.variant.size,
          quantity: item.quantity,
          unit_price: item.variant.price,
          discount: item.variant.discount,
          total_price:
            (item.variant.price -
              (item.variant.price * item.variant.discount) / 100) *
            item.quantity,
        }));
      },
    }),
    {
      name: "cart-store",
    }
  )
);

export default useStore;
