import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const OrganizationList = ({ organizations }) => {


  return ( 
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Organization Name</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {organizations.map((organization) => (
            <TableRow key={organization.id}>
              <TableCell>{organization.name}</TableCell>
              <TableCell>
                {organization.address.street}, {organization.address.apt}, {organization.address.city}, {organization.address.state}, {organization.address.zipcode}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   );
}
 
export default OrganizationList;