import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({ title, links } : ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) =><Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <Image 
                    src="/logo7.svg"
                    width={150}
                    height={50}
                    alt="Flexibble"
                />

                <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                    Our community serves creators to show their projects worldwide.
                    We help them grow and get hired.
                </p>
            </div>
            <div className='flex flex-wrap gap-12'>

                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>

                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
                    <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
                </div>

                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>

                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
                    <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
                </div>

                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>

            </div>
        </div>

        <div className='flexBetween footer_copyright'>
            <Link href="https://github.com/nipun221">
                <p>Folllow my profile @Nipun Vats</p>
            </Link>
            <Link href="https://github.com/nipun221/grafbase_pro">
                <Image src="/github.svg" width={40} height={40} alt='github' />
                <p>Liked my work? Give it a star</p>
            </Link>
        </div>

    </footer>
  )
}

export default Footer;