import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  console.log(mousePosition)

  useEffect(() => {

    const onMouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const mouseVariant = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12
    }
  }


  return <>
    <motion.div className='cursor' variants={mouseVariant} animate='default' />
  </>
}