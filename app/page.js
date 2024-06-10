

import HomePage from "@/components/template/homePage";

export default async function Home() {
  let getData = await fetch(`http://localhost:4014/data`)
  let data = await getData.json();
  return <HomePage data={data}/>;
}
