import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../features/indonesia/Indonesia";
import { addItems, removeItems } from "../../../features/saved/Saved";
import Card from "../../atoms/card/Card";

const Indonesia = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.articles.entities);
  const savedItems = useSelector((state) => state.saved.savedItems);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // console.log(allNews);
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
          Indonesia News
        </h2>
      <div className="row justify-content-center">
        {allNews.map((news, index) => {
          return (
            <div key={index} className="row col-4 justify-content-center">
              <Card
                key={index}
                source={news?.source.name}
                Image={news?.urlToImage}
                titleImg={news?.title}
                title={news?.title}
                author={news?.author}
                description={news?.description}
                publishedAt={news?.publishedAt}
                url={news?.url}
                onClick={() => {
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

export default Indonesia;