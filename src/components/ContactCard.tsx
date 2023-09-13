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
        border border-secondary rounded-lg
        min-w-[272px]
        bg-white text-primary
        hover:shadow-card"
    >
      <a href={linkedIn} target="_blank">
        <img
          alt={devName}
          src={require(`../assets/images/team/${image}`)}
          className="w-[210px] h-[210px] object-cover rounded-full self-center"
        />
      </a>

      <h2 className="font-bold text-xl">{devName}</h2>

      <ul className="text-secondary">
        <li>
          <a
            href={linkedIn}
            className="flex gap-2 items-center hover:text-secondary-accent"
            target="_blank"
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={github}
            className="flex gap-2 items-center hover:text-secondary-accent"
            target="_blank"
          >
            <FiGithub />
            Github
          </a>
        </li>
        <li>
          <a
            href={`mailto:${email}`}
            className="flex gap-2 items-center hover:text-secondary-accent"
          >
            <FiMail />
            Email
          </a>
        </li>
        <li>
          <a
            href={telegramLink}
            className="flex gap-2 items-center hover:text-secondary-accent"
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
