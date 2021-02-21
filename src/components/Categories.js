import React from 'react'
import CategoryBox from './CatergoryBox'

function Categories(props)
{
    let categoryItems;
    if(props.categories == null){
        categoryItems = ""
    }
    else{
        categoryItems = 
        <div className="row">
            {
                props.categories.map((category, i) => 
                    <CategoryBox name={category.name} products={category.products.length} key={category + i}/>) 
            }
        </div>
    }

    return(
        <div className="card-body">
                {categoryItems}
        </div>
    );
}

Categories.defaultProps = {
    categories: null
}

export default Categories;