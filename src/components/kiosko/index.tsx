import React from 'react'
import Item from './item'
import type { Kiosko } from './type'

const data = await fetch('http://localhost:9999/items')
  .then((res) => res.json())

const Kiosko = () => {
  return (
    <div
      className="p-0 my-0 mx-auto text-sky-800"
      style={{ outline: 0, maxWidth: 1080 }}
    >
      <h2
        className="p-0 m-0 text-2xl font-black text-center text-black uppercase"
        style={{ outline: 0 }}
      >
        Kiosko digital
      </h2>
      <p
        className="p-0 mx-0 mt-0 mb-5 text-xl font-semibold text-center text-neutral-400"
        style={{ outline: 0 }}
      >
        Suplementos Especiales
      </p>
      <div
        className="grid p-0 text-sky-800 kiosko-container"
      >
        {data.map((kiosko: Kiosko, index: number) => {
          return (
            <Item
              key={index}
              url={kiosko.url}
              image={kiosko.image}
              alt={kiosko.alt}
              date={kiosko.date}
              title={kiosko.title}
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default Kiosko
