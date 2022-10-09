type Props = {
  email: string;
};

const RepEmail = ({ email }: Props) => {
  const TEXT_OVERFLOW_LENGTH = 35;
  if (email.length >= TEXT_OVERFLOW_LENGTH) {
    // adding <wbr/> so the text breaks
    const [user, domain] = email.split("@");
    return (
      <a className="rep-email" href={`mailto:${email}`}>
        {user}
        <wbr />
        {"@" + domain}
      </a>
    );
  }
  return (
    <a className="rep-email" href={`mailto:${email}`}>
      {email}
    </a>
  );
};

export default RepEmail;
