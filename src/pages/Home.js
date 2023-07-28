import backgroundHome from "../assets/images/blackLight1.jpg";
import { useState } from "react";

const Home = () => {
  const [mouseMoveY, setMouseMoveY] = useState();
  const [mouseMoveX, setMouseMoveX] = useState();

  const mouseMove = document.querySelectorAll(".circle");

  function mouseMoveEvent(e) {
    setMouseMoveX(e.pageX);
    setMouseMoveY(e.pageY);
    mouseMove.forEach((circle) => {
      mouseMove.style.left = mouseMoveX + "px";
      mouseMove.style.top = mouseMoveY + "px";
    });
  }

  return (
    <main className="main" onMouseMove={mouseMoveEvent}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <section className="section-home">
        <div className="img-div">
          <img src={backgroundHome} alt="" />
        </div>
        <section className="title-container">
          <div className="first-title">
            <span>a</span>
            <span>l</span>
            <span>e</span>
            <span>x</span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span>r</span>
            <span>e</span>
          </div>
          <div className="under-title">
            <h2>professionnal photographer passioned</h2>
          </div>
          <div className="second-title">
            <span>j</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
          </div>
          <div className="third-title">
            <span>c</span>
            <span>l</span>
            <span>i</span>
            <span>c</span>
            <span>h</span>
            <span>é</span>
          </div>
        </section>
        <div className="enter">
          <span id="one">e</span>
          <span id="two">n</span>
          <span id="three">t</span>
          <span id="four">e</span>
          <span id="five">r</span>
        </div>
      </section>
    </main>
  );
};

export default Home;
