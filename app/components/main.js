// Include React 
var React = require('react');

// Include Child
var Child = require("./Child");

// This is the main component.
var Main = React.createClass({


  //render the function
  render: function(){

    return(

      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>New York Times Article Scrubber</h1>
            <h3>Search for and annotate articles of interest!</h3>
          </div>

          <div className="col-md-6">
        
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">



              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
});

// Export the componen back for use in other files
module.exports = Main;