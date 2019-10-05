import React from 'react';

const Followers = props => {
    return (
        <div className='followers'>
            <h1>Followers:</h1>
            <>
                {props.followers.map((follower) => {
                    return <h2>{follower.login}</h2>
                })}
            </>
        </div>
    )
}

export default Followers;