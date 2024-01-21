  import React from 'react';
  import './Home.css';
  import Typewriter from './Typewriter';
  import Imageslider from './Imageslider';
  function Home() {
    const texts=[
      'One stop solution for all your farming needs',
      'Your Personal AI Farming Assistant integrated with a mobile app',
      'AI Plant Disease Detection and Diagnosis for 40+ crops',
      'Marketplace for buying and selling crops, tools, fertilizers and pesticides',
      'Crop Recommendation based on soil and weather conditions',
      'Get all the latest news and updates about farming',

    ]
    return (
      
        <div id="textblock">
          
          <Imageslider />
          <div id="about-overlay">
            <div id="textblock-container">
                <h1 id="textblock-title">What is my Agrify?</h1>
                <p id="textblock-content" style={{color:"grey", fontSize:"30px"}}><Typewriter texts={texts} infinite={true} /></p>
                <p id="textblock-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, fuga placeat maxime nesciunt quia ipsam veniam ex iure velit. Placeat distinctio esse illo quae nulla repudiandae tempora, et totam nobis velit fuga, quidem dignissimos veniam ipsa, alias inventore! Veritatis esse accusamus incidunt quisquam quia voluptate obcaecati necessitatibus provident dolorum reprehenderit ab minima earum fugit repellendus aut cupiditate atque, dolores velit, voluptates quis magnam? Est veritatis rem beatae. <p>Praesentium sint beatae numquam exercitationem, ex, expedita distinctio facere quibusdam rem accusamus debitis id nisi, ea iusto harum quasi corporis quis illo. Inventore voluptate ex pariatur veritatis blanditiis at officiis, odit, possimus tempora maxime unde reprehenderit laboriosam debitis, velit fugit alias. Asperiores iure repudiandae dolorum dolore cum, quae ullam doloribus maxime repellat officiis enim debitis deserunt delectus optio odit molestiae corrupti omnis doloremque ipsum quos illo ratione nesciunt itaque hic! </p>Libero vitae magnam iure provident officiis, velit rerum delectus id ad illo deserunt eaque illum animi nobis perferendis veritatis soluta molestiae nostrum quidem corporis ipsa quae consequuntur quis placeat. Saepe voluptates nostrum nisi cupiditate illo, pariatur reiciendis quidem veniam perspiciatis repellendus placeat consequuntur corrupti, provident error omnis quos aspernatur architecto illum sequi, ratione et exercitationem. Explicabo, rerum repudiandae expedita magnam nobis ratione tenetur.
                </p>
            </div>
          </div>
          <div className="News">

          </div>
          <div className="Features">
          </div>
          <div className="FAQ" style={{display:"grid", flexDirection:"row",alignContent:"center", justifyContent:"center", gridTemplateColumns:"1fr 1fr"}}>
          
            <div style={{display:"grid"}}>
              <img src="https://cdn.myscheme.in/images/questions.svg" alt="FAQ" style={{height:"40rem",width:"30rem"}}/>
            </div>
            <div style={{display:"grid"}}>
              <h1>FAQ</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            </div>
          </div>
          <div className="Contactus">
            <div >
              <div style={{ justifyContent: "center", alignItems: "center"}}>
              
              <h1>Contact Us</h1>
              <p>For any queries, contact us at</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore voluptatum, corrupti nisi officia quos, pariatur eos, ex provident tenetur repellat! Voluptas quod magni voluptatum vero iusto quam, fugiat aperiam impedit! Exercitationem nostrum molestias, et totam, voluptatum maxime quo ea odit quos quis eum porro minus tenetur explicabo? Quos reiciendis eveniet quo velit aspernatur, quis neque, harum tempore vitae at ratione expedita eius nesciunt non libero excepturi distinctio nobis deleniti explicabo autem voluptates voluptas necessitatibus. Rem saepe aperiam eius dicta. Unde maxime reiciendis voluptatibus omnis sequi esse, quisquam eius libero, dignissimos ducimus, repellat aliquam quos ipsam nihil consequuntur ratione deserunt.</p>
              </div>
            </div>
          </div>
          <footer id='Home-footer'>Demo Created With 💀 By&nbsp;<a id="textblock-devsense" href="https://hercules2209.github.io/">El Primero</a></footer>
        </div>
    );
  }

  export default Home;