import React from 'react'


// Product card component
// Accepts camelCase and lowercase props for convenience:
// { imageUrl | imageurl | image, name, oldPrice | oldprice, newPrice | newprice }
const Card = (props) => {
  const {
    imageUrl,
    imageurl,
    image,
    name,
    title,
    oldPrice,
    oldprice,
    newPrice,
    newprice,
  } = props || {}

  const imgSrc = imageUrl || imageurl || image || ''
  const productName = name || title || 'Product Name'
  const rawOld = oldprice ?? oldPrice
  const rawNew = newprice ?? newPrice

  const format = (val) => {
    if (val === undefined || val === null) return null
    const n = Number(val)
    if (Number.isNaN(n)) return String(val)
    return `$${n.toFixed(2)}`
  }

  const oldP = format(rawOld)
  const newP = format(rawNew) || '$0.00'

  return (
    <article className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden mx-auto transition transform hover:shadow-2xl hover:-translate-y-1">
      {/* 1:1 (square) responsive image using padding-top trick: paddingTop = (height/width)*100 = (1/1)*100 = 100% */}
      <div className="relative w-full bg-gray-100" style={{ paddingTop: '100%' }}>
        <img
          src={imgSrc}
          alt={productName}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm sm:text-sm font-semibold text-gray-800 truncate">{productName}</h3>

        <div className="mt-2 flex items-baseline gap-2">
          {oldP && (
            <span className="text-xs text-gray-400 line-through">{oldP}</span>
          )}

          <span className="text-base font-bold text-indigo-600">{newP}</span>
        </div>
      </div>
    </article>
  )
}

export default Card
