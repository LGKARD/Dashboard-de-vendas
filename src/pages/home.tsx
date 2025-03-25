import { Header, CardComponent, CustomTable, CustomChart, AvatarList, StyledH2 } from "@/components"
import { Container, Grid } from '@mui/material'
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <CardComponent>
            <StyledH2 className="mb-1">Total de vendas do mês</StyledH2>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent>
            <StyledH2 className="mb-1">Meta do mês</StyledH2>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent>
            <StyledH2 className="mb-1">Leads contactados</StyledH2>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardComponent>
            <StyledH2 className="mb-1">Valor de vendas do mês</StyledH2>
            <CustomChart labels={ ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} data={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]} type="line"/>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={5}>
          <CardComponent>
            <StyledH2 className="mb-1">Valor de vendas do mês</StyledH2>
            <AvatarList listData={mockListData}/>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={5}>
          <CardComponent>
            <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
            <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
          </CardComponent>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardComponent>
            <StyledH2 className="mb-1">Valor de vendas por mês</StyledH2>
            <CustomChart labels={ ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']} data={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]} type="bar"/>
          </CardComponent>
        </Grid>
      </Grid>
     </Container>
    </>
  )
}

export default Home
