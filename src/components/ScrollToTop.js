import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DIV = styled.div`
  position: absolute;
  bottom: 10px;
  right: 50px;
  z-index: 999999;
  .topto-button {
    display: ${({ visible }) => (visible ? "block" : "none")};
  }

  .blobs-container {
    display: flex;
  }

  .blob {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 30px;
    width: 30px;
    align-items: center;
    text-align: center;
    padding: 4px;
    color: #00a78e;
  }
  .topto-button:hover .blob.green {
    background: rgba(0, 252, 108, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: pulse-green-2 2s infinite;
  }
  .topto-button:hover .blob.green .fas {
    color: #fff;
  }

  .blob.green {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: pulse-green 2s infinite;
  }

  @keyframes pulse-green {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes pulse-green-2 {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 252, 108, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 252, 108, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 252, 108, 0);
    }
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <DIV visible={visible}>
      <div className="topto-button">
        <div class="blobs-container" onClick={scrollToTop}>
          <div class="blob green">
            <i class="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default ScrollToTop;
