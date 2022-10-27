import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchNews } from "../../../features/search/Search";
import Search from "./Search.svg";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  console.log(query);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchNews(query));

    if (query <= 0) {
      navigate("/");
    } else {
      navigate(`/search/?q=${query}`, { replace: true });
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
        <div className='flex bg-light-3 justify-center'>
          <label className="flex gap">
          <input
            type="text"
            placeholder="type to search..."
            onChange={(e) => setQuery(e.target.value)}
            className="bg-light text-light-2 focus:outline-none me-2"
          /> 
          <img src={Search} /> 
          </label>   
           </div>       
        </form>
      </div>   
    </>
  );
};

export default NewsSearch;
