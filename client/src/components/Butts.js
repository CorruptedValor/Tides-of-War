import React, { Component } from 'react';


export default class Butts extends Component {
    myStyles = {
        color: 'red',
        fontSize: '12em'
    }
    componentDidMount() {

    }
    render() {
        return (
            <div style={this.myStyles}>


                <div class="boxContainer">
                    <div>
                        <div class = "boxHeader" id="grad">
                            <h3 class = "boxTitle">Personal & Campaign Statistics</h3>
                        </div>
                        <div class="box" id="roundbox">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod. Aliquam tristique egestas lacus, sed tincidunt velit pretium id. Suspendisse semper turpis quis diam malesuada porta. Sed rutrum, magna id condimentum tincidunt, velit purus malesuada massa, at rutrum ipsum nunc eu est. Fusce ac consequat turpis, eu lobortis lectus. In varius risus eget elementum mollis.</p>

                                <h3 class="hstats">Your Score Totals</h3>

                        </div>
                    </div>
                </div>



            </div>
        )
    }
}