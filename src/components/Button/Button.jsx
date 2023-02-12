import { LinkBasic } from './Button.styled';

const ButtonLink = ({ onClick, name = '', href = '', children }) => {
  return (
    <LinkBasic
      onClick={onClick}
      // href={href} name={name}
    >
      {children}
    </LinkBasic>
  );
};

export { ButtonLink };
