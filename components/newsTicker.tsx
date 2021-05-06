import React from 'react';

import Ticker from 'react-ticker'


const newsItems = [
  {
  key: "newsItem1",
  label: "The quick brown fox jumps over the lazy dog",
  path: "/#"
  },
  {
    key: "newsItem2",
  label: "The quick brown fox jumps over the lazy dog",
  path: "/#"
  },
  {
    key: "newsItem3",
  label: "The quick brown fox jumps over the lazy dog",
  path: "/#"
  },
  {
    key: "newsItem4",
  label: "The quick brown fox jumps over the lazy dog",
  path: "/#"
  },
  {
    key: "newsItem5",
  label: "The quick brown fox jumps over the lazy dog",
  path: "/#"
  }
  ]




const NewsTicker = ()=> {

return(
<div id="ticker" className="container-fluid">
  <div className="row">
    <div className="tickerHead v-10 col-3 col-sm-2 col-md-2 col-lg-1 px-4">
      <span className="tickerTitle smallCaps">Latest News</span>
    </div>
    <div className="tickerMain col p-0">
    <Ticker>
      
    {({ index }) => (
              <><p className=" d-flex align-items-center v-10 justify-content-center">
              {newsItems.map(function(item){
                return (
                  
                  <a key={item.key} href={item.path} className="newsItem">{item.label}</a>
                  
                )
                })}
                </p>
              </>
          )}
    </Ticker>
    </div>
  </div>
</div>
)
}


export default NewsTicker