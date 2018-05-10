import React from 'react';
import '../OpeningScroll/OpeningScroll.css'

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
    </div>
  )
}

export default OpeningScroll;