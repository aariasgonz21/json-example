import React from "react";
import "./App.css";
import ArticleInfo from './ArticleInfo';
import { stockData } from "./data";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2020
        };
    }

    handleAddYearClick = (event) => {
        this.setState({
            year: this.state.year + 1
        })
    }

    handleSubtractYearClick = (event) => {
        this.setState({
            year: this.state.year - 1
        })
    }

    render(){
        return (
            <div class="article-container">
              <h1 class="article-title">Coolest Stocks since {this.state.year}</h1>
              {stockData.map((data, key) => {
                  return(
                    <div key={key}>
                        <ArticleInfo 
                            key={key}
                            company={data.company}
                            ticker={data.ticker}
                            stockPrice={data.stockPrice}
                            timeElapsed={data.timeElapsed}
                        />
                        <button class="yearButton add" onClick={(event) => this.handleAddYearClick(event)}>Add a Year</button>
                        <button class="yearButton subtract" onClick={(event) => this.handleSubtractYearClick(event)}>Subtract a Year</button>
                  </div> 
                  ) 
              })}
            </div>
        );
    } 
  }
  
  export default Article;