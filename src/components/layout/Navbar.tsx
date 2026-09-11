import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY <= 60) setActive("");
    };

    const navbarHighlighter = () => {
      document.querySelectorAll("section[id]").forEach((current) => {
        const sectionId = current.getAttribute("id");
        const section = current as HTMLElement;
        const sectionTop = current.getBoundingClientRect().top - section.offsetHeight * 0.2;

        if (sectionTop < 0 && sectionTop + section.offsetHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-4 transition-all ${
        scrolled ? "bg-primary/90 shadow-xl backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="brand-mark" aria-hidden="true">HK</span>
          <p className="cursor-pointer text-[18px] font-bold text-white">
            {config.html.fullName}
          </p>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex list-none flex-row gap-7">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] font-medium transition-colors hover:text-white ${
                  active === nav.id ? "text-white" : "text-secondary"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <a className="nav-resume" href={config.html.resumePath} download>
            Résumé
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
          >
            <img src={toggle ? close : menu} alt="" className="h-7 w-7 object-contain" />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[210px] rounded-xl p-6 shadow-2xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a className="text-accent font-semibold" href={config.html.resumePath} download>
                  Download résumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
