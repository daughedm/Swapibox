import React from 'react';
import '../OpeningScroll/OpeningScroll.css'
import soundtrack from '../../../Assets/Audio/star-wars-theme-song.mp3'

const OpeningScroll = (props) => {

  return (
    <div className="scroll" >
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode { props.crawl.episode_id }</p>
            <h1>{props.crawl.title}</h1>
          </div>
          <p>{props.crawl.opening_crawl}</p>
        </div>
      </section>
      <audio src={soundtrack} autoPlay="true" />
    </div>
  )
}

export default OpeningScroll;