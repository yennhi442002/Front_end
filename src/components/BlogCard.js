import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className='blog-card'></div>
            <div className='card-image'>
                <img src='image/blog-1.jpg' className='img-fluid' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>
                    <p className='date'>10 th6, 2023</p>
                    <h5 className='title'>
                        <h2>  Demo
                        </h2>
                    </h5>
                    <p className='desc'>Check Check</p>
                    <Link to='' className='button'>Read More</Link>
                </p>
            </div>

        </div>
    )
}

export default BlogCard
