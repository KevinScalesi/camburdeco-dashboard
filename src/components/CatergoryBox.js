import React from 'react'
import PropsType from 'prop-types'

function CategoryBox(props)
{
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.name + ": " + props.products}
                </div>
            </div>
        </div>
    );
}

CategoryBox.propsType = {
    name: PropsType.string
}

export default CategoryBox