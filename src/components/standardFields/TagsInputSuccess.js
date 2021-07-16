import React, { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .tags-input {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 48px;
    width: 95%;
    padding: 0 8px;
    border: 1px solid #d6d8da;
    border-radius: 6px;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
  }
  /* .tags-input:focus-within {
    border: 1px solid #0052cc;
  } */
  .tags-input input {
    border: none;
    height: 30px;
    font-size: 14px;
    padding: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 90px;
    max-width: 150px;
    color: #fff;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }
  }
  .tags-input input:focus {
    outline: transparent;
  }
  .tags-input input:not(:placeholder-shown) {
    background: rgba(0, 252, 108, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  #tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  .tag {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: rgba(0, 252, 108, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .tag .tag-title {
    margin-top: 3px;
  }
  .tag .tag-close-icon {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  @media screen and (max-width: 567px) {
    .tags-input {
      width: calc(100vw - 32px);
    }
  }
`;

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <DIV>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                <i className="far fa-times-circle"></i>
              </span>
            </li>
          ))}
        </ul>
        <input
          className="add-tagsInput"
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Add tag"
        />
      </div>
    </DIV>
  );
};
export default TagsInput;
