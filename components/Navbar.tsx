import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/session';
import ProfileMenu from './ProfileMenu';


const Navbar = async () => {

    const session = await getCurrentUser();

  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image src="/logo7.svg" width={180} height={73} alt="Artificer" />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flex-center gap-4'>
            {session?.user ? (
                <>
                    <ProfileMenu session={session} />
                    
                </>
            ) : (
                <AuthProviders />
            )}
        </div> 

        <div className='flex-center gap-4'>
            {session?.user ? (
                <>
                    
                    <Link href="/create-project">
                        <Image src="/upload2.svg" width={40} height={40} alt='upload' />
                    </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div> 

    </nav>
  )
}

export default Navbar;
