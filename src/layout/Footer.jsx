import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='footer'>
      <p>&copy; <span id="copyright-year">{new Date().getFullYear()}</span> Emil Blichfeldt Alle rettigheder forbeholdes.</p>
    </footer>
  )
}

export default Footer