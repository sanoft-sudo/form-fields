import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  /* toogle css */

  .can-toggle {
    position: relative;
  }
  .can-toggle *,
  .can-toggle *:before,
  .can-toggle *:after {
    box-sizing: border-box;
  }
  .can-toggle input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .can-toggle input[type="checkbox"][disabled] ~ label {
    pointer-events: none;
  }
  .can-toggle input[type="checkbox"][disabled] ~ label .can-toggle__switch {
    opacity: 0.4;
  }
  .can-toggle
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:before {
    content: attr(data-unchecked);
    left: 0;
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    content: attr(data-checked);
  }
  .can-toggle label {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;
  }
  .can-toggle label .can-toggle__label-text {
    flex: 1;
    padding-left: 32px;
  }
  .can-toggle label .can-toggle__switch {
    position: relative;
  }
  .can-toggle label .can-toggle__switch:before {
    content: attr(data-checked);
    position: absolute;
    top: 0;
    text-transform: uppercase;
    text-align: center;
  }
  .can-toggle label .can-toggle__switch:after {
    content: attr(data-unchecked);
    position: absolute;
    z-index: 5;
    text-transform: uppercase;
    text-align: center;
    background: white;
    transform: translate3d(0, 0, 0);
  }
  .can-toggle input[type="checkbox"][disabled] ~ label {
    color: rgba(119, 119, 119, 0.5);
  }
  .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch,
  .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch {
    background-color: #777;
  }
  .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch:after,
  .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
    color: #5e5e5e;
  }
  .can-toggle input[type="checkbox"]:hover ~ label {
    color: #6a6a6a;
  }
  .can-toggle input[type="checkbox"]:checked ~ label:hover {
    color: #55bc49;
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch {
    background-color: #70c767;
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    color: #4fb743;
  }
  .can-toggle input[type="checkbox"]:checked:focus ~ label .can-toggle__switch,
  .can-toggle input[type="checkbox"]:checked:hover ~ label .can-toggle__switch {
    background-color: #5fc054;
  }
  .can-toggle
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    color: #47a43d;
  }
  .can-toggle label .can-toggle__label-text {
    flex: 1;
  }
  .can-toggle label .can-toggle__switch {
    transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
    background: #848484;
  }
  .can-toggle label .can-toggle__switch:before {
    color: rgba(255, 255, 255, 0.5);
  }
  .can-toggle label .can-toggle__switch:after {
    transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
    color: #777;
  }
  .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch:after,
  .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    transform: translate3d(65px, 0, 0);
  }
  .can-toggle
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  }
  .can-toggle label {
    font-size: 14px;
  }
  .can-toggle label .can-toggle__switch {
    height: 36px;
    flex: 0 0 134px;
    border-radius: 4px;
  }
  .can-toggle label .can-toggle__switch:before {
    left: 67px;
    font-size: 12px;
    line-height: 36px;
    width: 67px;
    padding: 0 12px;
  }
  .can-toggle label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 2px;
    width: 65px;
    line-height: 32px;
    font-size: 12px;
  }
  .can-toggle label .can-toggle__switch:hover:after {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-small
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.can-toggle--size-small
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-small
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    transform: translate3d(44px, 0, 0);
  }
  .can-toggle.can-toggle--size-small
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.can-toggle--size-small
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-small label {
    font-size: 13px;
  }
  .can-toggle.can-toggle--size-small label .can-toggle__switch {
    height: 28px;
    flex: 0 0 90px;
    border-radius: 2px;
  }
  .can-toggle.can-toggle--size-small label .can-toggle__switch:before {
    left: 45px;
    font-size: 10px;
    line-height: 28px;
    width: 45px;
    padding: 0 12px;
  }
  .can-toggle.can-toggle--size-small label .can-toggle__switch:after {
    top: 1px;
    left: 1px;
    border-radius: 1px;
    width: 44px;
    line-height: 26px;
    font-size: 10px;
  }
  .can-toggle.can-toggle--size-small label .can-toggle__switch:hover:after {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-large
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.can-toggle--size-large
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-large
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    transform: translate3d(78px, 0, 0);
  }
  .can-toggle.can-toggle--size-large
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.can-toggle--size-large
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.can-toggle--size-large label {
    font-size: 14px;
  }
  .can-toggle.can-toggle--size-large label .can-toggle__switch {
    height: 50px;
    flex: 0 0 160px;
    border-radius: 4px;
  }
  .can-toggle.can-toggle--size-large label .can-toggle__switch:before {
    left: 80px;
    font-size: 14px;
    line-height: 50px;
    width: 80px;
    padding: 0 12px;
  }
  .can-toggle.can-toggle--size-large label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 2px;
    width: 78px;
    line-height: 46px;
    font-size: 14px;
  }
  .can-toggle.can-toggle--size-large label .can-toggle__switch:hover:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-1 input[type="checkbox"][disabled] ~ label {
    color: rgba(68, 68, 68, 0.5);
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch {
    background-color: #444;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    color: #2b2b2b;
  }
  .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label {
    color: #373737;
  }
  .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label:hover {
    color: #62b125;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch {
    background-color: #75d32d;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    color: #5da924;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch {
    background-color: #69be28;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    color: #52941f;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__label-text {
    flex: 1;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch {
    transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    background: #515151;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch:before {
    color: rgba(255, 255, 255, 0.7);
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch:after {
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    color: #444;
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    transform: translate3d(43px, 0, 0);
  }
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-1
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-1 label {
    font-size: 13px;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch {
    height: 28px;
    flex: 0 0 90px;
    border-radius: 60px;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch:before {
    left: 45px;
    font-size: 13px;
    line-height: 28px;
    width: 45px;
    padding: 0 12px;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 30px;
    width: 43px;
    line-height: 24px;
    font-size: 13px;
  }
  .can-toggle.demo-rebrand-1 label .can-toggle__switch:hover:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"][disabled] ~ label {
    color: rgba(68, 68, 68, 0.5);
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch {
    background-color: #444;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    color: #2b2b2b;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:hover ~ label {
    color: #373737;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked ~ label:hover {
    color: #62b125;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch {
    background-color: #75d32d;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    color: #5da924;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch {
    background-color: #69be28;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    color: #52941f;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__label-text {
    flex: 1;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch {
    transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    background: #515151;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {
    color: rgba(255, 255, 255, 0.7);
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    color: #444;
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    transform: translate3d(63px, 0, 0);
  }
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-2
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-2 label {
    font-size: 13px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch {
    height: 40px;
    flex: 0 0 130px;
    border-radius: 60px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {
    left: 65px;
    font-size: 13px;
    line-height: 40px;
    width: 65px;
    padding: 0 12px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 30px;
    width: 63px;
    line-height: 36px;
    font-size: 13px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:hover:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-3 input[type="checkbox"][disabled] ~ label {
    color: rgba(68, 68, 68, 0.5);
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch {
    background-color: #444;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    color: #2b2b2b;
  }
  .can-toggle.demo-rebrand-3 input[type="checkbox"]:hover ~ label {
    color: #373737;
  }
  .can-toggle.demo-rebrand-3 input[type="checkbox"]:checked ~ label:hover {
    color: #62b125;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch {
    background-color: #75d32d;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    color: #5da924;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch {
    background-color: #69be28;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    color: #52941f;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__label-text {
    flex: 1;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch {
    transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    background: #515151;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch:before {
    color: rgba(255, 255, 255, 0.7);
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch:after {
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    color: #444;
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked
    ~ label
    .can-toggle__switch:after {
    transform: translate3d(78px, 0, 0);
  }
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:focus
    ~ label
    .can-toggle__switch:after,
  .can-toggle.demo-rebrand-3
    input[type="checkbox"]:checked:hover
    ~ label
    .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .can-toggle.demo-rebrand-3 label {
    font-size: 14px;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch {
    height: 50px;
    flex: 0 0 160px;
    border-radius: 60px;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch:before {
    left: 80px;
    font-size: 14px;
    line-height: 50px;
    width: 80px;
    padding: 0 12px;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 30px;
    width: 78px;
    line-height: 46px;
    font-size: 14px;
  }
  .can-toggle.demo-rebrand-3 label .can-toggle__switch:hover:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
  .toggle-box {
    display: flex;
    flex-wrap: wrap;

    background: rgba(0, 0, 0, 0.2);
    margin: 3px;
    padding: 10px;
  }
  .squared-switch {
    display: inline-block;
    width: 176px;
    padding: 10px 10px 10px 5px;
  }
  .rounded-switch {
    display: inline-block;
    width: 176px;
    padding: 10px 5px 10px 10px;
  }
`;

const ToggleButtons = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Switch toggle</h1>
        </div>
        <div className="toggle-box row">
          <div className="squared-switch col-sm-6 col-xs-12">
            <div className="can-toggle can-toggle--size-small">
              <input id="b" type="checkbox" />
              <label for="b">
                <div
                  className="can-toggle__switch"
                  data-checked="On"
                  data-unchecked="Off"
                ></div>
              </label>
            </div>
            <br />
            <div className="can-toggle">
              <input id="a" type="checkbox" />
              <label for="a">
                <div
                  className="can-toggle__switch"
                  data-checked="On"
                  data-unchecked="Off"
                ></div>
              </label>
            </div>
            <br />
            <div className="can-toggle can-toggle--size-large">
              <input id="c" type="checkbox" />
              <label for="c">
                <div
                  className="can-toggle__switch"
                  data-checked="On"
                  data-unchecked="Off"
                ></div>
              </label>
            </div>
            <br />
          </div>

          <div className="rounded-switch col-sm-6 col-xs-12">
            <div className="can-toggle demo-rebrand-1">
              <input id="e" type="checkbox" />
              <label for="e">
                <div
                  className="can-toggle__switch"
                  data-checked="Yes"
                  data-unchecked="No"
                ></div>
              </label>
            </div>
            <br />
            <div className="can-toggle demo-rebrand-2">
              <input id="e2" type="checkbox" />
              <label for="e2">
                <div
                  className="can-toggle__switch"
                  data-checked="Yes"
                  data-unchecked="No"
                ></div>
              </label>
            </div>
            <br />
            <div className="can-toggle demo-rebrand-3">
              <input id="e3" type="checkbox" />
              <label for="e3">
                <div
                  className="can-toggle__switch"
                  data-checked="Yes"
                  data-unchecked="No"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default ToggleButtons;
