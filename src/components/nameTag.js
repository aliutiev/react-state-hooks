import React from 'react';

function NameTag(props) {

    console.log('hi')
    if (!props.firstName || !props.lastName) {
        return (
            <div>
                <h3 className='name'>
                    Invalid Names

                </h3>

            </div>
        )
    }


    return (
        <div>
            <h3
                className='name'
                style={props.style}
            >
                First Name: {props.firstName}

            </h3>
            <h3
                className='name'
                style={props.style}
            >
                Last Name: {props.lastName}

            </h3>
            {props.firstName === "john" && <div style={{ color: 'green' }}>VIP</div>}
        </div>
    )

}

export default NameTag;