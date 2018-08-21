const generateMatchData = (matchData) => {
    if (matchData.data){

        const data = matchData.data.map(({displayName, matches}) => {
            let win = 0, loss = 0, draw = 0;
            console.log(matches.personalScore);				
            const score = matches.reduce( (total, {personalScore}) => {

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

            return {displayName, score, wld, win, loss, draw, gamesPlayed};
        }).filter(({gamesPlayed}) => {
            return (gamesPlayed !== 0);
        }).sort((a,b) => {
            if (a.score > b.score) return -1;
            if (a.score < b.score) return 1;
            return 0;
        });
    
        return data;
    }  
}

export default generateMatchData;