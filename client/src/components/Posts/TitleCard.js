import "./TitleCard.css";

function TitleCard() {

    let blogName = window.location.pathname.slice(1);
    if (blogName.slice(-1) === 's') {
        blogName += "'";
    } else {
        blogName += "'s";
    }
    blogName += " blog";


    return (
        <h1 id="blog-name">{blogName}</h1>
    )
}

export default TitleCard;