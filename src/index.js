import React from "react";
import ReactDom from "react-dom";

// JSX記法：javascriptの中にhtmlタグを書く
// const App = () => {
//   return (
//     // <div></div> return htmlの内容は一つのタグで括る必要あり
//     // <React.Fragment></React.Fragment>  この記載でも可
//     <>
//       <h1>こんにちは</h1>
//       <p>お元気ですか？</p>
//     </>
//   );
// };

import App from "./App";
// コンポーネント
// 命名規則：「パスカルケース」先頭が大文字で始まり、単語の区切りを大文字とする変数名の付け方

ReactDom.render(<App />, document.getElementById("root"));
