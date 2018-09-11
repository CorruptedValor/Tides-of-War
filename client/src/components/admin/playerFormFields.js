import DropdownList from '../formFieldTypes/DropdownList';
import TextField from '../formFieldTypes/TextField';
import 'react-widgets/dist/css/react-widgets.css';

export default [
    {label: 'Player Key', name: 'playerKey', component: TextField, type: 'text' },
    {label: 'Display Name', name: 'displayName', component: TextField, type: 'text'},
    {label: 'Number of Seasons', name: 'season', component: DropdownList, type: null, data:[1,2,3,4,5,6], initialValues: 6},
    {label: 'Number of Rounds', name: 'round', component: DropdownList, type: null, data:[1,2,3,4,5,6,7,8,9,10], initialValues: 10},
];
