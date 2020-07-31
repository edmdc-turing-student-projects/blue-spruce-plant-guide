import React from 'react'

export default function PlantIndex({ plantCatalog }) {
  const plantInfoCards = plantCatalog.map((plant) => {
    const {
      id, common_name, scientific_name, image_url
    } = plant
    return (
      <figure key={id} className="plantCard">
        <img
          className="plantImage"
          src={`${image_url}`}
          alt={`${common_name}`}
        />
        <figcaption>
          <p><b>{`${common_name}`}</b></p>
          <p><i>{`${scientific_name}`}</i></p>
        </figcaption>
      </figure>
    )
  })
  return (
    <>
      {plantInfoCards}
    </>
  )
}

