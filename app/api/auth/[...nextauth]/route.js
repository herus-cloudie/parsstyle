import ConnectDataBase from "@/utils/connectDataBase";
import {ParsStyleUser} from "@/utils/model";
import { compare } from "bcryptjs";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    
    providers: [
      Credentials({
        async authorize(state , req){
          let {email , password} = state;
          try {
              await ConnectDataBase()
          } catch (err) {
              throw new Error('problem at connecting to (DB) line 19 | nextAuth')
          }
          let user = await ParsStyleUser.findOne({Email : email})
          if(!user) throw new Error(`User doesn't exist`)
          if(!await compare(password , user.Password)) throw new Error('Password in not correct')
          return {email : email}
        }
      })
    ]
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }