import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { about } from '../../portfolio';
import TypingEffect from '../TypingEffect/TypingEffect';

import './About.css';

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          <TypingEffect text={`Hi, I am ${name}.`} typingSpeed={100} pauseTime={2000} />
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">

        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label="github" className="link link--icon">
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
