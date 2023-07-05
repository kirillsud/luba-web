import { useState } from 'react';
import styles from './project-page.module.css';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

/* eslint-disable-next-line */
export interface ProjectPageProps {
  galleryImages: { img: string; id: number }[];
}
// !!!! как можно  диструктур ровать пропсы здесь?? ts выдает  ошибку
export function ProjectPage(props: ProjectPageProps) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(props.galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === props.galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (




    <div className={styles.project_page}>
      {openModal && 
        <div className={styles.slider_wrap}>
          <ArrowCircleLeftTwoToneIcon className={styles.btn_prev} onClick={prevSlide} />
          <ArrowCircleRightTwoToneIcon className={styles.btn_next } onClick={nextSlide} />
          <HighlightOffTwoToneIcon  className={styles.btn_close} onClick={handleCloseModal} fontSize="large"/>
          <div className={styles.full_screen_image}>
            <img src={props.galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }
      <h1>MY PROJECT</h1>
      <div className={styles.container}>
        <div>
          {props.galleryImages &&
            props.galleryImages.map((pic, index) => {
              return (
                <div
                  className={styles.img}
                  key={pic.id}
                  onClick={ () => handleOpenModal(index) }
                >
                  <img
                    src={pic.img}
                    alt={`my project ${pic.id}`}
                    className={styles.img}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
