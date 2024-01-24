import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/popular'
import { Offer } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
