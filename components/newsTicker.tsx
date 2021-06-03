import React from 'react';

import Ticker from 'react-ticker'


const newsItems = [
  {
  key: "newsItem1",
  label: "Nearly half of world’s biggest companies factoring cost of carbon into business plans",
  path: "https://corporateknights.us9.list-manage.com/track/click?u=892426d3668c65028353738b1&id=02852faa6f&e=822a1e6250"
  },
  {
    key: "newsItem2",
  label: "Study finds Canadians may not take climate change as personally as their peers",
  path: "https://corporateknights.us9.list-manage.com/track/click?u=892426d3668c65028353738b1&id=011c20a181&e=822a1e6250"
  },
  {
    key: "newsItem3",
  label: "If a tree talks in the forest, does it make a sound?",
  path: "https://ehn.us16.list-manage.com/track/click?u=73be43273a8ebb733ab2696c7&id=2a0a82f09a&e=0a6997d30d"
  },
  {
    key: "newsItem4",
  label: "Nature is critical to slowing climate change, but it can only do so if we help it first",
  path: "https://ehn.us16.list-manage.com/track/click?u=73be43273a8ebb733ab2696c7&id=2aede13c1a&e=0a6997d30d"
  },
  {
    key: "newsItem5",
  label: "Environmentalists ‘up in arms’ about Finnish-Swedish defence of forest industry",
  path: "https://www.euractiv.com/section/politics/short_news/environmentalists-up-in-arms-about-finnish-swedish-defence-of-forest-industry/"
  },
  {
    key: "newsItem6",
  label: "“B.C. announces plans to redistribute forest tenures to small operators, Indigenous communities”",
  path: "https://www.cbc.ca/news/canada/british-columbia/b-c-announces-plans-to-update-and-modernize-forestry-policy-1.6049137"
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
                  
                  <a key={item.key} href={item.path} target="_blank" className="newsItem" >{item.label}</a>
                  
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