import React, { useState } from "react";
// import { useState } from "react/cjs/react.production.min";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setfaceShowFlg] = useState(true);

  // const onClickButton = () => {
  //   alert();
  // };
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowFlg(!faceShowFlg);
  };
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px", // cssでは、font-sizeだけど
  // };
  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px", // cssでは、font-sizeだけど
  // };

  // Too many re-renders
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlg || setfaceShowFlg(true);
    } else {
      faceShowFlg && setfaceShowFlg(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColorfulMessage /> */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/* <p style={contentLedyStyle}>元気です</p> */}
      {/* <ColorfulMessage color="pink" message="元気です" /> */}
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>Ｏｎ／Ｏｆｆ</button>
      <p>{num}</p>
      {faceShowFlg && <p>(@_@)</p>}
    </>
  );
};
export default App;
