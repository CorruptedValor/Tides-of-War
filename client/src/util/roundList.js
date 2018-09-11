import _ from 'lodash';

const roundList = (playerList) => {
	
	return _.chain(playerList)
		.map(({matches}) => {
			return _.filter(matches, ({personalScore}) => {return personalScore !== null;})
		})
		.flatMap((flattened, other) => {
		return flattened.concat(other);
		})
		.map('round')
		.uniq()
		.compact()
		.value()

}

export default roundList;