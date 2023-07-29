import backgroundHome from "../assets/images/blackLight1.jpg";
import { useState } from "react";

const Home = () => {
  //-Constants //
  const [mouseMoveY, setMouseMoveY] = useState();
  const [mouseMoveX, setMouseMoveX] = useState();
  const circle = document.querySelector(".circle");

  //-Functions MouseMove //
  function mouseMoveCircle1(e) {
    setMouseMoveX(e.clientX);
    setMouseMoveY(e.clientY);
    circle.style.left = mouseMoveX + "px";
    circle.style.top = mouseMoveY + "px";
  }
  //-Function MouseEnter //
  function moveEnterFirstTitle() {
    circle.style.zIndex = "0";
    circle.style.background = "cyan";
    circle.style.transition = "0.05s ease";
    circle.style.filter = "blur(10px)";
    circle.style.width = "120px";
    circle.style.height = "120px";
  }

  //- Function MouseLeave //
  function moveLeaveFirstTitle() {
    circle.style.background = "red";
    circle.style.filter = "invert(0)";
    circle.style.transition = ".05s ease";
    circle.style.width = "100px";
    circle.style.height = "100px";
  }

  return (
    <main className="main">
      <div className="circle"></div>

      <section className="section-home" onMouseMove={mouseMoveCircle1}>
        <div className="img-div">
          <img src={backgroundHome} alt="" />
        </div>

        <div
          className="first-title"
          onMouseEnter={moveEnterFirstTitle}
          onMouseLeave={moveLeaveFirstTitle}
        >
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
    </main>
  );
};

export default Home;
