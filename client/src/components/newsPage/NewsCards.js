import React from 'react';

import '../styles/main.css';
import '../styles/style.css';
import './newscard.css';
import NewsCardOne from './NewsCardOne';
import NewsCardTwo from './NewsCardTwo';
import NewsCardThree from './NewsCardThree';
import NewsCardFour from './NewsCardFour';
import NewsCardFive from './NewsCardFive';

const NewsCards = () => {
  return(
<div>
				<NewsCardOne classNameName="newscard"/>
        <NewsCardTwo classNameName="newscard"/>
        <NewsCardThree classNameName="newscard"/>
        <NewsCardFour classNameName="newscard"/>
        <NewsCardFive classNameName="newscard"/>
</div>
    );

};


export default NewsCards;
