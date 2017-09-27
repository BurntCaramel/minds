import React from 'react'

const style = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}

const UnsplashImage = ({
  keyword,
  width = 800,
  height = 600
}) => (
  <img
    style={ style }
    alt={ keyword }
    src={`https://source.unsplash.com/${width}x${height}?${keyword}>`}
    width={ width }
    height={ height }
  />
)

export default UnsplashImage