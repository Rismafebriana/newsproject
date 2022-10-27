import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../../../features/saved/Saved";
import Card from "../../atoms/card/Card";

const Saved = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
  };

  return (
    <>
    <div className='text-center'>
        <h2 className='mt-2 text-lg fw-bold fs-5'>
          Saved News
        </h2>
      <div className="row justify-content-center">
        {savedItems.map((news, index) => {
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
                  handleToRemove(news);
                }}
                buttonName=
                <p className="text-around">
                  Un save
                </p>
              />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Saved;