"use client"
import styles from '@/styles/ProjectSection.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Projects = () => {
  return (
    <div className={styles.projectdiv}>
      <h1>My Projects</h1>

      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"



        >
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>My Portfolio</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>World Atlas</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Manya Closet</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Chromatic Swap</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 5</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 6</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 7</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 8</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <h1>Project 9</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects