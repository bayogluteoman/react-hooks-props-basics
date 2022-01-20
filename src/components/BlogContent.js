import React from "react";

function BlogContent(props) {
  console.log(props);
  if(!props.isPublished){
    return null;
  }
  else{
    return (
      <div id="blog-content">{props.articleText}</div>
      );
  }
}

export default BlogContent;
