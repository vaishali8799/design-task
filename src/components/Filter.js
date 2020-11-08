import React from 'react'
import './Filter.css'

const Filter = () => {
    const languages=['English','French','German','Hindi','Arabic','Mandarin Chinese']
    const price =['Free','Less than $25','$25-$50','$50-$100','More than $100']
    const session=['30 min','60 min','15min']
    return (
        <div className="left-box">
          <div><div className="head heading">EXPERTISE</div>
              <div className="search"><div className="tags1">Branding X</div><div><i class="fa fa-search searchI" aria-hidden="true"></i></div></div>
              <div className="tags2">Strategy X</div>
          </div>
          <div><div className="head heading">FOCUS AREA</div>
          <div className="search"><div className="tags1">Focus Area X</div><div className="tags1">Focus Area X</div><div className="searchI"><i class="fa fa-search " aria-hidden="true"></i></div></div>
          </div>
          <div><div className="head heading">RATINGS</div>
          <div className="ratings">
              <div className="row1">
                  <div><span className="checkbox"><input type="checkbox"/></span>⭐⭐⭐⭐</div>
                  <div><span className="checkbox"><input type="checkbox"/></span>⭐⭐⭐</div>
              </div>
              <div className="row2">
                  <div><span className="checkbox"><input type="checkbox"/></span>⭐⭐⭐</div>
                  <div><span className="checkbox"><input type="checkbox"/></span>⭐⭐</div>
              </div>
              </div>
          </div>
          <div className="price">
          <ul> <div className="head">PRICE</div>{price.map((value,index)=>{
                  return<li key={index}><span className="checkbox"><input type="checkbox"/></span>{value}</li>})}</ul>
          </div>
          <div className="session">
          <ul><div className="head">SESSION AVAILABILITY</div>{session.map((value,index)=>{
                  return<li key={index}><span className="checkbox"><input type="checkbox"/></span>{value}</li>})}</ul>
          
          </div>
          <div className="language">
              <ul><div className="head">LANGUAGE</div>{languages.map((value,index)=>{
                  return<li key={index}><span className="checkbox"><input type="checkbox"/></span>{value}</li>})}</ul>
          </div>
          <div style={{color:"#29c7ac"}}>MORE</div>
        </div>
    )
}

export default Filter
