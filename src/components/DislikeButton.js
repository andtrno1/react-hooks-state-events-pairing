import React, {useState} from 'react'


const DislikeButton = (props) => {
    const [dislike, setDislike] = useState(props.downvotes);

    function handleClick() {
        setDislike(dislike - 1);
    }

    return(
        <>
            <button onClick={handleClick}>{dislike}👎</button>
        </>
    )
}

export default DislikeButton;