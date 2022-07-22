import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";


export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();
  const searchData = (e) => {
    e.preventDefault();
    if (searchValue != '' || e.key === "Enter")
      history.push({ pathname: "/search", state:{ searchValue } });
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      if (searchValue != '')
        history.push({ pathname: "/search", state: { searchValue } });
    }
  };
  return (
    <>
      <div className="main">
        <div className="google_img">
          <img src="../../google.png" />
        </div>
        <div className="search_section">
          <div className="icons">
            <div className="search_icon">
              <span>
                <AiOutlineSearch />
              </span>
            </div>
            <div className="form-group">
              <input
                onKeyPress={keyPress}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="voice">
              <span>
                <BsFillMicFill />
              </span>
            </div>
          </div>
          <div className="search_btn">
            <button onClick={searchData} className="btn">
              Google Search
            </button>
            <button className="btn">I'm Feeling Lucky </button>
          </div>
        </div>
        <footer>
          <div className="top-footer">India</div>
          <div className="bottom-footer">
            <ul>
              <li>About</li>
              <li>Advertising</li>
              <li>Business</li>
              <li>How Search works</li>
            </ul>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
