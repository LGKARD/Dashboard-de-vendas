import { Header, CardComponent, CustomTable, CustomChart, AvatarList } from "@/components"
import { Container } from '@mui/material'
import { currencyConverter } from "@/utils"

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1000.90)
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2000.90)
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(3000.90)
    },
    
  ]
  const mockTableData = {
    headers: ['Nome', 'Email', 'Ações'],
    rows: [
      [
        <span>Nome1</span>,
        <span>Email1</span>,
        <button>ACTION</button>
      ],
      [
        <span>Nome2</span>,
        <span>Email2</span>,
        <button>ACTION</button>
      ],
      [
        <span>Nome3</span>,
        <span>Email3</span>,
        <button>ACTION</button>
      ],
      [
        <span>Nome4</span>,
        <span>Email4</span>,
        <button>ACTION</button>
      ]
    ]
  }
  return (
    <>
     <Header />
     <Container maxWidth="lg">
      <CardComponent className="">Card</CardComponent>
      <CardComponent>
        <AvatarList listData={mockListData}/>
      </CardComponent>
      <CardComponent>
        <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
      </CardComponent>
      <CardComponent>
        <CustomChart labels={ ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} data={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]} type="bar"/>
      </CardComponent>
     </Container>
    </>
  )
}

export default Home
