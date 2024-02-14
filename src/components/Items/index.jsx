import React, {useEffect} from "react";
import {connect} from "react-redux";
import { mapDispatcherToProps, mapStateToProps } from "./redux/itemRedux";

function Items(props) {
    let categoryShortName = "SS"
    useEffect(() => {
        props.GetAllItems(categoryShortName)
    }, []);

    console.log(props)

    return (
        <div className={props.className}>
            <h1>Items in Category: ({categoryShortName})</h1>
            <table className="customTable">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.items && props.items.map(item => (
                        <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.description}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatcherToProps)(Items);