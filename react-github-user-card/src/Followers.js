import React from 'react';

const Followers = props => {
    return (
        <>
            <h1>Followers:</h1>
            <div className='followers'>
                {props.followers.map((follower) => {
                    return <h2>{follower.login}</h2>
                })}
            </div>
        </>
    )
}

export default Followers;