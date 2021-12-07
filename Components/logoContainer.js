import React from 'react';
import logo from '../images/logo.png';
import shutterstock from '../images/shutterstock.jpg';
import '../index.css';

function LogoContainer() {
  return (
      <div className="pt-6 px-10">
      <img src={logo} alt="logo meed exchange"></img>
      <h1 className=" mt-6 md:mt-14 text-5xl text-first_color font-bold">JOIN US</h1>
      <h2 className="text-2xl font-bold text-second_color pt-3">DAILY UPDATING RATES</h2>
      <img src={shutterstock} alt="image exchange" className=" w-96 h-80 rounded-lg mt-8 shadow-2xl bg-opacity-40"></img>

      </div>
  );
}

export default LogoContainer;