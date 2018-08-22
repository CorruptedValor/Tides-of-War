const generateMatchData = (playerList) => {
    if (playerList.data){

        const data = playerList.data.map(({displayName, matches}) => {
            let win = 0, loss = 0, draw = 0;
            console.log(matches.personalScore);				
            const totalScore = matches.reduce( (total, {personalScore}) => {

                if (personalScore){	
        
                    if (personalScore > 42){
                        win += 1;
                    } else if (personalScore < 0){
                        loss += 1;
                    } else if (personalScore != 0 ) {
                        draw += 1;
                    }
                    
                    return total + personalScore;
                } else {
                    return total + 0;
                }
            }, 0),

            wld = win + '/' + loss + '/' + draw;
            let gamesPlayed = win + loss + draw;

            return {displayName, totalScore, wld, win, loss, draw, gamesPlayed, matches};
        }).filter(({gamesPlayed}) => {
            return (gamesPlayed !== 0);
        });
    
        return data;
    }  
}

export default generateMatchData;