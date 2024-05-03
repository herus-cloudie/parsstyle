
import DetailsPage from '@/components/template/detailsPage';

const Details = async ({params}) => {
    
    let {details} = params;
    let getData = await fetch(`http://localhost:4009/data/${details}`)
    let data = await getData.json();

  return <DetailsPage data={data}/>
}

export default Details;