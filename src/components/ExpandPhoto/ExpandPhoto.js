import React from 'react'

const ExpandPhoto = (props) => {
    return (
        <div>
            <img src={"/images/" + props.path}
                alt="Product"
                onClick={props.closeHandler}
            />
        </div>
    )
}

export default ExpandPhoto;