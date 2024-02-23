import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PropertyCard from "./PropertyCard";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { sliderSettings } from "../utilis/common";

const Residencies = () => {

  const {data, isError, isLoading} = useProperties()

  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#dd6b20"
        aria-label="puff-loading"
        />
      </div>
    )
  }


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="text-orange-600 font-roboto font-medium text-2xl">Best Choices</span>
          <span className="primaryText text-black">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
