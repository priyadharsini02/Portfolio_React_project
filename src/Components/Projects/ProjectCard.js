import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: "./tetris.jpeg",
      name: "Tetris Game.",
      tech: ["Adobe Magento", "jQuery", "HTML", "CSS"],
      link: "https://tetris.com/play-tetris",
    },
    {
      img: "./healthcareapp.avif",
      name: "Healthcare App",
      tech: ["React", "Javascript", "Redux", "Formik", "Firebase"],
      link: "https://www.scnsoft.com/healthcare/mobile/patient-apps",
    },
    {
      img: "./ecommerceapp.jpeg",
      name: "Ecommerce App",
      tech: ["React", "Context API", "javaScript", "HTML", "CSS"],
      link: "https://www.appypie.com/e-commerce-app-builder",
    },
    {
      img: "./netflixclone.jpeg",
      name: "Netflix Clone App.",
      tech: ["React", "javaScript", "HTML", "CSS"],
      link: "https://www.alphansotech.com/netflix-clone",
    },
    {
      img: "./spotifyclone.jpeg",
      name: "Spotify Clone App",
      tech: ["React", "javaScript", "HTML", "CSS", "API"],
      link: "https://waminipatil.github.io/weather-app/",
    },
    {
      img: "./quizapp.avif",
      name: "Quiz App",
      tech: ["React", "javaScript", "HTML", "CSS"],
      link: "https://quizizz.com/",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={process.env.PUBLIC_URL + card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>
              <a className={styles.link} href={card.link} target="_blank">
                <BsLink />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCard;
