import React from 'react';

// const todaydate=new Date();

const Footer = ({length}) => {
  return (
    <p>{length} List {length===1 ? "item":"items"}</p>
    // <div>Copyright  todays date is &copy {todaydate.getFullYear}</div>
  )
}

export default Footer;