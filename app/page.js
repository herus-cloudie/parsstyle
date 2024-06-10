

import HomePage from "@/components/template/homePage";

export default async function Home() {
  let getData = await fetch(`https://parsstyle-api.vercel.app/data`)
  let data = await getData.json();
  return <HomePage data={data}/>;
}
