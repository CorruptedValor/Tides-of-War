//import DropdownList from '../FormFieldTypes/DropdownList';
import Multiselect from '../FormFieldTypes/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

export default [
    // {label: 'Seasons', name: 'season', component: Multiselect, type: null, data:[1], initialValues: 1},
    {label: 'Rounds', name: 'round', component: Multiselect, type: null, data:[1,2,3,4,5,6,7], initialValues: [1,2,3,4,5,6,7], defaultValues: [1,2,3,4,5,6,7]},
    {label: 'Players', name: 'player', component: Multiselect, type: null, data: [], textField: 'displayName',  valueField: 'playerKey' }
];