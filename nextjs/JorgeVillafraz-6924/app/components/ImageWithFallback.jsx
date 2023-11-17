import Image from "next/image";
import { useState } from "react";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt="dog"
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;
