import React, {useEffect, useState} from "react";
import { useAsync } from "react-use";

// this component needs to fetch all the created users 
// from the json and display them with hyper links
// it also needs to provide an option for creating an account
// account create option is "empty" for now

function Home(){

    const blogNames = useAsync(async () => {
        const response = await fetch( "/internal/users");
        const result = await response.json();
        return result
    }, []);

    return(
        <div id="home-div">
            {blogNames.loading
                ? <h1>loading</h1>
                : blogNames.value.users.map(user => {
                    return <a href={`/${user.name}`}><h1>{user.name}</h1></a>
                })
            }
        </div>
    )
}

export default Home;