import React from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

interface IPropsBaseSlide {
  children: React.ReactNode;
}

const BaseSlide = ({ children }: IPropsBaseSlide) => {
  const deckDivRef = React.useRef<HTMLDivElement>(null);
  const deckRef = React.useRef<Reveal.Api | null>(null);

  React.useEffect(() => {
    if (deckRef.current) return;

    if (deckDivRef.current) {
      deckRef.current = new Reveal(deckDivRef.current, {
        transition: "slide",
        embedded: true,
      });
      deckRef.current.initialize().then(() => {});
    }

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.log(e);
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
};

export default BaseSlide;
