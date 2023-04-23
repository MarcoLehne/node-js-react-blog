import { useSelector } from "react-redux";


// this still needs to calculate 
// which genitiv is appropriate

function TitleCard() {

    let blogName = window.location.pathname.slice(1);
    if (blogName.slice(-1) === 's') {
        blogName += "'";
    } else {
        blogName += "'s";
    }
    blogName += " blog";


    return (
        <h1 id="blog-name">{blogName}
            {/* <br/>
            <span id="blog-author">
                By Someone
            </span> */}
        </h1>
    )
}

export default TitleCard;