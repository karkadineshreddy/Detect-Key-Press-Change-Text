import React, { useState, useEffect } from "react";

const letterEmojis = {
  a: "Apple 🍎",
  b: "Banana 🍌",
  c: "Cherry 🍒",
  d: "Dragonfruit 🍉",
  e: "Eggplant 🍆",
  f: "Fig 🍈",
  g: "Grapes 🍇",
  h: "Honeydew 🍈",
  i: "Ice cream 🍦",
  j: "Jackfruit 🥭",
  k: "Kiwi 🥝",
  l: "Lemon 🍋",
  m: "Mango 🥭",
  n: "Nectarine 🍑",
  o: "Orange 🍊",
  p: "Pineapple 🍍",
  q: "Quince 🍏",
  r: "Raspberry 🍓",
  s: "Strawberry 🍓",
  t: "Tomato 🍅",
  u: "Ugli Fruit 🍊",
  v: "Vanilla 🌿",
  w: "Watermelon 🍉",
  x: "Xigua (Chinese Watermelon) 🍉",
  y: "Yam 🍠",
  z: "Zucchini 🥒",
};

function KeyPressDetector() {
  const [text, setText] = useState("Press A-Z to see a fruit!");

  const handleKeyPress = (event) => {
    const key = event.key.toLowerCase();
    if (letterEmojis[key]) {
      setText(letterEmojis[key]);
    } else {
      setText("Press A-Z to see a fruit! 🍎🍌🍒");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <h2>{text}</h2>
      <p>Press any letter from A to Z on your keyboard! ⌨️</p>
    </div>
  );
}

export default KeyPressDetector;
