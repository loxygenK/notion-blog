import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'cd ~', page: '/' },
  { label: 'ls ~/post/', page: '/blog' },
  { label: 'write flisan', page: '/contact' },
  { label: 'cd ~/source/', link: 'https://github.com/loxygenK/notion-blog' },
]

const ogImageUrl = '/background.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>visitor@flisan:{titlePre ?? '~'} - browser</title>
        <meta name="description" content="Flisan's blog." />
        <meta name="og:title" content="blog view --user flisan" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@loxygen_k" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
