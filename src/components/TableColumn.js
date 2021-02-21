import React from 'react'

function TableColumn(props){
    return (
        <tr>
            {props.TableColumns.map((column,i)=> <th key={"colum" + i}>{column}</th>)}
        </tr>
    );
}

export default TableColumn