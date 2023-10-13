import React from 'react';

const todaydate=new Date();

const Footer = () => {
  return (
    <div>Copyright  todays date is &copy; {todaydate.getFullYear()}</div>
  )
}

export default Footer