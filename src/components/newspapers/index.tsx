import React from 'react';

const NewsPapers = () => {
  const data = [1, 3, 4, 5];
  return (
    <div
      className="p-0 mx-auto mt-0 mb-5 w-full max-w-full font-sans newspaper-container"
      style={{
        outline: 0,
        display: "-webkit-inline-flex",
        gridColumnEnd: "span 12"
      }}
    >
      {data.map((item, index) => {
        return (
          <article
            className="flex flex-col justify-center p-0 my-0 mx-auto"
            style={{ outline: 0 }}
            key={index}
          >
            <a
              href="https://www.viveusa.mx"
              target="_blank"
              rel="bookmark"
              className="p-0 m-0 hover:cursor-pointer hover"
              style={{ outline: 0, textDecoration: "none" }}
            />
            <img
              className="inline overflow-hidden p-0 w-full h-40 cursor-pointer"
              src="https://www.eluniversal.com.mx/sites/default/files/styles/255x170_bloque_hiperlocales/public/2023/02/14/portada_demi_rose_grosby_bikini_gris.jpg?itok=2rDO6cI3"
              alt="Demi Rose usa vestido transparente de estrella casi 'imposible de llevar'"
              style={{
                display: "inline",
                outline: 0,
                filter: "saturate(1.15)",
                maxWidth: 255
              }}
            />
            <h3
              className="py-1 px-0 m-0 text-lg not-italic font-semibold tracking-tight leading-6 text-left text-black"
              style={{ outline: 0 }}
            >
              <a
                href="https://www.viveusa.mx/showbiz/demi-rose-usa-vestido-transparente-de-estrella-casi-imposible-de-llevar/"
                target="_blank"
                className="p-0 m-0 text-lg font-semibold tracking-tight leading-6 text-left text-black hover:cursor-pointer hover"
                style={{ outline: 0, textDecoration: "none", wordBreak: "break-word" }}
              >
                Demi Rose usa vestido transparente de estrella casi 'imposible de
                llevar'
              </a>
            </h3>
          </article>
        )
      })}
    </div>
  )
};

export default NewsPapers;
