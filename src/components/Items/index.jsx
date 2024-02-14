import React, {useEffect} from "react";
import {connect} from "react-redux";
import { mapDispatcherToProps, mapStateToProps } from "./redux/itemRedux";

function Items(props) {
    return (
        <div className={props.className}>
            { props.selectedCategory && (
                <>
                    <h1>Items in Category: ({props.selectedCategory})</h1>
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
                            props.items && props.items.map((item, index) => (
                                <tr className={(index+1) % 2 == 0 ? "evenTableRow" : ""}>
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
                </>
            )}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatcherToProps)(Items);