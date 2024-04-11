import Card from '@/components/module/card';
import ComboboxFilterLow from '@/components/module/comboboxFilterLow';
import { SelectDemo }  from '@/components/module/navigation';
import React from 'react'

const Dress = async () => {
    let getData = await fetch('http://localhost:4002/data')
    let data = await getData.json();

    const staticData = [
        {
            title : 'سایز',
            option : ['تمامی سایزها' , 'S' , 'M' , 'L' , 'XL' , '2XL']
        },
        {
            title : 'رنگ',
            option :['تمامی رنگ ها' , 'قرمز' , 'آبی' , 'سفید' , 'مشکی' ,  'طوسی' , 'سبز' , 'قهوه‌‌ای' , 'زرد' , 'نارنجی' ,  'بنقش']
        },
        {
            title : 'فروشنده',
            option : ['تمامی فروشنده ها' , 'پارس استایل' , 'کالزینو' , 'لباسینا']
        },
    ]
  return (
    <div>
        <div className='mt-40 mx-10 flex justify-evenly'>
            <SelectDemo staticData={staticData}/>
            <div className='flex text-center'>
                قیمت
                <ComboboxFilterLow />
            </div>
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