const fetch = require( 'node-fetch' );
const SUCCESS_HTTP_STATUS_CODE = 200;

async function showGitHubUser( handle ) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch( url );
    const body = await response.json();

    if ( response.status !== SUCCESS_HTTP_STATUS_CODE ) {
        throw Error( body.message );
    }

    return body;
}

( async() => {
    try {
        const user = await showGitHubUser( 'idontexistinthisworld$$$!!!' );
        console.log( user.name );
        console.log( user.location );
    } catch ( err ) {
        console.log( err );
    }

} )();