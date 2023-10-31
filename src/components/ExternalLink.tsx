import { IconLink } from '@insurely/ui';
import React, { ReactElement } from 'react';

interface ExternalLinkProps {
  url: string;
  text: string;
}

export default function ExternalLink({ url, text }: ExternalLinkProps): ReactElement {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 600,
      }}
    >
      <IconLink aria-hidden width="32px" color="var(--green)" />
      {text}
    </a>
  );
}
