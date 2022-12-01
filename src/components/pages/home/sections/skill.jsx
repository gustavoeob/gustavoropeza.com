import React from "react";
import "./skill.scss"

const Skill = ({ name, img }) => {
  return (
    <div className="skill-container">
      <h3 className="skill-name">{name.toLowerCase()}</h3>
      <img src={img} alt=""className={`${name.toLowerCase()}-logo skill-image`}  />
    </div>
  );
};

export default Skill;
