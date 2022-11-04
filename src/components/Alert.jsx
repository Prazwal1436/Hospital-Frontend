import React from 'react'

export default function Alert({ status, message }) {
    return (
        <div class={` text-${status}`} role="alert">
            {message}
        </div>
    )
}