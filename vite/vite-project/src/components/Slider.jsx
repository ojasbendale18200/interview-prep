import { useEffect, useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
    "https://imgupscaler.com/images/samples/midjourney-before.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return      <img src={images[index]} alt=""  width={"100%"} />;
};

export default Slider;
