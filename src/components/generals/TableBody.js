import Table from "react-bootstrap/Table";
import nextKey from "react-id-generator";
import "./table.css";

function TableBody({ children, list }) {
  return (
    <div className="Table-wrapper">
      <Table responsive hover>
        <thead>
          <tr>
            {list.map((title) => (
              <th key={nextKey()}> {title} </th>
            ))}
          </tr>
        </thead>
        <tbody> {children} </tbody>
      </Table>
    </div>
  );
}

export default TableBody;
