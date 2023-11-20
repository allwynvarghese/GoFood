import React from 'react';
import Navbar from '../compnents/Navbar';
import Footer from '../compnents/Footer';
import Card from '../compnents/Card';
import Carousel from '../compnents/Carousel';

export default function Home() {
    return (
        <div>
            <div><Navbar/></div>
            <div><Carousel/></div>
            <div className='m-3'><Card/></div>
            <div><Footer /></div>
        </div>
    )
}
