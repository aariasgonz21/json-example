import React from 'react';
import "./App.css";

function ArticleInfo(props){
    return(
    <div class="article-info">
         <h2 class="company-name">
            {props.company}
        </h2>
        <h2 class="company-price">
            {props.stockPrice}
        </h2>
    </div> 
    )
}

export default ArticleInfo;