import { Carousel as TYCarousel } from "@trendyol-js/react-carousel";
import { ReactElement } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export interface CarouselProps {
  children: ReactElement[];
  show?: number;
  slide?: number;
  transition?: number;
}

export const Carousel = ({
  children,
  show = 3,
  slide = 3,
  transition = 1,
}: CarouselProps) => (
  <TYCarousel
    rightArrow={
      <FaArrowCircleRight
        size={34}
        className='cursor-pointer absolute -right-2'
      />
    }
    leftArrow={
      <FaArrowCircleLeft
        size={34}
        className='cursor-pointer absolute z-10 -left-2'
      />
    }
    className='items-center'
    show={show}
    slide={slide}
    transition={transition}
    swiping
  >
    {children}
  </TYCarousel>
);
