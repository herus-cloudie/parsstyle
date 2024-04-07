import Card from '@/components/card';
import React from 'react'

const Dress = async () => {
    let getData = await fetch('http://localhost:4002/data')
    let data = await getData.json();
  return (
    <div>
        <div>
            <h5></h5>
        </div>
    <div className="flex justify-evenly flex-wrap mt-20">
        {
            data.map(item => (
                <Card price={item.price} category={item.category} title={item.title} sizes={item.size} colors={item.color} img={item.img} id={item.id}/>
            ))
        }
    </div>
    </div>
  )
}

export default Dress