import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/browse.css';
// Importa íconos de Font Awesome o similar, o cámbialos por SVG
// import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'; 

export default function Browse() {
    // 1. Declaración de variables de estado con useState
    const [isBrowseOpen, setIsBrowseOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    return(
    <>
<div className="body-browse">
      <div className="fixed-div">
        <div className="parent-div">
          <img 
            src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/netflix%20logo.png?raw=true" 
            alt="netflix img" 
            className="logo" 
          />
          
          <div className="dropdown" onClick={() => setIsBrowseOpen(!isBrowseOpen)}>
            <span className="browse-el">Browse</span>
            <div className="dropdown-content" >
              <p>Home</p>
              <p><a href="#dramas" className='a-browse'>Tv shows</a></p>
              <p>Movies</p>
              <p><a href="#top-tv" className='a-browse'>News &amp; popular</a></p>
              <p><a href="#list" className='a-browse'>My List</a></p>
            </div>
          </div>
        </div>

        {/* notification nav y otros iconos */}
        <div className="float-op" style={{ float: 'right' }}>
          <div className="search"></div>
        </div>
        
        {/* Notificaciones Dropdown */}
        <div className="dropdown2" style={{ float: 'right' }} >
          <div className="dropbtn"></div>
          <div className="dropdown-content2" style={{ display: isNotificationsOpen ? 'block' : 'none' }}>
            <div className="span-style"></div>
            
            {/* Notificación 1 */}
            <div className="dropdown-img">
              <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/13reason-why.jpeg?raw=true" alt="" />
              <p>Countinue Watching<br />
                13 Reasons Why<br />
                <span style={{ color: '#2D2D2D' }}>Today</span>
              </p>
            </div>
            
            {/* Notificación 2 */}
            <div className="dropdown-img">
              <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/after-life.jpeg?raw=true" alt="" />
              <p>🛎 Reminder: New Arrival<br />
                Afterlife Of The Party<br />
                <span style={{ color: '#2D2D2D' }}>1 day ago</span>
              </p>
            </div>
            
            {/* Se omiten las demás notificaciones para brevedad, 
               pero se aplicarían las mismas conversiones de JSX. */}
            {/* Notificación 3 */}
             <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/control-zz.jpeg?raw=true" alt="" />
                <p>🛎 Reminder: New Season<br/>
                    Season 2 is ready to watch.<br/>
                    <span style={{ color: '#2D2D2D' }}>1 day ago</span>
                </p>
            </div>
            {/* Notificación 4 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/csInapp_112x63.png?raw=true" alt="" />
                <p>Netflix Lookahead<br/>
                    Explore what's coming soon<br/>
                    <span style={{ color: '#2D2D2D' }}>1 day ago</span>
                </p>
            </div>
            {/* Notificación 5 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/ijee.jpeg?raw=true" alt="" />
                <p>🛎 Reminder: New Arrival<br/>
                    Out Of My League<br/>
                    <span style={{ color: '#2D2D2D' }}>5 days ago</span>
                </p>
            </div>
            {/* Notificación 6 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/monster-hunt.jpeg?raw=true" alt="" />
                <p>🛎 Reminder: New Arrival<br/>
                    Monster Hunt<br/>
                    <span style={{ color: '#2D2D2D' }}>2 days ago</span>
                </p>
            </div>
            {/* Notificación 7 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/vivo.jpeg?raw=true" alt="" />
                <p>New Arrival<br/>
                    Vivo<br/>
                    <span style={{ color: '#2D2D2D' }}>3 weeks ago</span>
                </p>
            </div>
            {/* Notificación 8 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/out-of-my-league.jpeg?raw=true" alt="" />
                <p>🛎 Reminder: New Arrival<br/>
                    Ije The Journey<br/>
                    <span style={{ color: '#2D2D2D' }}>2 days ago</span>
                </p>
            </div>
            {/* Notificación 9 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/csInapp_112x63.png?raw=true" alt="" />
                <p>Netflix Lookahead<br/>
                    Explore what's coming soon<br/>
                    <span style={{ color: '#2D2D2D' }}>1 day ago</span>
                </p>
            </div>
            {/* Notificación 10 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/resort-to-love.jpeg?raw=true" alt="" />
                <p>Reminder:New Arrival<br/>
                    Resort to love<br/>
                    <span style={{ color: '#2D2D2D' }}>1 day ago</span>
                </p>
            </div>
            {/* Notificación 11 */}
            <div className="dropdown-img">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/kissin-booth.jpeg?raw=true" alt="" />
                <p>🛎 Reminder: New Arrival<br/>
                    Kissing Booth 3<br/>
                    <span style={{ color: '#2D2D2D' }}>1 day ago</span>
                </p>
            </div>

          </div>
        </div>

        <div className="user-img" style={{ float: 'right' }}>
          <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/user.png?raw=true" alt="" />
          <span className="span-icon"></span>
        </div>
      </div>
      <div className="between-img-div">
        <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/between-1.webp" className="between-img" alt="" />
      </div>
      
      <div className="logo-and-text">
        <div 
          className="titleWrapper" 
          style={{ transformOrigin: 'left bottom', transform: 'scale(1) translate3d(0px, 0px, 0px)', transitionDuration: '1300ms', transitionDelay: '0ms' }}
        >
          <div className="billboard-title">
            <img className="title-logo" src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/netflixsvg.webp" title="Between" alt="Between" />
          </div>
        </div>
        
        <div 
          className="info-wrapper" 
          style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '1300ms', transitionDelay: '0ms', opacity: 1 }}
        >
          <div className="info-wrapper-fade" style={{ opacity: 1, transitionDuration: '600ms', transitionDelay: '200ms' }}>
            <div className="series-synopsis">
              After a mysterious disease kills every resident over 21 years old,<br />
              survivors of a town must fend for<br />
              themselves when the government quarantines them.
            </div>
          </div>
          
          <button className="color-primary" tabIndex="-1" type="button">
            <div className="ltr-1ksxkn9">
              <div className="medium ltr-dguo2f" role="presentation">
                {/* SVG for Play button */}
                <svg className="svg-radius" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
              </div>
            </div>
            <div className="just-div" style={{ width: '1rem' }}></div>
            <span className="info-btn">Play</span>
          </button>
          
          <button className="button-secondary" type="button">
            <div className="ltr">
              <div className="medium">
                {/* SVG for More Info button */}
                <svg className="svg-radius" viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg>
              </div>
            </div>
            <div className="more-info" style={{ width: '1rem' }}></div>
            <span className="info-btn">More Info</span>
          </button>
          
        </div>
      </div>
      
   
      <div className="ratin-div" style={{ float: 'right' }}>
        <button aria-label="Replay" className="color-supplementary" type="button">
          <div className="small-div">
            <svg className="style-svg" viewBox="0 0 24 24">
              <path d="M20 12.35l1.919-1.371 1.162 1.627-4.08 2.915-4.082-2.915 1.162-1.627L18 12.349V12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42A8.954 8.954 0 0 1 11 21a9 9 0 1 1 9-9v.35z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
        <span className="rating">
          <span className="maturity-number">16+</span>
        </span>
      </div>

       <section className="all-drama">
        {/* drama collection */}
        <div className="tv-dramas" id="dramas">
          <h2 className="tvd-h2">Tv Dramas</h2>
          <div className="div-width">
            <div className="all-movie-div">
              {/* Note: In React, these movie items would typically be mapped from an array. */}
              <div className="orange">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/orange%20is%20the%20new.jpg?raw=true" alt="orange image" />
              </div>
              <div className="outerbanks">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/outer-banks.jpg?raw=true" alt="outerbanks image" />
              </div>
              <div className="gooddoctor">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/gooddoctor.webp" alt="gooddoctor image" />
              </div>
              <div className="teenwolf">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/teenwolf.webp" alt="teenwolf image" />
              </div>
              <div className="vincezo">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/vincenzo.jpg?raw=true" alt="vincenzo image" />
              </div>
              <div className="nevertheless">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/nevertheless.jpg?raw=true" alt="nevertheless image" />
              </div>
              <div className="notokay">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/it%20is%20okay%20to%20not%20be%20okay.jpg?raw=true" alt="netflix not okay series img" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

        {/* trending now */}
        <div className="trending-now">
          <h2 className="all-tvd-h2">Trending now</h2>
          {/* ... otros divs de trending now convertidos ... */}
          <div className="second-div-width">
            <div className="second-all-movie-div">
              <div className="control-z">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/controlz.jpg?raw=true" alt="contro z" />
              </div>
              <div className="crazy-rich-asians">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/crazy%20rich%20asian.webp" alt="crazy-rich-asians" />
              </div>
              <div className="blood">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/blood.jpg?raw=true" alt="blood series" />
              </div>
              <div className="mimi">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/mimi.webp" alt="mimi" />
              </div>
              <div className="my-secrete-romance">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/secrete%20romance.webp" alt="my-secrete-romance" />
              </div>
              <div className="insatiable">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/insatiable.jpg?raw=true" alt="insatiable" />
              </div>
              <div className="tempted">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/tempted.webp" alt="tempted" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

        {/* my list */}
        <div className="my-list" id="list">
          <h2 className="h2list">My List</h2>
          {/* ... otros divs de my list convertidos ... */}
          <div className="list-div-width">
            <div className="second-div-list">
              <div className="nevertheless-list">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/nevertheless.jpg?raw=true" alt="" />
              </div>
              <div className="ije">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/ije.webp" alt="ije" />
              </div>
              <div className="controlz-list">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/controlz.jpg?raw=true" alt="control-z" />
              </div>
              <div className="hwarang">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/hwarang.webp" alt="hwarang" />
              </div>
              <div className="one-day">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/oneday.webp" alt="one day" />
              </div>
              <div className="blood-in-list">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/blood.jpg?raw=true" alt="blood" />
              </div>
              <div className="blade">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/blade.webp" alt="blade series" />
              </div>
              <div className="vincezo">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/vincenzo.jpg?raw=true" alt="vincenzo image" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

        {/* only on netflix */}
        <div className="only-on-netflix">
          <h2 className="tvtvd-h2">Only On Netflix</h2>
          {/* ... otros divs de only on netflix convertidos ... */}
          <div className="netflix-div-width">
            <div className="netflix-all-movie-div">
              <div className="nevertheless-list">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/never-big-img.webp" alt="" />
              </div>
              <div className="ije">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/vincenzo-bigimg.webp" alt="ije" />
              </div>
              <div className="controlz-list">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/not%20okaybig%20img.webp" alt="control-z" />
              </div>
              <div className="hwarang">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/outerbanks%20bigimg.webp" alt="hwarang" />
              </div>
              <div className="one-day">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/spaceswipper.webp" alt="one day" />
              </div>
              <div className="blood-in-list">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/blood%20red%20sky.webp" alt="blood" />
              </div>
              <div className="blade">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/blood%20and%20water%20bigimg.webp" alt="blade series" />
              </div>
              <div className="image">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/cha-cha-hometpwn.webp" alt="cha-cha-hometpwn" />
              </div>
              <div className="image">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/Hes-all-that.jpg?raw=true" alt="he's all that" width="250" />
              </div>
              <div className="image">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/sweet-girl.jpg?raw=true" alt="" width="250" />
              </div>
              <div className="image">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/king-of-boys.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

        {/* top10-now */}
        <div className="top10-now" id="top-tv">
          <h2 className="top10-tvd-h2">Top 10 In Nigeria</h2>
          {/* ... otros divs de top10-now convertidos ... */}
          <div className="top10-div-width">
            <div className="top10-all-movie-div">
              <div className="quams-money">
                <div className="topp-one"></div>
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/quans%20money.webp" alt="quams money" />
              </div>
              <div className="top2-film-nigerial">
                <div className="half-circle"></div>
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/top%20two%20netflix.webp" alt="72 film" className="imange" />
              </div>
              <div className="mercenary">
                <div className="number-three-css"></div>
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/mercenary.webp" alt="mercenary series" />
              </div>
              <div className="div-number-four">
                <div className="number-four"></div>
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/resort%20to%20love.jpeg?raw=true" alt="Resort to love" />
              </div>
              <div className="div-number-five">
                <div className="number-five-css"></div>
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/ije%20top%20five.webp" alt="ije" />
              </div>
              <div className="div-number-6">
                <div className="number-six">6</div>
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/sex%20life.jpeg?raw=true" alt="sex life" className="sex-life-img" />
              </div>
              <div className="div-number-7">
                <div className="number-seven"></div>
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/sex%20life.jpeg?raw=true" alt="sex life" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

        {/* women behind the screen */}
        <div className="my-list div-list">
          <h2 className="h2list" style={{ position: 'relative', top: '60px' }}>Women behind the screen</h2> 
          <a className="sec-next a-browse">&#10095;</a>
          {/* ... otros divs de women behind the screen convertidos ... */}
          <div className="list-div-width">
            <div className="second-div-list">
              <div className="nevertheless-list">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/intern.webp" alt="" />
              </div>
              <div className="ije">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/what%20girl%20wants.webp" alt="ije" />
              </div>
              <div className="controlz-list">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/five%20feet.webp" alt="control-z" />
              </div>
              <div className="hwarang">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/wonderwoman.webp" alt="hwarang" />
              </div>
              <div className="one-day">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/enchanted.webp" alt="one day" />
              </div>
              <div className="blood-in-list">
                <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/jiva.jpeg?raw=true" alt="blood" />
              </div>
              <div className="blade">
                <img src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/angel.webp" alt="blade series" />
              </div>
            </div>
          </div>
        </div>
        <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>
      </section>
 <footer>
        <div className="grid-container">
          <div className="grid-item">
            {/* Íconos de Font Awesome: asumiendo que el script está cargado globalmente 
                o que se reemplazarán por iconos de react-icons. */}
            <span><i className="fab fa-facebook-square"></i></span>
            <span><i className="fab fa-instagram"></i></span>
            <span><i className="fab fa-youtube"></i></span>
            <p>Audio and Subtitle</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
            <p className="p-grid">Service code</p>
            <p>&copy;1997-2021 Netflix, inc,(7cBab736-9ae4-4251-9ea9-cf9fdd09f7cc)</p>
          </div>
          <div className="grid-item">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className="grid-item">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preference</p>
          </div>
          <div className="grid-item">
            <p>Gift Cards</p>
            <p>Terms Of Use</p>
            <p>Corperate Information</p>
          </div>
        </div>
      </footer>
      </div>
    </>
    )
}