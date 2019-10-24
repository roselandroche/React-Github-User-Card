import React from 'react';

import Followers from './Followers';

const UserCard = props => {
    return (
        <div className='card'>
            <div className='user'>
                <img src={props.user.avatar_url} alt='Rose Landroche smiling' />
                <h1>User: {props.user.name}</h1>
                <h3>{props.user.bio}</h3>
                <a href={props.user.html_url}>{props.user.name}'s GitHub Profile</a>
            </div>
            <Followers followers={props.followers}/>
        </div>
    )
}

export default UserCard;