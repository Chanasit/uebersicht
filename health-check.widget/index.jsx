import { styled } from "uebersicht";

const Table = styled("table")`
  margin: 0 auto;
`;

const URL = styled("td")`
  font-size: 10px;
  padding: 4px;
  color: white;
`;

const Status = styled("td")`
  font-size: 10px;
  padding: 4px;
  color: ${(props) =>
    props.status === "online" ? "rgb(153, 227, 160)" : "rgb(244, 115, 94)"};
`;

export const className = `
	left: 10px;
	top: 10px;
	font-family: SFNS Display, 'Andale Mono', sans-serif;
	text-shadow: 1px 1px 0 rgba(#000, 0.2);
	background-color: rgba(0, 0, 0, 0.1);
	padding: 6px;
	border-radius: 6px;
`;

export const refreshFrequency = 60000; // widget will run command once a second

export const command =
  "./health-check.widget/loop_list.sh health-check.widget/urls.txt";

export const render = ({ output }) => {
  const result = output.split("\n");
  return (
    <Table>
      {result.map((item) => {
        let server = item.split("|")[0];
        let status = item.split("|")[1];
        return (
          <tr>
            <URL>{server}</URL>
            <Status status={status}>{status}</Status>
          </tr>
        );
      })}
    </Table>
  );
};
