import React, {useState} from 'react'



const LikeButton = (props) => {

const [like, setLike] = useState(props.upvotes)
    function handleClick() {
        setLike(like + 1)
    }
    return(
        <>
        <button onClick={handleClick}>{like}👍</button>
        </>
    )
}

export default LikeButton;