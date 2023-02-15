import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

import {
  SectionGallery,
  GalleryContainer,
  GalleryImg,
  SectionTitle,
} from './Gallery.styled';

const imagesArray = [
  {
    id: 1,
    img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
    alt: 'xxx',
  },
  {
    id: 2,
    img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
    alt: 'xxx',
  },
  {
    id: 3,
    img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
    alt: 'xxx',
  },
];

const Gallery = () => {
  return (
    <SectionGallery>
      <SectionTitle>Галерея</SectionTitle>
      <GalleryContainer>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop
        >
          {imagesArray.map(({ img, id, alt }) => (
            <SwiperSlide
              style={{ display: 'flex', justifyContent: 'center' }}
              key={id}
            >
              <GalleryImg src={img} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </GalleryContainer>
    </SectionGallery>
  );
};

export default Gallery;
