import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //オブジェクト分割代入
  const contentStyle = {
    // color: "blue",           // 固定値Blue
    // color: props.color,      //propsのcolor
    // color: color,            // propsを分割代入してprops.が不要に
    color, // javascriptではオブジェクトのプロパティ名と当てはめる値が同じ名前のときは、省略できる
    fontSize: "18px", // cssでは、font-sizeだけど
  };
  //   return <p style={contentStyle}>{props.message}</p>;      // propsに特定の名称を渡して出力
  //   return <p style={contentStyle}>{props.children}</p>;     // コンポーネントのタグで括った中身を出力
  return <p style={contentStyle}>{children}</p>; // propsを分割代入してprops.が不要に
};

// export default ColorfulMessage;  //ファイルで１行
