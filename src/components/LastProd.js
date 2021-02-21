import React from 'react'
function LastProd(props)
{
    let lastProduct = props.products[props.products.length - 1];
    console.log(lastProduct)
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15em'}} src={lastProduct.endpointImg} alt="image last product" />
            </div>
            <p>Nombre: {lastProduct.name}</p>
            <p>Stock: {lastProduct.stock}</p>
            <p>Precio: ${lastProduct.price}</p>
            <p>Descripción: {lastProduct.description}</p>
            <a target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
        </div>
    );
}

export default LastProd;