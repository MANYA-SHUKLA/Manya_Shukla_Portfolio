"use client"
import React from 'react'
import styles from '@/styles/SocialSection.module.css';
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialcard}
        onClick={() => window.open('https://mail.google.com/mail/u/1/#inbox?compose=new', '_blank')}
      >
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>shuklamanya99@gmail.com</p>
      </div>

      <div className={styles.socialcard}
        onClick={() => window.open('https://www.linkedin.com/in/manya-shukla99/', '_blank')}
      >
        <SocialIcon url="https://linkedin.com/in/manya-shukla99/" style={{ height: 40, width: 40 }} />
        <p>MANYA SHUKLA</p>
      </div>
    </div>

  )
}

export default SocialSection