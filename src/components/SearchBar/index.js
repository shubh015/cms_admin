import React from "react";
// import "../page/Home.css";
import { useSelector } from "react-redux";


const Search = () => {
  const posts = useSelector((state) => state);

  return (
    <>
      <div className="col gap-bt">
        <div className="row g-0 ">
          {posts.results.search.articles?.length > 0 ? (
            posts.results.search.articles?.map((item, idx) => {
              return (
                <div
                  className="col-md-3 col-6 row-gapping hwt-ad"
                  key={new Date().getTime() + idx}
                >
                  <div className="card ">
                    <img
                      src={item?.urlToImage}
                      style={{ aspectRatio: "3/2", objectFit: "cover" }}
                      className="card-img-top"
                      variant="top"
                      alt="..."
                    />
                    <a href={item.url} target="__blank">
                      <h5 className="card-title">
                        {item?.title.slice(0, 30)}...
                      </h5>
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <>
                <h1 style={{textAlign: 'center', fontSize: '16px'}}>Please Search again! <br /> No Result Found!</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
