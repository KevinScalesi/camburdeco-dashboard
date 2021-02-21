import React from 'react'
import TableRow from './TableRow'
import TableColumn from './TableColumn'

function Table(props){
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" cellPadding="0">
                    <thead>
                        <TableColumn TableColumns={props.columns}/>
                    </thead>
                    <tfoot>
                        <TableColumn TableColumns={props.columns}/>
                    </tfoot>
                    <tbody>
                        {props.children.map((product,i)=>
                            <TableRow key={"products" + i}>
                                {product}
                            </TableRow>)}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}
Table.defaultProps={
    children: [{}],
    columns: []
}

export default Table