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
  const [data, setData] = useState(props.location.state.searchValue);
  const [searchData, setSearchData] = useState({
    searchResults:[],
    searchInfo:[]
  });




  const apiKey = "AIzaSyCwkzge8d2YRf3a1hq2TWrzjCLn5rIkJE4";
  const cxKey = "c24df3559b293a859";

  const apiCalled = async () =>{
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${data}`)
    .then(res=>{
     setSearchData(prevState => ({
      ...prevState,
      searchResults: res.data.items,
      searchInfo: res.data.searchInformation
    }));
     
     
    }).catch(error=>{
      console.log('code is in error',error)
    })
  }

  const keyPress = async (e) =>{
    if (e.key === "Enter") {
      await apiCalled();
    }
  }

  const handleKeyPress = (e) => {
    setData(e.target.value)
  }
  
  useEffect(()=>{
    apiCalled();
  },[])

 

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
                  onKeyPress={keyPress}
                  type="text"
                  value={data}
                  className="form-control"
                />
              </div>
              <div className="action">
                {data && (
                  <>
                  <span onClick={()=>{setData('')}} className="close">
                    <AiOutlineClose />
                  </span>
                  <span className="line"></span>
                  </>
                )}
                
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
        <Result  searchData={searchData} />
      </div>
    </>
  );
}
