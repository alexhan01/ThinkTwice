import React from 'react';

function RetrieveData() {
    const url = "https://thinktwice-32273.firebaseio.com/users/pFpNDLVRVjDmOgIs4iml.json"

    fetch("https://thinktwice-32273.firebaseio.com/users/pFpNDLVRVjDmOgIs4iml.json", {
        method: "GET",
        headers: {
            'Content-type' : 'application/json'
        }, 
        body: JSON.stringify({
            name: 'user 1'
        })
    })
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))

    return(
        <div>
        </div>
    )
}

export default RetrieveData
    


