import React from "react"
import "./d-s-prod-copy-icon.scss"

const DSProdCoppyIcon = () => {

    /* Functions */
    const copyPageUrl = () => {
        const pageUrl = window.location.href
        navigator.clipboard.writeText(pageUrl)
          .then(() => {
            alert('Page URL copied to clipboard successfully!');
          })
          .catch(err => {
            console.error('Failed to copy the page URL: ', err);
            alert('Failed to copy the URL.');
          });
    }

    /* JSX */
    return (
        <div
            onClick={copyPageUrl}
            className="d-s-prod-copy-icon-container">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M35 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H35C37.7614 40 40 37.7614 40 35V5C40 2.23858 37.7614 0 35 0Z" fill="black"/>
                <path d="M25 13H11C9.89543 13 9 13.8954 9 15V29C9 30.1046 9.89543 31 11 31H25C26.1046 31 27 30.1046 27 29V15C27 13.8954 26.1046 13 25 13Z" fill="black"/>
                <path d="M25 14C25.55 14 26 14.45 26 15V29C26 29.55 25.55 30 25 30H11C10.45 30 10 29.55 10 29V15C10 14.45 10.45 14 11 14H25ZM25 12H11C9.34 12 8 13.34 8 15V29C8 30.66 9.34 32 11 32H25C26.66 32 28 30.66 28 29V15C28 13.34 26.66 12 25 12Z" fill="white"/>
                <path d="M28.99 9H18.99C17.8854 9 16.99 9.89543 16.99 11V21C16.99 22.1046 17.8854 23 18.99 23H28.99C30.0946 23 30.99 22.1046 30.99 21V11C30.99 9.89543 30.0946 9 28.99 9Z" fill="black"/>
                <path d="M28.99 10C29.54 10 29.99 10.45 29.99 11V21C29.99 21.55 29.54 22 28.99 22H18.99C18.44 22 17.99 21.55 17.99 21V11C17.99 10.45 18.44 10 18.99 10H28.99ZM28.99 8H18.99C17.33 8 15.99 9.34 15.99 11V21C15.99 22.66 17.33 24 18.99 24H28.99C30.65 24 31.99 22.66 31.99 21V11C31.99 9.34 30.65 8 28.99 8Z" fill="white"/>
            </svg>
        </div>
    )
}

export default DSProdCoppyIcon