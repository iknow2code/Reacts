import React from 'react'
import "./footer.scss"

function Footer() {
  return (
  
    <div className="footer">
        <footer>
            <p align="center">
                All Rights Reserved. &copy; {new Date().getFullYear()} 
                <br />Developed by <a href="https://www.github." target="_blank" rel="noreferrer">Prashant Bhandari</a>
            </p>

     
        </footer>
    </div>
  )
}

export default Footer
