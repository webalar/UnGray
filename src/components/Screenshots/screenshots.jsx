import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax]);

const Screenshots = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <section className="secreen-shots section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Apps Screenshot
                <span className="right"></span>
              </h6>
              <h2>Gain unparalleled consumer insights, Elevate your brand reputation to new heights with UnGray.
</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container">
              {load ? (
                <Swiper
                  speed={1000}
                  spaceBetween={20}
                  loop={true}
                  slidesPerView={2}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 01.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 02.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 03.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 04.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 05.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 06.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 07.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 07.jpg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 09.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="img">
                        <img src="/img/mobile-app/screenshots/Mockup 10.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                ""
              )}
              <div className="swiper-pagination" ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
