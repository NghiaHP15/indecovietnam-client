import Link from "next/link";

interface ItemProps {
  href: string;
  title: string;
  image: string;
  className?: string;
}

const CardItem = ({ item, className = "" }: { item: ItemProps; className?: string }) => {
  return (
    <Link href={item.href} className="block">
      <div className={`${className} overflow-hidden relative group`}>
        <div 
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={`h-full w-full transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-black/40 to-transparent z-10 flex justify-center items-end p-5">
          <span className="text-lg text-white uppercase font-bold line-clamp-2 tracking-tighter">
            {item.title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;