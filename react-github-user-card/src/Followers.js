import React from 'react';

const Followers = props => {
    return (
        <div className='followers'>
            <h1>Followers:</h1>
            <>
                {props.followers.map((follower, index) => {
                    return <li key={index}>{follower.login}</li>
                })}
            </>
        </div>
    )
}

export default Followers;