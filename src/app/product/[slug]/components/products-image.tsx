'use client'

import Image from "next/image"
import { useState } from "react"

interface ProductsImageProps {
  name: string,
  imagesUrls: string[]
}

export function ProductsImage({ imagesUrls, name }: ProductsImageProps) {

  const [currentImage, setCurrentImage] = useState(imagesUrls[0])

  function handleImageClick(imageUrl: string) {
    setCurrentImage(imageUrl)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-accent h-[380px] w-full flex items-center justify-center">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain'
          }}
          priority
        />
      </div>


      <div className="grid grid-cols-3 gap-4 mt-8 px-5">
        {imagesUrls.map((imageUrl) => {
          return (
            <button key={imageUrl}
              className={`bg-accent rounded-lg  flex items-center justify-center h-[100px]
                  ${imageUrl === currentImage && "border-2 border-solid border-primary"}
                  `}
              onClick={() => handleImageClick(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={name}
                width={0}
                height={0}
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                sizes="100vw"
                style={{
                  objectFit: 'contain'
                }}
              />
            </button>
          )
        })}
      </div>
    </div >
  )
}
