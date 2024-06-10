
import DetailsPage from '@/components/template/detailsPage';
import Session from '@/utils/session';

const Details = async ({params}) => {
  let session = await Session()
    let {details} = params;
    let getData = await fetch(`http://localhost:4014/data/${details}`)
    let data = await getData.json();

  return <DetailsPage data={data} session={session}/>
}

export default Details;