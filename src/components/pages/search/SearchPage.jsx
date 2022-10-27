import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../../../features/saved/Saved";
import Card from "../../atoms/card/Card";

const Search = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saved.savedItems);
  const searchNews = useSelector((state) => state.search.entities);

  const getSearchParams = () => {
    const query = window.location.query;
    const params = new URLSearchParams(query);

    const searchParams = params.get("q");
    return searchParams;
  };

  // console.log(searchNews);
  const handleToSaved = (item) => {
    dispatch(addItems(item));
  };

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <>
    <div className='text-center'>
        <h2 className='mt-2 text-lg fw-bold fs-5'>
          Search Results
        </h2>
      <div className="row justify-content-center">
        {searchNews.map((news, index) => {
          return (
            <div key={index} className="row col-4 justify-content-center">
              <Card
                source={news?.source.name}
                Image={news?.urlToImage}
                titleImg={news?.title}
                title={news?.title}
                author={news?.author}
                description={news?.description}
                publishedAt={news?.publishedAt}
                url={news?.url}
                onClick={() => {
                  // handleToRemove(news);
                  savedItems?.find((item) => item.title === news.title)
                    ? handleToRemove(news)
                    : handleToSaved(news);
                }}
                buttonName={
                  savedItems?.find((item) => item.title === news.title) ? (
                    <p className="text-around">Un save</p>
                  ) : (
                    <p className="text-around">Save</p>
                  )
                }
              />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Search;