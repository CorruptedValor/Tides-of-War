// import TextField from '../FormFieldTypes/TextField';
// import DropdownList from '../FormFieldTypes/DropdownList';
import Multiselect from '../FormFieldTypes/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

export default [
    //{label: 'Season', name: 'season', component: DropdownList, type: null, data:[1], initialValues: 1},
    //{label: 'Rounds', name: 'round', component: Multiselect, type: null, data:[1,2,3,4,5,6,7], initialValues: [1,2,3,4,5,6,7,8,9,10], values: [1,2,3,4,5,6,7,9,10]},
    {label: 'Players', name: 'player', component: Multiselect, type: null, data: ['loading'], textField: 'displayName',  valueField: 'playerKey', initialValues: ['loading']}
];