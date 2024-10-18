import React from "react";

export default function ProfilePicture() {
  const imageURL = "./src/assets/me.jpg";
  const handleClick = (e) => (e.target.style.display = "none");
  return(
    <>
      <img onClick={(e) => handleClick(e)} src={imageURL}></img>
      <p onClick={(e)=>handleClick(e)}>Click on image</p>
    </>
  ) ;
}
