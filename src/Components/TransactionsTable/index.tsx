import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>25/09/2024</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawal">- R$1.500</td>
            <td>Apto</td>
            <td>02/09/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
