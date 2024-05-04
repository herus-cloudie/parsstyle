import Card from '@/components/module/card';
import FilterSearch from '@/components/module/filterSearch';
import NoResult from '@/components/module/noResult';
import SheetFilter from '@/components/module/sheetFilter';
import SheetSearch from '@/components/module/sheetSearch';
import { Button } from '@/components/ui/button';

const Dress = async ({searchParams}) => {
    let getData = await fetch('https://parssyle-api.vercel.app/data')
    let data = await getData.json();

    function filterData(data, searchParams) {
        let filteredData = data;
        if (searchParams.search) {
        filteredData = filteredData.filter(item => item.title.includes(searchParams.search))
        }
        if (searchParams.color) {
            filteredData = filteredData.filter(item => item.color.includes(searchParams.color));
        } if (searchParams.color) {
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
        if (searchParams.off == 'yes') {
            filteredData = filteredData.filter(item => item.discount != 'no');
        }
        return filteredData;
    }

    let filter = filterData(data , searchParams)
  return (
    <div>
        <div className='text-center mt-20 sm:mt-32 flex flex-col sm:flex-row sm:justify-between items-center border-b'>
            <div className='my-8 border-b-4 border-black w-36 pb-2 sm:mr-20 text-start text-4xl' style={{color : '#333'}}>محصولات</div>
            <div className='flex justify-center sm:justify-between sm:w-1/2 w-full pb-5 sm:pb-0'>
                <div className='ml-8'><SheetSearch><Button>جستجو</Button></SheetSearch></div>      
                <div className='sm:ml-20'><SheetFilter /></div>
            </div>
        </div>
        
        <div className="flex justify-evenly flex-wrap mt-4">
            
            {
                filter.length > 0 ?
                filter.map(item => (
                    <Card key={item.id} discount={item.discount} price={item.price} seller={item.seller} category={item.category} title={item.title} sizes={item.size} colors={item.color} img={item.img} id={item.id}/>
                ))  
                :
                <NoResult />
            }
        </div>
    </div>
  )
}

export default Dress