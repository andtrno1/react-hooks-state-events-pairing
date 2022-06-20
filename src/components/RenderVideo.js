import React from 'react';
 


const RenderVideo = (props) => {
    console.log(props.video)
  
    return(
        <>
            <iframe key={props.id} title={props.id} src={props.video}></iframe>
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.upload}</p>
        </>
    )
}

export default RenderVideo;