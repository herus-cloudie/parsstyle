import ProfilePage from "@/components/template/profilePage"
import Session from "@/utils/session"
import { redirect } from "next/navigation"

const Profile = async () => {
  const session = await Session()
  if(!session) redirect('/')
  
  return <ProfilePage />
}

export default Profile