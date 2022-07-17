import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Result from "./Result";
import axios from "axios";

export default function Search(props) {
  const [data, setData] = useState(props?.location?.state?.searchValue);



  const apiKey = "AIzaSyCwkzge8d2YRf3a1hq2TWrzjCLn5rIkJE4";
  const cxKey = "c24df3559b293a859";

  const apiCalled = () =>{
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${data}`)
    .then(res=>{
     console.log(res)

    }).catch(error=>{
      console.log('code is in error',error)
    })
  }

  const handleKeyPress = (e) => {
    console.log("key code ",e.key)
    if (e.keycode === 13) {
      console.log("enter Clicked")
      apiCalled();
    }else{
      let res = e.target.value;
      setData(res);
    }
  }
  
  // useEffect(()=>{
  //   apiCalled();
  // },[data])
  

  return (
    <>
      <div className="search_main">
        <div className="search_hearder">
          <div className="img_search_filed">
            <div className="logo">
              <Link to="/">
                <img src="../../google.png" />
              </Link>
            </div>
            <div className="search_filed">
              <div className="form-group">
                <input
                  onChange={handleKeyPress}
                  type="text"
                  value={data}
                  className="form-control"
                />
              </div>
              <div className="action">
                {/* {data && (
                  <span onClick={()=>{setData('')}} className="close">
                    <AiOutlineClose />
                  </span>
                )} */}
                <span  className="close">
                    <AiOutlineClose />
                  </span>

                <span className="line"></span>
                <span>
                  <BsFillMicFill />
                </span>
                <span onClick={handleKeyPress}>
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="left_icons">
            <div className="icon">
              <span>
                <AiOutlineSetting />
              </span>
              <span>
                <BsGrid3X3Gap />
              </span>
            </div>
          </div>
        </div>
        <Result  />
      </div>
    </>
  );
}
