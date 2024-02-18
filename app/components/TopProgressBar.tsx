'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import React from 'react'

const TopProgressBar = () => {
  return (
    <>
      <ProgressBar height="2px" color="#1B4DFF" options={{ showSpinner: false }} />
    </>
  )
}

export default TopProgressBar
