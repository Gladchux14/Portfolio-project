import React from 'react'
const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gladchux14'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/GladChukwu?t=mdR5oNnt86PUwGkJKuiiXw&s=09'
    },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/glad-chukwu-0ba162245'
    }
  ]

const Sociallinks = ({ light = false }) => {
  return (
    <div className="flex items-center gap-4">
    {socialLinks.map(socialLink => (
      <a key={socialLink.name} href={socialLink.url} aria-label={socialLink.name}>
        <img
          src={`/icons/${socialLink.name.toLowerCase()}${light ? '-light' : ''}.svg`}
          alt={`${socialLink.name} logo`}
          aria-hidden="true"
        />
      </a>
    ))}
  </div>
  )
}

export default Sociallinks;