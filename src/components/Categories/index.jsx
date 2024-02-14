import React, { useEffect } from "react";
import {connect} from "react-redux";
import { mapDispatcherToProps, mapStateToProps } from "./redux/categoryRedux";

function Categories(props) {
    useEffect(() => {
        props.GetAllCategories()
    }, []);

    console.log(props)
    return (
        <div className={props.className}>
            <h1>Menu Categories</h1>
            <ul>
            {
                props.categories && (
                    props.categories.map(category => (<li key={category.id}>{category.name}-{category.short_name}</li>))
                )
            }
            </ul>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatcherToProps
)(Categories);