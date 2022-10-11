import { useRouter } from "next/router";

type Props = {
  lang: string;
};

const LangLink = ({ lang }: Props) => {
  const router = useRouter();
  return (
    <span
      className="lang-link uppercase"
      onClick={() => {
        router.push("/", "/", { locale: lang });
      }}
    >
      {lang}
    </span>
  );
};

export default LangLink;
