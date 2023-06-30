import React from 'react'
import './Dropdown.css';

const Dropdown = () => {
  return (
    <div className='dropdown-container'>
      <select name="" id="">
        <option value="Play Schools">Play Schools</option>
        <option value="Day Schools">Day Schools</option>
        <option value="Boarding Schools">Boarding Schools</option>
        <option value="Colleges & Universities">Colleges & Universities</option>
      </select>

      <select name="" id="">
        <option value="Minds eye play school">Minds eye play school</option>
        <option value="Mansarovar Play School">Mansarovar Play School</option>
        <option value="Sumati Academy">Sumati Academy</option>
        <option value="Delhi Public School">Delhi Public School</option>
      </select>
      <button className='dropdown-button'>Search</button>
    </div>
  )
}

export default Dropdown
