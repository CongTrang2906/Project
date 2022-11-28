import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: "Iron Man",
    review:
      "Thank you very much for letting us know the problem you are having. We are truly sorry for what you have faced these past few days. After the investigation, the company discovered some problems in the production process and we really regret that. We have an offer that our business wants to exchange the product for you and not charge for shipping. We hope you will accept this offer and continue to support the business.",
  },
  {
    avatar: AVT2,
    name: "Spider Man",
    review:
      "Thank you very much for letting us know the problem you are having. We are truly sorry for what you have faced these past few days. After the investigation, the company discovered some problems in the production process and we really regret that. We have an offer that our business wants to exchange the product for you and not charge for shipping. We hope you will accept this offer and continue to support the business.",
  },
  {
    avatar: AVT3,
    name: "Captain",
    review:
      "Thank you very much for letting us know the problem you are having. We are truly sorry for what you have faced these past few days. After the investigation, the company discovered some problems in the production process and we really regret that. We have an offer that our business wants to exchange the product for you and not charge for shipping. We hope you will accept this offer and continue to support the business.",
  },
  {
    avatar: AVT4,
    name: "Captain America",
    review:
      "Thank you very much for letting us know the problem you are having. We are truly sorry for what you have faced these past few days. After the investigation, the company discovered some problems in the production process and we really regret that. We have an offer that our business wants to exchange the product for you and not charge for shipping. We hope you will accept this offer and continue to support the business.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
