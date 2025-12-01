
function MyFirstComponent() {
    const amount = 21;

const user = {
    firstName: "Bob",
    lastName: "Smith",
}

const bannerStyle ={
    color: "#fff",
    background: "purple",
    border: "2px solid #fff",
    margin: "2rem",
    padding: "1rem",
}

const renderTitle =()=> {
    return <h2>This is the new title</h2>
}


{/* This is a comment*/}

    return (
        <>
            {renderTitle()}

            <h2>Hello {user.firstName} {user.lastName.toUpperCase()} </h2>
            <h3>Total: {amount *2}</h3>

            <div style ={bannerStyle}>
                <p>This is a banner</p>
            </div>
        </>
    )
}

export default MyFirstComponent