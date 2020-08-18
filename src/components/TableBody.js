import React from 'react'

const TableBody = (props) => {
    return (
        <tr>
            <td>
                <img src={props.children.picture}></img>
            </td>
            <td>{props.children.name}</td>
            <td>{props.children.age}</td>
            <td>{props.children.email}</td>
        </tr >
    )
}

export default TableBody

/* <tr>
<th scope="row" >1</th>
<td>Steph</td>
<td>Curry</td>
<td>@mdo</td>
</tr> */