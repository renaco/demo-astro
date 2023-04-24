import React from 'react'
import type { Kiosko } from './type'

const Item = ({url, image, alt, date, title}: Kiosko) => {
  return (
    <div
    className="p-0 mx-0 mt-0 mb-10 border-b border-solid border-stone-500 text-sky-800"
    style={{ outline: 0 }}
  >
    <a
      href={url}
      target="_blank"
      className="p-0 m-0 text-sky-800 hover:cursor-pointer hover:text-sky-800"
      style={{ outline: 0, textDecoration: "none", height: 191 }}
    >
      {" "}
      <img
        className="inline p-0 m-0 w-full border border-solid cursor-pointer border-neutral-400 text-sky-800 kiosko-image"
        src={image}
        alt={alt}
      />
    </a>
    <p
      className="p-0 my-2 mx-0 text-sm font-light text-stone-500"
      style={{ outline: 0 }}
    >
      {date}
    </p>
    <h2
      className="p-0 mx-0 mt-0 mb-2 text-xl font-bold leading-6 text-black kiosko-title"
    >
      <a
        href={url}
        target="_blank"
        className="p-0 m-0 text-xl font-bold leading-6 text-sky-800 hover:cursor-pointer hover:text-sky-800"
        style={{ outline: 0, textDecoration: "none" }}
      >
        {title}
      </a>
    </h2>
  </div>
  )
}

export default Item
