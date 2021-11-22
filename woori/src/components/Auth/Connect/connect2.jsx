import React from 'react';
import Connect from '.';

const [response, setResponse] = useState();

axios({
    method: 'get',
    url: "/network-api/request/",
    headers: {
        "Authorization": `Token ${accessToken.token}`
    }
})
    .then((res) => {
        console.log("dd")
        setResponse(() => res.data.receiver)
    })
                


const connect2 = () => {
    return (
        <div>
            <Connect response="no"/>
        </div>
    );
};

export default connect2;