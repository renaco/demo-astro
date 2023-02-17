import React from 'react';

const NewsPapers = () => {
  const listContentArray = [
    " Cada sábadoUna revisión de los hechos que marcaron la semana. El newsletter con el análisis de nuestro Director Editorial General.Solo suscriptores",
    " DiarioEntérate antes que nadie de lo que encontrarás en nuestra portada y abre la conversación.Solo suscriptores",
    " DiarioTu guía para comprender el acontecer noticioso al arrancar el día.Ver el último Registrarse Agregado",
    " Cada domingoMantente actualizado(a) sobre la pandemia de Covid-19. Nuevas olas, vacunas y tratamientosVer el último Registrarse Agregado",
    " DiarioLo más destacado de nuestros columnistas y articulistas para que la mejor opinión la tengas tú.Ver el último Registrarse Agregado",
    " Cada viernesDile adiós al estrés de la semana con lo último en gastronomía, viajes, tecnología, autos y moda.Ver el último Registrarse Agregado",
    " SemanalQué hacen los aspirantes, cómo juegan sus cartas los partidos, qué pasa con el dinero. Seleccionamos los temas relevantes para electores y elegidos.Ver el último Registrarse Agregado",
    " DiarioLas IndispensablesVer el último Registrarse Agregado",
    " Cada juevesVive USA, tu mejor fuente de información para viajar, trabajar y vivir en Estados Unidos\tVer el último Registrarse Agregado",
    " JuevesRecomendaciones de series, películas y documentales para planear tu entretenimiento en los próximos 7 días. En el ruido de oferta en plataformas, cable y televisión seleccionamos de 3 a 5 opciones que valdrán tu tiempo.Ver el último Registrarse Agregado",
    " ViernesQatar 2022, el camino a la Copa del Mundo a través de la mirada de los editores deportivos de EL UNIVERSALVer el último Registrarse Agregado",
    " LunesDe pesos y centavos: tips, consejos y sugerencias que te ayudarán a tener un mejor manejo de tus finanzas personalesVer el último Registrarse Agregado"
  ]
  return (
    <div
      className="flex flex-col justify-center p-0 m-0 w-full text-black"
      style={{ outline: 0 }}
    >
      <h1
        className="block p-0 mx-0 mt-0 mb-1 w-full text-4xl font-normal border-t-4 border-solid text-sky-800"
        style={{
          content: '""',
          fontFamily: '"work sans"',
          letterSpacing: "-2px"
        }}
      >
        Newsletters
      </h1>
      <p
        className="p-0 m-0 text-2xl font-light text-black"
        style={{ outline: 0, fontFamily: '"work sans"', letterSpacing: "-1px" }}
      >
        Selecciona los boletines que quieres recibir y haz clic en Registrar. Si
        eres suscriptor inicia sesión para recibir los Newsletter Plus.
      </p>
      <div
        className="grid gap-4 p-0 mt-5 w-full text-black"
        id="newsletter_paywall"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", height: 910, outline: 0 }}
      >
        {listContentArray.map((summary, index) => (
          <div
            className="relative py-2 px-4 my-0 mx-auto text-black bg-white rounded-sm border border-solid border-neutral-200"
            style={{ height: 270, transition: "all 0.4s ease-out 0s" }}
          >
            <a
              href=""
              title=""
              className="flex p-0 my-0 mx-auto text-sky-800 hover:cursor-pointer"
              style={{ outline: 0, textDecoration: "none" }}
            >
              <img
                src="https://interactivo.eluniversal.com.mx/online/assets/images/imagenes-newsletter/al-filo-dias.png"
                alt="Newsletters"
                className="object-contain p-0 my-px mx-auto max-w-full h-16 rounded-sm cursor-pointer text-sky-800"
                style={{ outline: 0, filter: "saturate(1.15)" }}
              />
            </a>
            <p
              className="p-0 my-2 mx-0 text-base font-light text-black"
              style={{ outline: 0 }}
            >
              Cada sábado
            </p>
            <p
              className="overflow-hidden p-0 my-1 mx-0 text-base font-light text-black"
              style={{ outline: 0, maxHeight: 115 }}
            >
              {summary}
            </p>
            <a
              className="inline-block absolute p-0 my-2 mx-0 text-base font-normal text-sky-700 hover:cursor-pointer hover:text-sky-700"
              href="http://newsletter.eluniversal.com.mx/newsletter/latest-news?type=4"
              title=""
              style={{
                outline: 0,
                textDecoration: "none",
                bottom: 4,
                letterSpacing: "-1px"
              }}
            >
              Ver el último
            </a>
            <button
              data-id={index}
              className="inline-grid absolute py-1 px-2 m-0 font-sans text-xs text-center text-black bg-white rounded-lg border border-solid border-stone-300 hover:cursor-pointer hover:bg-neutral-600"
              id="btnadd7"
              style={{
                outline: 0,
                bottom: 8,
                gridTemplateColumns: "15px 1fr",
                right: 11
              }}
            >+</button>
          </div>
        ))}
      </div>
    </div>

  )
};

export default NewsPapers;
