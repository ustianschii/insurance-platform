import { MainWrapper } from "./bodyStyles";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurWaranty } from "../OurWaranty/OurWaranty";
import Reviews from "../Reviews/Reviews";
import Blog from "../Blog/Blog";
import FastOrder from "../FastOrder/FastOrder";
import Reminder from "../Reminder/Reminder";
import MainServices from "../MainServices/MainServices";
import MainWallpaper from "../MainWallpaper/MainWallpaper";

const Body = () => {
  return (
    <>
      <MainWallpaper />
      <MainWrapper>
        <MainServices />
        <AboutUs />
        <OurWaranty />
        <Reviews />
        <Blog />
        <FastOrder />
        <Reminder />
      </MainWrapper>
    </>
  );
};

export default Body;
