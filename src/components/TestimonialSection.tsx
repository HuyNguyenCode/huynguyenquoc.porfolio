"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <section className="testimonial grid wide" id="testimonial">
      <h1 className="testimonial-heading">
        Valueable <span>Testimonial</span>
      </h1>
      <div className="testimonial-wrapper">
        <div className="testimonial-box mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/fpt-is-logo.png"
                  alt="Jackson Levi"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">
                  ERP Consultant & Mentor, FPT IS
                </h1>
                <p className="testimonial-card_text" style={{ color: "black" }}>
                  "During his internship at FPT IS, Huy stood out for his quick
                  grasp of ERP workflows and his ability to analyze business
                  requirements effectively. He took initiative in communicating
                  with both users and consultants, and was trusted to support
                  part of the SAP S/4HANA implementation. His analytical
                  thinking, structured approach, and eagerness to learn made him
                  one of the most promising interns I’ve worked with. He has
                  great potential as a future Business Analyst or Product
                  Manager."
                </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/fpt-is-logo.png"
                  alt="Jackson Levi"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">Personal Mentor</h1>
                <p className="testimonial-card_text">
                  "Huy is not the kind of person who waits to be told what to do
                  — he takes initiative, asks the right questions, and actively
                  seeks feedback. He balances technical learning with a strong
                  interest in business, especially product strategy and
                  user-centric thinking. What I appreciate most is his attitude:
                  humble, disciplined, and always willing to go beyond what's
                  expected. A rare mix of thinker and doer."
                </p>
              </div>
            </SwiperSlide> */}
            {/*
            <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/testimonail_img1.png"
                  alt="Jackson Levi"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">Personal Mentor</h1>
                <p className="testimonial-card_text">
                  
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/startupwheel-logo.png"
                  alt="Julian Grayson"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">
                  Startup Wheel 2021 Judge
                </h1>
                <p className="testimonial-card_text">
                  "The mentorship platform idea presented by Huy in Startup
                  Wheel 2021 was one of the most practical and well-positioned
                  concepts in the competition. He understood user pain points
                  deeply and translated them into a clear product vision.
                  Despite his young age, he showcased strategic thinking and
                  user empathy — qualities that are essential for any aspiring
                  product leader. I believe with the right guidance, Huy can
                  grow into a strong Product Manager."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/testimonail_img1.png"
                  alt="Julian Grayson"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">
                  {" "}
                  Project Teammate, Social Network Project
                </h1>
                <p className="testimonial-card_text">
                  "I had the chance to work with Huy on multiple school and side
                  projects, and he was always the person we could rely on. He
                  listens carefully, communicates clearly, and works with a calm
                  and solution-oriented mindset. Even under tight deadlines, he
                  stays focused and brings stability to the team. He’s not only
                  skilled technically but also great at bridging people together
                  to achieve a shared goal."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <Image
                  className="testimonial-card_img"
                  src="/assets/img/testimonail_img1.png"
                  alt="Julian Grayson"
                  width={100}
                  height={100}
                />
                <h1 className="testimonial-card_heading">
                  {" "}
                  Project Teammate, Social Network Project
                </h1>
                <p className="testimonial-card_text">
                  "I had the chance to work with Huy on multiple school and side
                  projects, and he was always the person we could rely on. He
                  listens carefully, communicates clearly, and works with a calm
                  and solution-oriented mindset. Even under tight deadlines, he
                  stays focused and brings stability to the team. He’s not only
                  skilled technically but also great at bridging people together
                  to achieve a shared goal."
                </p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
