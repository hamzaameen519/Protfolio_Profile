/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Front-end Development:",
    description: "Ensuring responsive design to make sure the application works well across different devices and screen sizes.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile And Ios apps",
    description: "Professional development of applications for iOS and Android.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Backend Development",
    description: "In backend development, I build and maintain the server-side logic, databases, and infrastructure of web applications.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a dedicated full-stack developer with over 3 years of experience in web development and software engineering. I thoroughly enjoy exploring new technologies and integrating them into my projects. I am proficient in both frontend and
          backend development, utilizing technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. Problem-solving and creating innovative solutions excite me, and I strive to write efficient and user-friendly code in every project I
          undertake.
        </p>

        <p>
          I am also enthusiastic about teamwork and believe that effective collaboration is key to achieving excellence. I am always eager to take on new projects and challenges. If you would like to learn more about me and my work, please feel free
          to get in touch. I am eager to embrace new opportunities and contribute my skills to meaningful projects.{" "}
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial} />
          ))}
        </ul>
      </section>

      {/* <!--
      - clients
    --> */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
