import * as React from 'react';

interface EmailTemplateProps {
  confirmationLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmationLink,
}) => (
  <div>
    <h1>Bem vindo, Confirme seu email <a href={confirmationLink}> clicando aqui</a> </h1>
  </div>
);
