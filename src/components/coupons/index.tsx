import React from 'react';

const Coupons = () => {

  const coupons = [
    "\n\n\n\n\n\n\ncodigo promocional Nike \n\n\n\n\nHasta 30% off + 20% extra + promos exclusivas en los Member Days de Nike \n\n\n\nLo quiero\n\n",
    "\n\n\n\n\n\n\nCupon adidas México \n\n\n\n\nCupon adidas del 15% OFF + envío gratis para miembros adiclub \n\n\n\nLo quiero\n\n",
    "\n\n\n\n\n \n\nCupon SHEIN \n\n\n\n\nOfertas SHEN con 90% de descuento en variedad de artículos \n\n\n\nLo quiero\n\n",
    "\n\n\n\n\n\n\nCupón Walmart \n\n\n\n\n$450 mxn de bonificación en toda la tienda con cupón Walmart ¡Solo hoy! \n\n\n\nLo quiero\n\n",
    "\n\n\n\n\n\n\nCupon Cyberpuerta \n\n\n\n\nEl Universal te regala $100 pesos para tu compra con este cupón Cyberpuerta \n\n\n\nLo quiero\n\n"
  ]
  return (
    <div
      className="grid my-2 mx-0 w-full max-w-full font-sans text-sky-800 coupons__container"
    >
      <h2
        className="py-2 px-0 mb-2 w-full text-normal font-bold text-white bg-sky-800 coupons__title"
      >
        Cupones de descuento El Universal:
      </h2>
      {coupons.map((item, index) => {
        return (
          <div
            key={index}
            className="grid rounded-md border border-dashed border-zinc-400 text-sky-800 coupons__item"
          >
            <a
              href="https://www.eluniversal.com.mx/descuentos/nike"
              title="codigo promocional Nike"
              target="_blank">
              <img
                className="inline object-scale-down w-full h-40 text-sky-800 coupons__image"
                src="https://www.eluniversal.com.mx/descuentos/static/shop/18633/logo/Nike.jpg"
                alt="Nike"
              />
            </a>
            <div className="h-36 coupons__content">
              <h2
                className="flex justify-center items-center py-2 px-0 mt-2.5 mb-5 w-full h-8 font-sans text-base text-white bg-white"
                style={{ gridColumn: "1 / 6", outline: 0, textIndent: 15 }}
              >
                <a
                  href="https://www.eluniversal.com.mx/descuentos/nike"
                  title="codigo promocional Nike"
                  target="_blank"
                  className="p-0 m-0 font-sans font-bold leading-5 text-center text-black hover:cursor-pointer hover:text-sky-800"
                  style={{ outline: 0, textDecoration: "none", textIndent: 15 }}
                >
                  codigo promocional Nike
                </a>
              </h2>
              {/* <hr
                className="p-0 my-0 mx-auto w-11/12 h-0 border-t-0 border-b border-dashed border-x-0 border-stone-300 text-sky-800"
                // style={{ outline: 0, borderWidth: 0 }}
              /> */}
              <hr
                className="p-0 my-0 mx-auto w-11/12 h-0 border-b border-dashed cursor-pointer border-zinc-400 text-sky-800"
                // style={{ outline: 0, borderWidth: 0 }}
              />
              <h3
                className="px-1 pt-2 pb-0 mx-0 mt-0 mb-1 h-full font-sans text-sm font-normal leading-5 text-center lg:text-left uppercase text-neutral-600"
                style={{ gridColumn: "der / der" }}
              >
                <a
                  href="https://www.eluniversal.com.mx/descuentos/nike"
                  title="codigo promocional Nike"
                  target="_blank"
                  className="p-0 m-0 font-sans text-sm leading-5 text-black uppercase hover:cursor-pointer hover:text-sky-800"
                  style={{ outline: 0, textDecoration: "none" }}
                >
                  Hasta 30% off + 20% extra + promos exclusivas en los Member Days de Nike
                </a>
              </h3>
            </div>
            <div
              className="p-2 my-2 mx-auto w-2/3 font-sans text-sm font-semibold text-center rounded-lg border border-black border-dashed text-sky-700 hover:cursor-pointer hover:bg-sky-700 hover:text-white leading-3 no-underline coupons__button"
              // style={{ gridColumn: "der / der", textDecoration: "none" }}
            >
              <a
                href="https://www.eluniversal.com.mx/descuentos/nike"
                title="codigo promocional Nike"
                target="_blank"
                className="p-0 m-0 font-sans text-sm font-semibold text-center hover:cursor-pointer"
              // style={{ outline: 0, textDecoration: "none" }}
              >
                Lo quiero
              </a>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default Coupons;