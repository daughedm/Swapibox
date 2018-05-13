import React from 'react';
import '../OpeningScroll/OpeningScroll.css';
import soundtrack from '../../../Assets/Audio/star-wars-theme-song.mp3';
import PropTypes from 'prop-types';

const OpeningScroll = ({crawl}) => {

  return (
    <div className="scroll" >
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode { crawl.episode_id }</p>
            <h1>{crawl.title}</h1>
          </div>
          <p>{crawl.opening_crawl}</p>
        </div>
      </section>
      <audio src={soundtrack} autoPlay="true" />
    </div>
  );
};

OpeningScroll.propTypes = {
  crawl: PropTypes.object
};

export default OpeningScroll;