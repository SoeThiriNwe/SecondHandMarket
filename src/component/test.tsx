interface Para {
    children : React.ReactNode
}

const TestComp = ( { children } : Para ) => {
    return (
        <>
            <h1>someting</h1>
            {children}
        </>
    )
}

export default TestComp;