import React, { useState } from 'react';
import * as value from './data';
import './index.css'

const App = () => {
  const [data, setData] = useState(value.dataJS);

  const handleClickTipBtn = (iNow) => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.info[iNow].showTip = true;
    setData(newData);
  };

  const getDom = (list) => {
    return (
      <ul>
        {
          list.map((i, iNow) => {
            return <li key={i.title}>
              <h4>{i.title}</h4>
              <div>
                {
                  !i.showTip ?
                    <button
                      onClick={() => handleClickTipBtn(iNow)}
                    >
                      show Tip
                    </button>
                    :
                    i.tip
                }
                {
                  i.showTip && i.imgs &&
                    <div>
                      {
                        i.imgs.map((item) => <img key={item.key} src={item.url} alt="" />)
                      }
                    </div>
                }
              </div>
              {
                i.links &&
                  <p>
                    <i>相关链接 —— </i>
                    {
                      i.links.map((ele) => <a key={ele.link} href={ele.link} target= "blank">{ele.desc}</a>)
                    }
                  </p>
              }
            </li>
          })
        }
      </ul>
    );
  };

  return (
    <>
      <div className="search-quick">
        <button onClick={() => setData(value.dataJS)}>js</button>
        <button onClick={() => setData(value.dataReact)}>react</button>
        <button onClick={() => setData(value.dataCss)}>css</button>
        <button onClick={() => setData(value.dataHtml)}>html</button>
      </div>
      <h2>{data.type}</h2>
      { getDom(data.info) }
    </>
  );
};

export default App; 
