import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './Games.css';

// Asosiy slider rasmlari
import GamesImg1 from "./img/games1.png";
import GamesImg2 from "./img/games2.png";
import GamesImg3 from "./img/games3.png";
import GamesImg4 from "./img/games4.png";

// Modal uchun 9 ta rasm (Yo'llarni o'zingizni papkangizga qarab tekshiring)
import GamesModal1 from "./img/games1.png";
import GamesModal2 from "./img/games2.png";
import GamesModal3 from "./img/games3.png";
import GamesModal4 from "./img/games4.png";
import GamesModal5 from "./img/games1.png"; // Misol uchun qayta ishlatildi
import GamesModal6 from "./img/games2.png";
import GamesModal7 from "./img/games3.png";
import GamesModal8 from "./img/games4.png";
import GamesModal9 from "./img/games1.png";

const Games = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Slider ma'lumotlari
  const gameData = [
    { id: 1, img: GamesImg1, followers: "40 Followers" },
    { id: 2, img: GamesImg2, followers: "40 Followers" },
    { id: 3, img: GamesImg3, followers: "40 Followers" },
    { id: 4, img: GamesImg4, followers: "40 Followers" },
    { id: 5, img: GamesImg2, followers: "40 Followers" },
  ];

  // Modal ichidagi 9 ta rasm massivi
  const modalGames = [
    GamesModal1, GamesModal2, GamesModal3, 
    GamesModal4, GamesModal5, GamesModal6, 
    GamesModal7, GamesModal8, GamesModal9
  ];

  return (
    <section className="games">
      <div className="container">
        <div className="games__top">
          <h2 className="games__title">Currently Trending Games</h2>
          <button className="games__see-all" onClick={toggleModal}>SEE ALL</button>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="games__swiper"
        >
          {gameData.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="game__card">
                <img src={game.img} alt="game" className="game__img" />
                <div className="game__info">
                  <span className="game__fire">🔥</span>
                  <p>{game.followers}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Oyna */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className="modal__title">All Trending Games</h2>
                <button className="modal-close" onClick={toggleModal}>&times;</button>
            </div>
            <div className="modal__grid">
              {modalGames.map((imgSrc, index) => (
                <div key={index} className="modal__item">
                  <img src={imgSrc} alt={`modal-game-${index + 1}`} />
                  <p className="modal__item-text">Game Name {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Games;