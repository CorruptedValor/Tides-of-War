import {DropdownList, SelectList } from 'react-widgets';
import MatchTextField from './MatchTextField';
import 'react-widgets/dist/css/react-widgets.css'


export default [
    {label: 'Season', name: 'season', component: DropdownList, type: null, data:['1']},
    {label: 'Round', name: 'round', component: DropdownList, type: null, data:['1','2','3','4','5','6','7','8','9','10',] },
    {label: 'Mission', name: 'mission', component: SelectList, type: null,  data:['1','2','3','4','5','6'] },
    {label: 'Player One', name: 'playerOne', component: DropdownList, type: null, data: []  },
    {label: 'Player One Score', name: 'playerOneScore', component: MatchTextField, type: 'text' },
    {label: 'Player Two', name: 'playerTwo', component: DropdownList, type: null, data: [] },
    {label: 'Player Two Score', name: 'playerTwoScore', component: MatchTextField, type: 'text' }
];