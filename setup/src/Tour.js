import React, { useState } from 'react';

const Tour = ({id,image,info,price,name , removeTour}) => {

  const[readMore,setReadMore] = useState(false);
  const ComaNumbers = new Intl.NumberFormat('en-IN')
//console.log(internationalNumberFormat.format(givenNumber)) 
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">Rs {ComaNumbers.format(parseInt(price.replaceAll(',','')) * 100)}/-</h4>
      </div>
      <p>{readMore?info:`${info.substring(0,200)}...`} <button onClick={()=>{
        setReadMore(!readMore)
      }}>{readMore?'showless':'readmore'}</button></p>
      
      <button className='delete-btn' onClick={()=>{
        removeTour(id)
      }}>not intrested</button>
    </footer>

  </article>;
};

export default Tour;


