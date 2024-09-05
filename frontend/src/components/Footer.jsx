import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
        <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <text 
    x="50%" 
    y="50%" 
    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
    fontSize="24" 
    fontWeight="bold" 
    textAnchor="middle" 
    alignmentBaseline="middle" 
    fill="#00796B"
  >
    Healthub
  </text>
</svg>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>8788244416</span>
            </div>
            <div>
              <MdEmail />
              <span>Tejaspatil1175@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>At post june bhampur tal shirpur</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
