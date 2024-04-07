import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
            console.log(credentials)
          return {}
        }
      })
    ]
}

export default NextAuth(authOptions)