import React from 'react'

const inspect = (input, message = '') => {
  console.log(message, input)
  return input
}

const Slider = ({
  items,
  currentIndex,
  offsetFraction,
  ItemComponent,
  handlers: {
    previous,
    next
  }
}) => (
  <div
    style={{
      width: '100%',
      overflow: 'hidden'
    }}
  >
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        position: 'relative',
        left: `${(offsetFraction) * -100}%`, //inspect(`${(offsetFraction) * -100}%`, { currentIndex, offsetFraction }),
        width: `${ (items.length + 1) * 100}%`
      }}
    >
    {
      items.concat(items[0]).map((item, index) => (
        <div key={ index } onClick={ next } style={{ width: '100%' }}>
          <ItemComponent key={ index } { ...item } />
        </div>
      ))
    }
    </div>
    <button onClick={ previous }>Previous</button>
    <button onClick={ next }>Next</button>
  </div>
)

export default Slider