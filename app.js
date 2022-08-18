class Aside extends React.Component {
    render(){
        return (
          <div id = "side">
            <div id = "sideWords">
                <h3> Dashboard </h3>
                <h3> Widget </h3>
                <h3> Reviews </h3>
                <h3> Customers </h3>
                <h3> Online Analysis </h3>
                <h3> Settings </h3>
            </div>
          </div>
        )
    }
}

class Reviews extends React.Component {
    render () {
      return (
        <div id = "review">
          <h3> Reviews </h3>
          <h1> 1,281 </h1>
        </div>
      )
    }
}

class Ratings extends React.Component {
    render () {
      return (
        <div id = "ratings">
          <h3> Average Rating </h3>
          <h1> 4.6 </h1>
        </div>
      )
    }
}

class Analysis extends React.Component {
    render () {
      return (
        <div id = "analysis">
          <h3> Sentiment Analysis </h3>
          <div id = "analysisNum">
            <h1> 960 </h1>
            <h1> 122 </h1>
            <h1> 321 </h1>
           </div>
        </div>
      )
    }
}


class Visitors extends React.Component {
    render () {
      return (
        <div id = "website">
            <h3> Website Visitors</h3>
            <h1> 821 </h1>
            <div id = "websiteBox">
            <Square />
            </div>
        </div>
      )
    }
}

class Square extends React.Component {
    render () {
      return (
        <div>
        </div>
      )
    }
}

class App extends React.Component{
    render () {
        return(
            <div id = "app">
                <Aside />
                <Reviews />
                <Ratings />
                <Analysis/>
                <Visitors/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)