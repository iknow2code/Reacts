import React from 'react'
import "./footer.scss"

function Footer() {
  return (
  
    <div className="footer">
        <footer>
            <p>
                All Rights Reserved. &copy; {new Date().getFullYear()} 

            </p>
            <p>
                Developed by <a href="https://www.github." target="_blank" rel="noreferrer">Prashant Bhandari</a>
            </p>
        </footer>
    </div>
  )
}

export default Footer
