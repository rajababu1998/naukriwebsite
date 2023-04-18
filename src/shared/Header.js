import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className='head'>
        <h2 className='head1 text-center'>www.resultbabu.com</h2>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Link className='x' to="/home">Home</Link>
                <Link className='x' to="/latestjob" >Latest Job</Link>
                <Link className='x' to="/results" >Results</Link>
                <Link className='x' to="/admitcard" >Admit Card</Link>
                <Link className='x' to="/answerkey" >Answer Key</Link>
                <Link className='x' to="/syllabus" >Syllabus</Link>
                <Link className='x' to="/search" >Search</Link>
                <Link className='x' to="/contactus" >Contact us</Link>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header