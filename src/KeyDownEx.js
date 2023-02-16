import React, { useEffect } from "react";

const KeyDownEx = () => {
  useEffect(() => {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    let btn1 = document.getElementById("btn1");
    btn1.style.backgroundColor = "green";
  };

  useEffect(() => {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("mousemove", onMouseUp, true);
  }, []);

  const onMouseUp = (e) => {
    let btn1 = document.getElementById("btn1");
    btn1.style.backgroundColor = "yellow";
  };
  return (
    <>
      <div>Key Down Example</div>
      <button id="btn1">Data</button>
    </>
  );
};

export default KeyDownEx;
