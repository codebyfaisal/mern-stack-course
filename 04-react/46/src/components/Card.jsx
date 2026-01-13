import React from 'react'

const Card = ({ cards }) => {
    if (!cards) return null;

    return (
        <>
            <p>
                total {cards.length} Products out of 200
            </p>
            <div className='cards'>

                {
                    cards.map((p, i) => (
                        <div key={i} className='card'>
                            <div className="card-image">
                                <img src={p.image} alt="" />
                            </div>
                            <b> - {p.brand}</b>
                            {/* <span>{p.id}</span> */}
                            <h2>{p.title}</h2>
                            <p>{p.price}</p>
                            <b>{p.stock} / unit</b>
                            <br />
                            <span className={p.rating < 3 && "red"}>Rating {p.rating}</span>
                            <br />
                            {/* <a href='https://google.com'>Buy</a> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card