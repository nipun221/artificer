import { getServerSession } from 'next-auth';
import { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { SessionInterface, UserProfile } from '@/common.types';
import { createUser, getUser } from './actions';
import { AdapterUser } from '@auth/core/adapters';

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
        async signIn({ user } : { user: AdapterUser | User }) {
            try {
                const userExists = await getUser(user?.email as string) as { user?: UserProfile }

                if (!userExists.user) {
                    await createUser(user.name as string, user.email as string, user.image as string);
                }

                return true;
            } catch (error: any) {
                console.log(error);
                return false;
            }
        }
    }
}

export async function getCurrentUser() {
    const session = await getServerSession(AuthOptions) as SessionInterface;

    return session;
}

