import React from 'react'

export default function Alert(props) {
    let capitalize = (word) => {
        let str = word.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
    }
    return (
        <div style={{height: '40px'}}>
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert`}>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
             </div>
        </div>}
        </div>
    )
}
