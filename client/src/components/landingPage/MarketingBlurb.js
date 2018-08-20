import React from 'react';

import '../styles/style.css'
import '../styles/main.css'
import DiceImage from '../Images/DiceImage.png';

const MarketingBlurb = () => {
    return(



          <div>
            <div className = "boxHeader" id="grad">
                <h3 className = "boxTitle">Welcome to Battlerounds!</h3>
            </div>
            <div className="box" id="roundbox">
                <div class="ContentImage">
                <img src={DiceImage} style={{width: '30%', float: 'right'}}/>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod. Aliquam tristique egestas lacus, sed tincidunt velit pretium id. Suspendisse semper turpis quis diam malesuada porta. Sed rutrum, magna id condimentum tincidunt, velit purus malesuada massa, at rutrum ipsum nunc eu est. Fusce ac consequat turpis, eu lobortis lectus. In varius risus eget elementum mollis.</p>
                <p />
                <p>Donec iaculis quam a laoreet vestibulum. Fusce ac vehicula urna. Phasellus ullamcorper eget lacus eu suscipit. Curabitur nec urna rhoncus, luctus dolor at, lobortis sapien. Phasellus sed ultricies tortor, quis tristique lectus. Praesent quis purus nisl. Ut facilisis at mi ac dictum. Ut ac purus dolor.</p>
            </div>
          </div>


    );

};



export default MarketingBlurb;
