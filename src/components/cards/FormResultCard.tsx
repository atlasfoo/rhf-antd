import { FC } from "react";

import { JsonView, allExpanded, darkStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const FormResultCard: FC<{value: object }> = ({value}) => {
    return (<>
        <JsonView data={value} shouldExpandNode={allExpanded} style={darkStyles} />
    </>);
}
 
export default FormResultCard;