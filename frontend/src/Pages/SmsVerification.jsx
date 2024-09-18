import React, { useEffect, useState } from 'react';

const fetchData = async () =>{
    const url = "https://v3j8yv.api.infobip.com/sms/2/text/advanced";

    const raw = JSON.stringify({
        "messages": [
            {
                "destinations": [{"to":"919561696108"}],
                "from": "447491163443",
                "text": "Congratulations on sending your first message.\nGo ahead and check the delivery report in the next step."
            }
        ]
    });

    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': 'App 8e5256e37e0f102aea670021212b4c5a-b4f8d681-63e4-4a24-8bd5-af96c3b4167a',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: raw,
        redirect: "follow"
    })


    const data = await res.json();
    return data;
}

const SmsVerification = () => {
    const [result, setResult] = useState(null);

    useEffect(()=>{
        fetchData().then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
    


  return (
    <div>SmsVerification</div>
  )
}

export default SmsVerification;