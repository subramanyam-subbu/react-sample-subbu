import React from 'react';

function Home(props1)
{
    if(props1.role == "admin")
        return <AdminHome welcomeMessage="Welcome Admin!!!"></AdminHome>
    else if(props1.role == "general")
        return <UserHome></UserHome>
    else {
        //alert(props1.role);
        //return null;
        return <UnauthorizedUserHome></UnauthorizedUserHome>
    }

    //Ternary Operator
    //return props1.role == "admin" ? <AdminHome></AdminHome> :  <UserHome></UserHome>

    //Short Circuit AND operator
    //return props1.role == "admin" && <AdminHome></AdminHome>
}

const AdminHome = (props1) => {
    return <h1>Conditional Rendering Admin Home - {props1.welcomeMessage}</h1>
}

AdminHome.defaultProps = {
    welcomeMessage: "Welcome Admin"
}

const UserHome = () => {
    return <h1>Conditional Rendering User Home</h1>
}

const UnauthorizedUserHome = () => {
    return <h1>You are not authorized</h1>
}

Home.defaultProps = {
    role: "hacker"
}

export default Home;