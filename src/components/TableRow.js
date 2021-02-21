import React from 'react'


function TableRow(props){
    let styles = props.children.style;
    let colors = props.children.colores;
    return (
        <tr>
            <td>{props.children.id}</td>
            <td>{props.children.name}</td>
            <td>{props.children.description}</td>
            <td>{props.children.stock}</td>
            <td>{props.children.price}</td>
            <td>{props.children.img}</td>
            <td>{props.children.top}</td>
            <td>{props.children.category}</td>
            <td>
                <ul>
                    {styles.map((style,i)=><li key={`style ${props.children.id}` + i}>{style.name}</li>)}
                </ul>
            </td>
            <td>
                <ul>
                     {colors.map((color,i)=><li key={`color ${props.children.id}` + i}>{color.name}</li>)}
                </ul>
            </td>
        </tr>
    );
}
TableRow.defaultProps ={
    children: {
        category: "",
        colores: [{name:""}],
        description: "",
        id: 0,
        name: "",
        price: 0,
        stock: 0,
        style: [{name: ""}],
        top: 0
    }
}

export default TableRow