const Footer = () => {
  const name = 'Haroon Khan';
  const email = 'hello@example.com';
  const phone = '+92 300 1234567';

  return (
    <footer className="border-t border-[#222726] bg-[#101312] font-sans text-[13px] text-[#9aa5a1]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-7 text-center sm:flex-row sm:text-left">
        <p>
          {name} © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-white"
          >
            {email}
          </a>
          <span className="h-[3px] w-[3px] rounded-full bg-[#3a413f]" />
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="transition-colors hover:text-white"
          >
            {phone}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;