import React from 'react';

import '../styles/main.css';
import '../styles/style.css';
import './pagination.css';

const Pagination = () => {
  return(
    <div id="pagingation" align="center">
      {/* <a href="#" class="pageLink" aria-label="Previous" id="left"><span aria-hidden="true">❮</span></a> */}

     <button class="pageBtn-active">1</button>
     <button class="pageBtn">2</button>

      <a href="#" class="pageLink" aria-label="Next" id="right"><span aria-hidden="true">❯</span></a>
    </div>
    );

};


export default Pagination;
