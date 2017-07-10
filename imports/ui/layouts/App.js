import React from 'react';

const App = props => (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                {props.children}
            </div>
        </div>
    </div>
);

export default App;