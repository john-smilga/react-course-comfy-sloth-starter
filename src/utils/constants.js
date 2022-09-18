import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our enthusiasm for the mrdern/contemporary furniture can not be beat. We bring you the best selection, style, and handcrafted quality.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Find ideas and inspiration for your design style to add to your home.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'similarities',
    text:
      'Each style of space is typically simple and uncluttered, opting for smooth lines and a little dash or artistic flavor. Both styles are calming and neutral with exposed wood, metals and glass.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
