/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from 'react-scroll'
import { useRef } from 'react'
import Timeline from '../components/TimeLine'
import Gallery from '../components/Gallery'
import styles from './Index.module.css'
import useObserve from '../hooks/useObserve';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BookIcon from '@mui/icons-material/Book'
import PublicIcon from '@mui/icons-material/Public'

export default function Index() {

  return (
    <>
      <section className={styles['body-section']}>
        <header>
          <div className={styles['heroHeader']}>
            <div className={styles['hero-container']}>
              <div className={styles['hero-content']}>
                <h1 className={styles['hero-title']}>Welcome To CSITSS-2025</h1>
                <p className={styles['subtitle']}>
                  9<sup>th</sup> International Conference on Computational
                  Systems and Information Technology for Sustainable Solutions
                </p>
                <p className={styles['organizer-name']}>
                  <p className={styles['organizer-intro']}>Organised by</p>
                  <h1>
                    R V College of Engineering
                    <sup className={styles['small-sup']}>®</sup>
                  </h1>
                </p>

                <div className={styles['button-container']}>
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['action-button']}
                  >
                    <span>Submit Paper</span>
                  </a>
                  <a
                    href="CSITSS 2024 Brochure.pdf"
                    className={styles['action-button']}
                    download
                  >
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className={styles['organizer-banner']}>
          <p className={styles['organizer-text']}>
            Advancing Technology for {' '}
            <span className={styles['organizer-highlight']}>Humanity</span>
          </p>
        </div>

        <div className={styles['info-grid']}>
          {[
            {
              icon: <CalendarMonthIcon />,
              title: 'Date',
              subtitle: 'November 20-22, 2025',
              color: 'red',
            },
            {
              icon: <LocationOnIcon />,
              title: 'Venue',
              subtitle: 'R V College of Engineering',
              color: 'yellow',
            },
            {
              icon: <BookIcon />,
              title: 'Editions',
              subtitle: '8 successful editions of CSITSS',
              color: 'green',
            },
            {
              icon: <PublicIcon />,
              title: 'Participation',
              subtitle: 'Researchers from around the world',
              color: 'blue',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${styles['info-card']} ${styles[item.color]}`}
            >
              <div className={styles['icon-wrapper']}>{item.icon}</div>
              <h2 className={styles['info-title']}>{item.title}</h2>
              {item.subtitle && (
                <p className={styles['info-subtitle']}>{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <section>
          <div className={styles['about-container']}>
            <div className={styles['about-content']}>
              <h2 className={styles['section-title']}>About CSITSS</h2>

              <p>
                The 9<sup>th</sup> International Conference on Computational
                Systems and Information Technology for Sustainable Solutions
                (CSITSS — 2025) aims to bring together leading academicians,
                scientists, researchers, industry professionals, postdoctoral
                fellows, and research scholars from around the world.
              </p>

              <p>
                The conference will focus on knowledge exchange in fields like
                <strong>
                  {' '}
                  Green Electronics, Renewable Energy, Robotics and Automation,
                  Photonics, Artificial Intelligence, Cyber-Physical Systems,
                  Quantum Mechanics, and Computing
                </strong>
                .
              </p>

              <p>
                CSITSS — 2025 will take place from <strong>November 20<sup>th</sup> to 22<sup>th</sup>, 2025</strong>
                , serving as a global platform for researchers to showcase their
                work and collaborate.
              </p>

              <p>
                For the past seven years, the conference has successfully
                attracted participants from across India and abroad, ensuring
                high-quality discussions and networking opportunities.
              </p>

              <p>
                All{' '}
                <strong>peer-reviewed, selected, and presented papers</strong>{' '}
                will be submitted for possible inclusion in the{' '}
                <strong>IEEE digital library</strong>, providing global
                visibility to the research community.
              </p>

              <p>
                Renowned <strong>international speakers</strong> will deliver
                <strong> keynote talks</strong> on cutting-edge advancements in
                these domains, enriching the conference experience.
              </p>
            </div>
          </div>
        </section>

        <Element name="test4" className="element">
          <div className={styles['timeline-container']}>
            <Timeline />
          </div>
        </Element>

        <section className={styles['venue-section']}>
          <div className={styles['venue-container']}>
            <h2 className={styles['venue-title']}>Venue</h2>

            <div className={styles['venue-content']}>
              <div className={styles['map-container']}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
                  width="100%"
                  height="400"
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className={styles['image-container']}>
                <img
                  src="./map2.jpg"
                  alt="Venue related image"
                  className={styles['venue-image']}
                  onClick={() => {
                    const modal = document.getElementById('modal')
                    if (modal) modal.classList.remove('hidden')
                  }}
                />
              </div>
            </div>

            <div className={styles['venue-actions']}>
              <a
                className={styles['venue-button']}
                href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
              >
                <span className={styles['venue-button-text']}>Open Maps</span>
                <svg
                  className={styles['venue-button-icon']}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a className={styles['venue-button']} href="HOTELS.pdf">
                <span className={styles['venue-button-text']}>
                  Download Hotels List Near RVCE
                </span>
                <svg
                  className={styles['venue-button-icon']}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

          </div>
        </section>

        <div className={styles['gallery-container']}>
          <h1>
            <span className={styles['gallery-title']}>
              Previous Conference Images
            </span>
          </h1>
          <Gallery />
        </div>
      </section>
    </>
  )
}
