import React from 'react'

const ExpandPhoto = (props) => {
    const siteURL = "https://jayanthsaikiran.github.io/Mc-Donald-s-clone/"

    return (
        <div>
            <img src={siteURL + "/images/" + props.path}
                alt="Product"
                onClick={props.closeHandler}
            />
        </div>
    )
}

export default ExpandPhoto;