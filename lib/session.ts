import { getServerSession } from 'next-auth';
import { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { type Adapter } from "@auth/core/adapters"

export const AuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    /*jwt: {
        encode: ({ secret, token }) => {

        },
        decode: ({ secret, token }) => {

        }
    },*/
    theme: {
        colorScheme: 'light',
        logo: '/logo.png',
    },
    callbacks: {
        async session({ session }) {
            return session;
        },
        async signIn({ user } : { user: Adapter | User }) {
            try {
                return true;
            } catch (error: any) {
                console.log(error);
                return false;
            }
        }
    }
}