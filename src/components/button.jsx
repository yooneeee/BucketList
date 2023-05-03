import React from "react";
import styled from "styled-components";

function Button({ size, color, onClick, children, justifyContent }) {
  const colorHandler = (color) => {
    switch (color) {
      case "white":
        return `border: 1px solid #b8bebd; background-color: #fff`;
      case "green":
        return `background-color: rgb(72, 160, 87); color: #fff`;
    }
  };

  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return `width: 95%; height: 120px; font-size: 25px `;
      case "medium":
        return `width: 100px; height: 40px; 20px `;
      case "small":
        return `width: 20px; height: 35px; 10px`;
    }
  };

  const Button = styled.div`
    ${() => colorHandler(color)};
    ${() => sizeHandler(size)};
    border-radius: 8px;
    display: flex;
    justify-content: ${justifyContent};
    margin: 10px;
    padding: 0px 20px;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    &:active {
      filter: brightness(60%);
    }
  `;
  return <Button onClick={onClick}>{children}</Button>;
}
export default Button;
