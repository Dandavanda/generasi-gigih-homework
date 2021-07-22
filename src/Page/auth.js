// import React from 'react';


const client_id = 'f7ad929ce8994cd68a5853a184e1bcce';
    const scope = 'playlist-modify-private';
    const redirect_url = 'http://localhost:3000/'

    const Link = () => {
        `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_url}%2Fcallback&scope=${scope}`
    }



const Auth = () => {
    return (
        <a href="/login" onClick={Link()}>Login</a>
    )
}


export default Auth
