import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { CardComp } from "./CardComp";

import Skymagz from "../assets/thumb/skymagzthumb.png"
import platzi from "../assets/thumb/platzithumb.png"
import dictionary from "../assets/thumb/skydicthumb.png"
import tixid from "../assets/thumb/tixidthumb.png"
import seni from "../assets/thumb/senithumb.png"

import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export default function CardThreeD() {
  const card = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Belajar React dan Tailwind",
      image: Skymagz,
    },

    {
      id: 2,
      title: "UI Designer",
      desc: "Suka bikin design aesthetic",
      image: platzi,
    },

    {
      id: 3,
      title: "Creative Builder",
      desc: "Explore coding dan design",
      image: dictionary,
    },
    {
      id: 4,
      title: "Creative Builder",
      desc: "Explore coding dan design",
      image: tixid,
    },
    {
      id: 5,
      title: "Creative Builder",
      desc: "Explore coding dan design",
      image: seni,
    },
  ];
  return (
    <>
      <style>{`
        .card3d-container {
          max-width: 120rem;
          padding: 1rem;
          margin: -5rem;
        }

        .card3d-heading {
          padding: 1rem 0;
          font-size: 3.5rem;
          text-align: center;
          color: white;
          font-weight: bold;
        }

        .card3d-swiper {
          height: 40rem;
          padding: 0;
          position: relative;
        }

        .card3d-swiper .swiper-slide {
          width: 37rem;
          height: 42rem;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card3d-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          object-fit: cover;
        }

        .card3d-swiper .swiper-slide-shadow-left,
        .card3d-swiper .swiper-slide-shadow-right {
          display: none;
        }

        .card3d-controller {
          position: relative;
          bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .card3d-controller .swiper-button-next,
        .card3d-controller .swiper-button-prev {
          position: relative;
          left: auto !important;
          right: auto !important;
          top: auto !important;
          transform: none !important;
          margin: 0 !important;
        }

        .card3d-arrow {
          background: white;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: black;
          font-size: 2rem;
          transition: 0.3s ease;
          box-shadow: 0 8px 24px rgba(18, 28, 53, 0.2);
        }

        .card3d-arrow:hover {
          transform: scale(1.1);
          background: #e5e5e5;
        }

        .card3d-pagination {
          position: relative !important;
          width: fit-content !important;
          bottom: auto !important;
        }

        .card3d-pagination .swiper-pagination-bullet {
          background: #777;
          opacity: 1;
        }

        .card3d-pagination .swiper-pagination-bullet-active {
          background: #6a59ff;
        }

        @media (max-width: 768px) {
          .card3d-swiper {
            height: 45rem;
          }

          .card3d-swiper .swiper-slide {
            width: 28rem !important;
            height: 36rem !important;
          }
        }

        @media (max-width: 500px) {
          .card3d-heading {
            font-size: 2.5rem;
          }

          .card3d-swiper {
            height: 40rem;
          }

          .card3d-swiper .swiper-slide {
            width: 24rem !important;
            height: 32rem !important;
          }

          .card3d-controller {
            gap: 1rem;
          }

          .card3d-arrow {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="card3d-container">

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: ".card3d-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".card3d-prev",
            nextEl: ".card3d-next",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="card3d-swiper"
        >
          {card.map((item) => (
            <SwiperSlide className="" key={item.id}>
              <CardComp item={item} 
                className="group max-w-[30rem] bg-[#090909] bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
                imageClassName="h-60 object-cover rounded-sm transition-all duration-300 group-hover:scale-102"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="card3d-controller pt-3">
          <div className="card3d-prev card3d-arrow">
            <TbPlayerTrackPrevFilled className="p-1"/>
          </div>

          <div className="card3d-pagination"></div>

          <div className="card3d-next card3d-arrow">
            <TbPlayerTrackNextFilled className="p-1"/>

          </div>
        </div>
      </div>
    </>
  );
}
