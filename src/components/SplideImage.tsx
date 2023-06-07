import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

const SplideImage = ({ images, title }: Props) => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true, // 自動再生を有効
        interval: 3000, // 自動再生の間隔を3秒に設定
      }}
    >
      {images.map((image, index) => (
        <SplideSlide
          key={index}
          className="aspect-w-16 aspect-h-9 bg-white opacity-80"
        >
          <Image src={image} alt={title} fill className="object-contain" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideImage;
