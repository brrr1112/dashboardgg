import React from 'react';
import { gamesData } from '../gg/gameData'; // Import game data

const Category = ({ title }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="games-grid">
        {gamesData.map((game, index) => (
          <a href={game.htmlPath} key={index} className="game-card">
            {/* Render the image and check for .default */}
            <img src={game.image.default} alt={game.title} className="game-img" />
            <h3>{game.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
