import Image, { ImageProps } from "next/image";

export function PromoBanner({ alt, ...props }: ImageProps) {
  return (
    <Image
      className="h-auto w-full p-5"
      sizes="100vw"
      width={0}
      height={0}
      alt={alt}
      {...props}
    />
  )
}
