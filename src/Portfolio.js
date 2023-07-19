import React from 'react'
import Masonry from '@mui/'

function Portfolio() {
  return (
    <div>
        <Masonry columns={4} spacing={2}>
            {heights.map((height, index) => (
                <Item key={index} sx={{ height }}>
                {index + 1}
                </Item>
            ))}
        </Masonry>
    </div>
  )
}

export default Portfolio