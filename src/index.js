import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // JSX記法：javascriptの中にhtmlタグを書く
    // <div></div> return htmlの内容は一つのタグで括る必要あり
    // <React.Fragment></React.Fragment>  この記載でも可
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
