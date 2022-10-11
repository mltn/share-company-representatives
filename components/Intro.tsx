type Props = {
  locale: string;
};

const Intro = ({ locale }: Props) => {
  return (
    <header
      id="header"
      className="text-white mx-auto my-[61px] px-[30px] w-[calc(100%_-_60px)] max-w-[890px]"
    >
      <h1
        className={
          " font-[Foundry] uppercase font-bold my-4 " +
          " text-[36px] sm:text-[40px] md:text-[50px] " +
          " tracking-[-2px] sm:tracking-[-1px] md:tracking-normal "
        }
      >
        {locale === "sr" ? "Predstavnici" : "Representatives"}
      </h1>
      <h2 className="font-[Foundry] text-[24px] font-bold leading-6 my-4">
        {locale === "sr"
          ? "Zahtevaj svoja prava, zaštiti svoje podatke"
          : "Demand your rights, protect your data"}
      </h2>
      {locale === "sr" ? (
        <div className="text-justify leading-6">
          <p className="mb-[10px]">
            Ovde se mogu naći kontakti predstavnika stranih kompanija u Srbiji,
            kojima se građani mogu obratiti da ostvare svoja zakonska prava kao
            što su pristup, brisanje, prenos i druga prava u odnosu na lične
            podatke.
          </p>
          <p className="mb-[10px]">
            Strane kompanije koje prikupljaju podatke građana Srbije, dužne su
            da imenuju predstavnike u našoj zemlji kojima se građani mogu
            obratiti da bi ostvarili svoja prava. Ta obaveza je na snazi od
            avgusta 2019. godine, kada je počela primena novog{" "}
            <a
              className="font-bold underline"
              href="https://www.paragraf.rs/propisi/zakon_o_zastiti_podataka_o_licnosti.html"
              target="_blank"
            >
              Zakona o zaštiti podataka o ličnosti
            </a>
            .
          </p>
          <p className="mb-[10px]">
            SHARE Fondacija je u maju 2019, pre početka primene novog zakona,
            pozvala{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/sr/share-poziva-facebook-i-google-da-odrede-svoje-predstavnike-u-srbiji/"
              target="_blank"
            >
              20 velikih kompanija
            </a>{" "}
            da izvrše ovu obavezu i imenuju svoje predstavnike u Srbiji. Nakon
            imenovanja predstavnika kompanije “Google” u Srbiji, zabeležen je{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/sr/internet-ipak-moze-da-zaboravi/"
              target="_blank"
            >
              prvi uspešan slučaj ostvarivanja prava na zaborav
            </a>
            . Protiv onih koje nisu ispunile obaveze po našem zakonu,{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/sr/share-prijave-protiv-16-globalnih-tehno-kompanija/"
              target="_blank"
            >
              podnete su prekršajne prijave
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="text-justify leading-6">
          <p className="mb-[10px]">
            Here you can find contact information of foreign companies in
            Serbia, which can be contacted by the citizens in order to exercise
            their legal rights such as the right to access, deletion, data
            portability and other personal data related rights.
          </p>
          <p className="mb-[10px]">
            Foreign companies collecting personal data of citizens of Serbia are
            obligated to appoint their representatives in our country so that
            the citizens can contact them regarding their rights. This
            obligation stands since August 2019, when the application of the new{" "}
            <a
              className="font-bold underline"
              href="https://www.paragraf.rs/propisi/zakon_o_zastiti_podataka_o_licnosti.html"
              target="_blank"
            >
              Law on Personal Data Protection
            </a>{" "}
            started.
          </p>
          <p className="mb-[10px]">
            In May 2019, before the start of application of the new law, SHARE
            Foundation called upon{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/en/share-calls-facebook-and-google-to-appoint-their-representatives-in-serbia/"
              target="_blank"
            >
              20 large companies
            </a>{" "}
            to fulfil this obligation and appoint their representatives in
            Serbia. After Google appointed its local representative, the{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/sr/internet-ipak-moze-da-zaboravi/"
              target="_blank"
            >
              first successful case of exercising the right to be forgotten
            </a>{" "}
            was recorded in Serbia. Complaints{" "}
            <a
              className="font-bold underline"
              href="https://www.sharefoundation.info/sr/share-prijave-protiv-16-globalnih-tehno-kompanija/"
              target="_blank"
            >
              were filed
            </a>{" "}
            against companies which failed to fulfil this obligation under
            Serbian law.
          </p>
        </div>
      )}
    </header>
  );
};

export default Intro;
