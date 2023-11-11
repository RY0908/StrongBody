import { useEffect, useRef, useState } from "react";

function Services() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("img").forEach((el) => {
        el.classList.remove("opacity-0");
        el.classList.remove("translate-x-m60");
      });
    } else {
      ref.current.querySelectorAll("img").forEach((el) => {
        el.classList.add("opacity-0");
        el.classList.add("translate-x-m60");
      });
    }
  }, [isIntersecting]);

  const [isIntersecting2, setIsIntersecting2] = useState(false);

  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting2(entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    );
    observer.observe(ref2.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting2) {
      ref2.current.querySelectorAll("img").forEach((el) => {
        el.classList.remove("opacity-0");
        el.classList.remove("translate-x-60");
      });
    } else {
      ref2.current.querySelectorAll("img").forEach((el) => {
        el.classList.add("opacity-0");
        el.classList.add("translate-x-60");
      });
    }
  }, [isIntersecting2]);

  return (
    <div className="bg-gradient-to-t from-main-color to-black py-10 px-8 flex justify-center items-center gap-5 lg:gap-16 overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 grid-rows-4 ">
        <img
          className="aspect-auto w-[15em] transition-all duration-1500"
          src="https://res.cloudinary.com/dwucsx9ot/image/upload/v1699641991/Strongbody/cvbuqzvza1ppzroztop5.jpg"
          alt=""
        />
        <h1 className="row-start-2 flex justify-end items-center text-secondary-color text-6xl font-bebas">
          PAIN
        </h1>
        <img
          className="aspect-auto w-[15em] row-start-3 transition-all duration-1500"
          src="https://res.cloudinary.com/dwucsx9ot/image/upload/v1699641987/Strongbody/sncle5wvh0nmiph6jchq.jpg"
          alt=""
        />
        <h1 className="row-start-4 flex justify-end items-center text-secondary-color text-6xl font-bebas">
          GAIN
        </h1>
      </div>
      <span className="h-[55em] max-sm:h-[40em] border-2 border-secondary-color"></span>
      <div ref={ref2} className="grid grid-cols-1 grid-rows-4 ">
        <h1 className="flex justify-start items-center text-secondary-color text-6xl font-bebas">
          NO
        </h1>
        <img
          className="aspect-auto w-[15em] row-start-2 transition-all duration-1500"
          src="https://res.cloudinary.com/dwucsx9ot/image/upload/v1699641986/Strongbody/a5rnx5j3ln6z6465iuob.jpg"
          alt=""
        />
        <h1 className="row-start-3 flex justify-start items-center text-secondary-color text-6xl font-bebas">
          NO
        </h1>
        <img
          className="aspect-auto w-[15em] row-start-4 transition-all duration-1500"
          src="https://res.cloudinary.com/dwucsx9ot/image/upload/v1699641983/Strongbody/q9mpxapadv2yva2pts9l.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Services;
