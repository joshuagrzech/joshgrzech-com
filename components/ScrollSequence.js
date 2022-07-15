/* eslint-disable react/display-name */
import React, {
  forwardRef,
  useEffect,
  useState,
} from 'react';

export const ImageSequence = forwardRef(({progress, images}, ref) => {
  const newImages = ImageArray(images);

  let index = newImages.length > 0 ? Math.round(progress * 1 * (newImages.length - 1)) : 0
  return newImages && newImages.map((item, i) => (
    <span
      ref={ref}
      key={i}
      style={{
        display: i !== index ? "none" : "block",
        height: "100%",
        width: "100%",
        backgroundImage: `url('${item.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  ));
});

const ImageArray = images => {
  //call useImage on each image in the sequence Array
  const imageArray = useImages(images)

  
  return imageArray;
};



const useImages = (urls, crossOrigin) => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    if (!urls) return;
    const newImages = urls.map(url => {
    const img = document.createElement("img");
    crossOrigin && (img.crossOrigin = crossOrigin);
    img.addEventListener("load", () => {
        setImages(images => [...images, img]);
        }
        );
    img.src = url;
})

  }, [urls, crossOrigin]);

  return images;
};



