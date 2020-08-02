import React from 'react'
import PropTypes from 'prop-types'
import styles from './PlantIndex.scss'

export default function PlantIndex({ plantCatalog }) {
  const plantInfoCards = plantCatalog.map((plant) => {
    const {
      id, common_name, scientific_name, image_url
    } = plant
    return (
      <figure key={id} className={styles.plantCard}>
        <img
          className={styles.plantImage}
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
    <section className={styles.plantIndex}>
      {plantInfoCards}
    </section>
  )
}

PlantIndex.propTypes = {
  plantCatalog: PropTypes.array.isRequired
}
