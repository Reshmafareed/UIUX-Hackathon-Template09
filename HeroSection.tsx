import React from 'react'

const HeroSection = () => {
  return (
    <div>
         <div className="flex overflow-hidden flex-col justify-center p-4 border-white border-solid border-[16px] min-h-screen">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbb13549fe90e8405f3648a06015678afcde8aac2fbe355924ce271b9f5e32db?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
    className="object-contain w-full aspect-[2] max-md:max-w-full max-md:aspect-square sm:aspect-[2] lg:aspect-[2.5] xl:aspect-[3]"
    alt="Featured content showcase"
    tabIndex={0}
    aria-label="Hero section featured image"
  />
</div>
    </div>
  )
}

export default HeroSection

