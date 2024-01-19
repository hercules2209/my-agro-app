import React, { useState, useEffect } from 'react';
import './Home.css';
import Imageslider from './Imageslider';
function Home() {
  return (
    
      <div id="textblock">
        <div className="News"></div>
        <Imageslider />
        <div className="overlay-text">
          <div id="textblock-container">
              <h1 id="textblock-title">What is my Agro app</h1>
              <p id="textblock-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, fuga placeat maxime nesciunt quia ipsam veniam ex iure velit. Placeat distinctio esse illo quae nulla repudiandae tempora, et totam nobis velit fuga, quidem dignissimos veniam ipsa, alias inventore! Veritatis esse accusamus incidunt quisquam quia voluptate obcaecati necessitatibus provident dolorum reprehenderit ab minima earum fugit repellendus aut cupiditate atque, dolores velit, voluptates quis magnam? Est veritatis rem beatae. <p>Praesentium sint beatae numquam exercitationem, ex, expedita distinctio facere quibusdam rem accusamus debitis id nisi, ea iusto harum quasi corporis quis illo. Inventore voluptate ex pariatur veritatis blanditiis at officiis, odit, possimus tempora maxime unde reprehenderit laboriosam debitis, velit fugit alias. Asperiores iure repudiandae dolorum dolore cum, quae ullam doloribus maxime repellat officiis enim debitis deserunt delectus optio odit molestiae corrupti omnis doloremque ipsum quos illo ratione nesciunt itaque hic! </p>Libero vitae magnam iure provident officiis, velit rerum delectus id ad illo deserunt eaque illum animi nobis perferendis veritatis soluta molestiae nostrum quidem corporis ipsa quae consequuntur quis placeat. Saepe voluptates nostrum nisi cupiditate illo, pariatur reiciendis quidem veniam perspiciatis repellendus placeat consequuntur corrupti, provident error omnis quos aspernatur architecto illum sequi, ratione et exercitationem. Explicabo, rerum repudiandae expedita magnam nobis ratione tenetur.
              </p>
          </div>
          <footer id='textblock-footer'>Demo Created With 💀 By&nbsp;<a id="textblock-devsense" href="https://hercules2209.github.io/">Harshaditya Sharma</a></footer>
        </div>
      </div>
  );
}

export default Home;