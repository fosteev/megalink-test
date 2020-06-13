import React from 'react';
import './style.css';
import ExternalLink from '../../../../images/external-link.svg';

const links = [
    'Shipping Information',
    'Recommended Reading for Buyers',
    'Privacy & Security'
]

export default function Footer() {
    return (
        <footer className={'Footer'}>
            <div>
                <span className="Footer__header">
                    Helpful Links
                </span>

                {
                    links.map(text => (
                        <div key={text} className="Footer__helpfullink">
                            <img src={ExternalLink} alt=""/>
                            <span>{text}</span>
                        </div>
                    ))
                }
            </div>
        </footer>
    )
}
