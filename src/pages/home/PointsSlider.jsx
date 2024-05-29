import { Box, Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { usePointsArray } from './pointsArry';

const PointsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const pointsArray = usePointsArray();

  return (
    <Box className="slider-container" sx={{ width: '100%' }}>
      <Slider {...settings}>
        {pointsArray.map((point, index) => (
          <Grid key={index} item lg={4} xs={10} md={6} sx={{ padding: '1em' }}>
            <Box component='img' sx={{ width: '10%', margin: '0 auto' }} src={point.image} alt={point.title} />
            <Box component='h3' sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0.5em' }}>{point.title}</Box>
          </Grid>
        ))}
      </Slider>
    </Box>
  );
};

export default PointsSlider;
