import React from 'react';
import { Contact } from '../types/Contact';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

type Props = {
  contact: Contact;
};

const ContactCard: React.FC<Props> = ({ contact }) => {
  const {
    name: devName,
    image,
    motto,
    linkedIn,
    github,
    email,
    telegramLink,
  } = contact;

  return (
    <article
      className="card box-border p-8 relative
        flex flex-col gap-4
        border rounded-lg
        min-w-[272px] max-w-[335px]
        bg-white-light text-primary-light dark:text-primary-dark
        dark:bg-gray-surface dark:border-none
        hover:shadow-card dark:hover:shadow-card-dark"
    >
      <a href={linkedIn} target="_blank" className="self-center">
        <img
          alt={devName}
          src={require(`../assets/images/team/${image}`)}
          className="w-[210px] h-[210px] object-cover rounded-full"
        />
      </a>

      <h2 className="font-bold text-xl">{devName}</h2>

      <ul className="text-secondary-light dark:text-secondary-dark">
        <li>
          <a
            href={linkedIn}
            className="flex gap-2 items-center
              hover:text-secondary-accent-light
              dark:hover:text-secondary-accent-dark"
            target="_blank"
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={github}
            className="flex gap-2 items-center
              hover:text-secondary-accent-light
              dark:hover:text-secondary-accent-dark"
            target="_blank"
          >
            <FiGithub />
            Github
          </a>
        </li>
        <li>
          <a
            href={`mailto:${email}`}
            className="flex gap-2 items-center
              hover:text-secondary-accent-light
              dark:hover:text-secondary-accent-dark"
          >
            <FiMail />
            Email
          </a>
        </li>
        <li>
          <a
            href={telegramLink}
            className="flex gap-2 items-center
              hover:text-secondary-accent-light
              dark:hover:text-secondary-accent-dark"
            target="_blank"
          >
            <FiSend />
            Telegram
          </a>
        </li>
      </ul>

      <p>{motto}</p>
    </article>
  );
};

export default ContactCard;
