import _ from 'lodash';

//can only take the playerList object that fetchAllPlayers returns
//only returns the data per season

const generateMatchData = (playerList, seasonInput) => {
    
    //if seasonInput wasn't entered, default to 1
    if (!seasonInput)
        seasonInput = 1;


    //checks to make sure that the data was passed into the function
    if (playerList.data){

        const data = playerList.data.map(({displayName, playerKey, matches}) => {
           
            let win = 0, loss = 0, draw = 0;
            
            //determine the player's current standing in the overall ranking in a season

            const totalScore = matches.filter(({season}) => season === seasonInput)
            .reduce((total, {personalScore}) => {

                if (personalScore){	
                    return total + personalScore;
                } else {
                    return total + 0;
                }
            }, 0);

            //gather match stats out of the playerList.matches object

            const matchData = matches.map(({personalScore, round, opponentKey, season, mission}) => {
                
                let gameScore = 0;

                //adjust score for win-loss. Players add 350 to their game score for a win, subtract 150 for a loss, and no change on a tie. 
                //This resets their score to the number of points they got during the actual match
                //check player's score to determine if that match was won or lost.

                if (personalScore > 42) {

                    win += 1;
                    gameScore = personalScore - 350;

                } else if (personalScore < 0) {

                    loss += 1;
                    gameScore = personalScore + 150;

                } else {

                    draw += 1;
                    gameScore = personalScore;

                }
                return { gameScore, round, displayName, opponentKey, season, mission, personalScore };

            }).filter(({gameScore}) => gameScore !== null )
            
            //return win/loss/draw in String format

            const wld = win + '/' + loss + '/' + draw;
            
            const gamesPlayed = win + loss + draw;

            return {displayName, totalScore, wld, win, loss, draw, gamesPlayed, matchData, playerKey};
            
        }).filter(({gamesPlayed}) => {

            return (gamesPlayed !== 0);
        });
    
        return data;

    }  else { //the playerlist data was not passed into the function
        

        return [];

    }
}

export default generateMatchData;