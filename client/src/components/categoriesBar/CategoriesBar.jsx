import React from 'react'
import"./_categoriesBar.scss";

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',


] 
const CategoriesBar = () => {

  const [ActiveElement, setActiveElement] = React.useState("All");
  const handleClick = (value) => { 
    setActiveElement(value);
  }
  return <div className="CategoriesBar">
    {keywords.map((value, i) => (
      <span 
      onClick={() => handleClick(value)}
      
      key={i}
      className={ActiveElement===value ? 'active' : ''}
      >{value}</span>
    ))}
  </div>
}

export default CategoriesBar
