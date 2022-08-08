import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

export default function EditOnGithubButton({ link, text }) {
  return (
    // TODO: add docs link
    // TODO: add docs title i18n
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="before:hidden opacity-100 transform transition duration-300 ease-in-out hover:opacity-80 flex justify-items-end items-center before:hidden hover:before:hidden"
    >
      <Icon name="github" width="14" className="fill-opposite" />
      <p className="pl-2 mb-0 text-sm text-substrateDark dark:text-white">{text}</p>
    </a>
  );
}
