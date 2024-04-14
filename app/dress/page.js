import Card from '@/components/module/card';
import FilterPrice from '@/components/module/filterPrice';
import { NavigationFilter }  from '@/components/module/navigationFilter';

const Dress = async ({searchParams}) => {
    let getData = await fetch('http://localhost:4006/data')
    let data = await getData.json();

    function filterData(data, searchParams) {
        let filteredData = data;
    
        if (searchParams.color) {
            filteredData = filteredData.filter(item => item.color.includes(searchParams.color));
        }
    
        if (searchParams.size) {
            filteredData = filteredData.filter(item => item.size.includes(searchParams.size));
        }
    
        if (searchParams.low && searchParams.high) {
            filteredData = filteredData.filter(item => item.price >= +searchParams.low && item.price <= +searchParams.high);
        } else if (searchParams.low) {
            filteredData = filteredData.filter(item => item.price >= +searchParams.low);
        } else if (searchParams.high) {
            filteredData = filteredData.filter(item => item.price <= +searchParams.high);
        }
    
        if (searchParams.seller) {
            filteredData = filteredData.filter(item => item.seller.includes(searchParams.seller));
        }
        if (searchParams.sex) {
            filteredData = filteredData.filter(item => item.sex == searchParams.sex ||  item.sex == 'none');
        }
        
        return filteredData;
    }

    let filter = filterData(data , searchParams)


  return (
    <div>
        <div className='text-center'>
            <div className='mt-24 sm:mx-10 flex flex-col' style={{borderBottom:' 1px solid #00000030'}}>
                <div className='flex text-center flex-col'>
                    <FilterPrice />
                </div>
                <div className='mt-10 mb-8 mx-10 flex gap-4 justify-evenly items-end'>
                   <NavigationFilter/> 
                </div>
            </div>
        </div>
        <div className="flex justify-evenly flex-wrap mt-4">
            {
                filter.length > 0 ?
                filter.map(item => (
                    <Card key={item.id} price={item.price} seller={item.seller} category={item.category} title={item.title} sizes={item.size} colors={item.color} img={item.img} id={item.id}/>
                ))  
                :
                <p className='text-xl text-stone-500 mb-52 mt-10'>متاسفانه محصولی با این مشخصات پیدا نکردیم!</p>
            }
        </div>
    </div>
  )
}

export default Dress