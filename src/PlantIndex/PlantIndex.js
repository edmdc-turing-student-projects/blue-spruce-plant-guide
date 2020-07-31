import React from 'react'

export default function PlantIndex(plantCatalog) {
  const plantInfoCards = plantCatalog.map((plant, index) => {
    const {
      id, common_name, scientific_name, image_url
    } = plant
    return (
      <figure id={id} key={index} className={styles.plantCard}>
        <img className={styles.plantImage} src={`${image_url}`} alt={`${common_name}`} />
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
