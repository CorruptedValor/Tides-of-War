import SelectList from '../formFieldTypes/SelectList';
import DropdownList from '../formFieldTypes/DropdownList';
import TextField from '../formFieldTypes/TextField';
import 'react-widgets/dist/css/react-widgets.css';


export default [
    {label: 'Season', name: 'season', component: DropdownList, type: null, data:[1] },
    {label: 'Round', name: 'round', component: DropdownList, type: null, data:[1,2,3,4,5,6,7,8,9,10] },
    {label: 'Mission', name: 'mission', component: SelectList, type: null,  data:['1','2','3','4','5','6'] },
    {label: 'Player One', name: 'playerOne', component: DropdownList, type: null, data: [], textField: 'displayName',  valueField: 'playerKey' },
    {label: 'Player One Score', name: 'playerOneScore', component: TextField, type: 'text'},
    {label: 'Player Two', name: 'playerTwo', component: DropdownList, type: null, data: [], textField: 'displayName',  valueField: 'playerKey' },
    {label: 'Player Two Score', name: 'playerTwoScore', component: TextField, type: 'text' }
];
