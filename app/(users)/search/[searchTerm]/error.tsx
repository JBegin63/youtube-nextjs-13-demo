'use client'
import React, { useEffect } from 'react'

export default function error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Something went wrong!</p>
            <button onClick={() => reset()}>Reset error boundary</button>
        </div>
    )
}