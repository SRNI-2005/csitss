import styles from './Navbar.module.css'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'
import Accordion from "./Accordion/Accordion"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const standaloneLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact Us' },
]

const accordionGroups = [
  {
    title: 'About Us',
    links: [
      { url: '/about', title: 'About' },
      { url: '/committee', title: 'Committee' },
    ],
  },
  {
    title: 'Conference',
    links: [
      { url: '/speakers', title: 'Speakers' },
      { url: '/papers', title: 'Call for Papers' },
      { url: '/awards', title: 'Awards' },
      { url: '/tracks', title: 'Tracks' },
    ],
  },
  {
    title: 'Participation',
    links: [
      { url: '/registration', title: 'Registration' },
      { url: '/sponsorship', title: 'Sponsors' },
    ],
  },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles['navbar']}>
      <div className={styles['logo']}>
        <h2>CSITSS-2025</h2>
      </div>
      <nav className={styles['nav-links']}>
        {standaloneLinks.map((link) => (
          <div className={styles['nav-link']} key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
        {accordionGroups.map((accordion)=>(
          <Accordion title={accordion.title} links={accordion.links}/>
        ))}
      </nav>
      <div className={styles['user-info']}>
        <div className={styles['user-theme']} onClick={() => toggleTheme()}>
          {theme === 'light' ? <LightModeIcon /> : ''}
          {theme === 'dark' ? <DarkModeIcon /> : ''}
        </div>
        <div className={styles['user-icon']}>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
