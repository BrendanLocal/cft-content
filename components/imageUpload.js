import React, { useEffect } from 'react'
import { FaTrash, FaArrowCircleUp } from 'react-icons/fa'

function ImageUpload({
  imageSrc,
  setImageSrc,
  handleImageSelect,
  style = {
    backgroundColor: 'gold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    /* overflow: hidden; */
    position: 'relative',
    zIndex: '99',
    boxShadow: '0 4px 3px rgba(0, 0, 0, 0.356)',
    marginBottom: '0.5rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '3rem'
  }
}) {
  useEffect(() => {
    if (!imageSrc === null) {
      throw new Error('please provide an imageSrc property!')
    } else if (!setImageSrc) {
      throw new Error('please provide an setImageSrc property!')
    } else if (!handleImageSelect) {
      throw new Error('please provide an handleImageSelect property!')
    }
  }, [])
  return (
    <div
      style={{
        width: style.width || 500,
        height: style.height || 300,
        position: 'relative',
        borderRadius: style.borderRadius
      }}
    >
      
      
        
          <input
            type='file'
            name='photo'
            className='create-book-photo-input _2SsMH'
            placeholder='select the book photo'
            style={{
              width: '100%',
              height: '100%'
            }}
            accept='image/*'
            onChange={handleImageSelect}
            onClick={(event) => {
              event.target.value = null
            }}
          />
      </div>
  )
}

export default ImageUpload