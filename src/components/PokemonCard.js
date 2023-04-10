import React from 'react'

const PokemonCard = ({id,name,image,type}) => {

    const style=type+" thumb-container"
    return (
        <div className={style}>
            <div className='number'>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name}/>
            <div className='detail-wrapper'>
                <h1>{name}</h1>
                <small>{type}</small>
            </div>
        </div>
    )
}

export default PokemonCard