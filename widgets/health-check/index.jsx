import { styled } from "uebersicht";

export const Table = styled("table")`
`;

export const TableRow = styled("tr")`
`;

export const URL = styled("td")`
  color: white;
`;

export const Status = styled("td")`
  color: ${(props) =>
    props.status === "online" ? "rgb(153, 227, 160)" : "rgb(244, 115, 94)"};
`;

export const className = `
	left: 10px;
	top: 10px;
	font-family: SFNS Display, 'Andale Mono', sans-serif;
	text-shadow: 1px 1px 0 rgba(#000, 0.2);
	background-color: rgba(0, 0, 0, 0.1);
  font-size: 10px;
  padding: 4px;
	border-radius: 6px;
`;

export const refreshFrequency = 60000; // widget will run command once a second

export const command = " widgets/health-check/loop_list.sh  widgets/health-check/urls.txt";

export const initialState = { output: "http://localhost:80|offline" }

export const urls = [
  "google.com"
]

export const render = ({ output }) => {
  const result = output.split("\n");
  return (
    <Table>
      {result.map((item) => {
        let server = item.split("|")[0];
        let status = item.split("|")[1];
        return (
          <TableRow>
            <URL>{server}</URL>
            <Status status={status}>{status}</Status>
          </TableRow>
        );
      })}
    </Table>
  );
};
