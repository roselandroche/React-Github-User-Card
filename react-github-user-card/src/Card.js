import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <img src={props.user.avatar_url} alt='Rose Landroche smiling' />
            <h1>{props.user.name}</h1>
            <h4>{props.user.bio}</h4>
        </div>
    )
}

export default Card;