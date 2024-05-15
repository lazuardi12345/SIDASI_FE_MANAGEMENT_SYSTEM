import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Bahan Baku",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Makanan & Minuman",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Kosmetik",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Barang Unik",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Elektronik",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Category </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        {/* <div className='box box2'>
          <button>V</button>
        </div> */}
      </div>
    </>
  )
}

export default Catg
