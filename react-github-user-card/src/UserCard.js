import React from 'react';

import Followers from './Followers';

const UserCard = props => {
    return (
        <div className='card'>
            <div className='user'>
                <img src={props.user.avatar_url} alt='Rose Landroche smiling' />
                <h1>User: {props.user.name}</h1>
                <h2>{props.user.bio}</h2>
            </div>
            <Followers followers={props.followers}/>
        </div>
    )
}

export default UserCard;