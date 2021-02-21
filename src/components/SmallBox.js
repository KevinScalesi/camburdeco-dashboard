import React from 'react'
import PropType from 'prop-types'

function SmallBox(props)
{
    return(
        <div className="col-md-4 mb-4">
            <div className={props.border + " card shadow h-100 py-2"}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={props.icon + " fas fa-2x text-gray-300"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SmallBox.defaultProp = {
    title: "",
    value: "",
    border: "",
    icon: "",
}

SmallBox.propType = {
    title: PropType.string.isRequired,
    value: PropType.oneOfType([PropType.number,PropType.string]).isRequired,
    border: PropType.oneOf(['border-left-primary','border-left-success','border-left-warning']).isRequired,
    icon: PropType.string.isRequired,
}

export default SmallBox;