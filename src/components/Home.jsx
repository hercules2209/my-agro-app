  import React,{useState} from 'react';
  import './Home.css';
  import Typewriter from './Typewriter';
  import Imageslider from './Imageslider';
  import { useMediaQuery } from 'react-responsive';
  import Accordion from './Accordion';
  import { accordionData } from './accordianData.js';
  function Home() {
    const isMedia = useMediaQuery({ maxWidth: 920 });
		const [menuFlex,setMenuFlex] = useState(false);

    
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
                <p id="textblock-content">At Agrify, we are not just a platform; we are the heartbeat of a revolutionary agricultural experience. Rooted in a passion for sustainable farming and technological advancement, we bring you a seamless blend of cutting-edge solutions that empower farmers like never before.<br></br>
                  🌱 <b>Precision Agriculture Redefined</b>:
                  Witness the future of farming with our state-of-the-art plant disease detection technology. We believe in proactive care, ensuring your crops thrive with the precision they deserve. Agrify provides real-time insights and historical weather data, arming you with the knowledge to cultivate with confidence.
                  <br></br>
                  🚀 <b>Accurate Crop Recommendations</b>:
                  Our commitment to your success extends beyond disease detection. Agrify's intelligent algorithms leverage real-time and historical weather data specific to your region, delivering accurate crop recommendations that elevate your yield potential. Say goodbye to guesswork; embrace the science of precision farming.
                  <br></br>
                  💬 <b>Your Farming Companion–Anytime, Anywhere</b>:
                  Meet your virtual agricultural advisor–our responsive chatbot. Whether you're seeking guidance on crop health or need timely healthcare recommendations for your plants, Agrify's chatbot is your 24/7 companion, ensuring you make informed decisions at every stage of cultivation.
                  <br></br>
                  🌐 <b>Marketplace for Agricultural Excellence</b>:
                  Browse our curated marketplace where farmers connect with quality suppliers. From essential farming materials to cutting-edge tools, Agrify's marketplace is your one-stop destination for everything you need to nurture a thriving harvest.
                  <br></br>
                  🤝 <b>Join the Agrify Movement</b>:
                  More than a platform, Agrify is a community of forward-thinking farmers, embracing technology to transform agriculture. Together, we cultivate not just crops but a sustainable future for generations to come.
                </p>
            </div>
          </div>
          <div className="News">
            
          </div>
          <div className="FAQ" style={{display:"grid", flexDirection:"row",alignContent:"center", justifyContent:"center", gridTemplateColumns:isMedia ? "1fr" : "1fr 1fr" }}>

            <div style={{display:"grid"}}>
              <div style={{display:"flex",justifyContent:isMedia ?"center":"right"}}>
              <img src="https://cdn.myscheme.in/images/questions.svg" alt="FAQ" style={{height:isMedia ?"20rem":"40rem",width:isMedia ?"15rem":"30rem"}}/>
              </div>
            </div>
            <div style={{display:"grid",marginTop:isMedia ?"0rem":"3rem"}}>
              <div style={{display:"flex", flexDirection:"column",justifyContent:isMedia ?"center":"left"}}>
              <h1 style={{fontSize:"40px",color:"grey" ,marginTop:isMedia ?"0rem":"4rem"}}>FAQ</h1>
              <p>          
                <div className="accordion" style={{paddingRight:"4rem"}}> 
                  {accordionData.map(({ title, content }) => (<Accordion title={title} content={content} />))} 
                </div></p>
            </div>
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