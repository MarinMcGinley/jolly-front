import React from 'react';

import './error.css';

const Error = (props) => {

    return (
        <React.Fragment>
            <div className="errors">
                {props.errorArray.map((item, itemKey) =>
                    <div className="error" key={itemKey}>{props.withField ? item.field + ": " : null}{item.error}</div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Error;