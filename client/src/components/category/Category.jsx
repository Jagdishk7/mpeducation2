import React from 'react'
import SimpleCard from '../Cards/SimpleCard'
import './Category.css'
import { CategoryContent } from './CategoryContent'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='mt-2 p-3 category-container'>
      <Link to={'/playschool'}><SimpleCard head={CategoryContent.playSchools.head} desc={CategoryContent.playSchools.desc.slice(0,110)+'...'}/></Link>
      <Link to={'/BoardingSchools'}><SimpleCard head={CategoryContent.boardingSchools.head} desc={CategoryContent.boardingSchools.desc.slice(0,110)+'...'}/></Link>
      <Link to={'/CollegesUniversities'}><SimpleCard head={CategoryContent.collegesUniversities.head} desc={CategoryContent.collegesUniversities.desc.slice(0,110)+'...'}/></Link>
      <Link to={'/coachings'}><SimpleCard head={CategoryContent.coachings.head} desc={CategoryContent.coachings.desc.slice(0,110)+'...'}/></Link>
      <Link to={'/TechnicalInstitutes'}><SimpleCard head={CategoryContent.technicalInstitutes.head} desc={CategoryContent.technicalInstitutes.desc.slice(0,110)+'...'}/></Link>
      <Link to={'/SoftwareInstitutes'}><SimpleCard head={CategoryContent.softwareIt.head} desc={CategoryContent.softwareIt.desc.slice(0,110)+'...'}/></Link>
    </div>
  )
}

export default Category
