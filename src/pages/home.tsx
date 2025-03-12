import { Header, CardComponent, AvatarList } from "@/components"
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
  return (
    <>
     <Header />
     <Container maxWidth="lg">
      <CardComponent className="">Card</CardComponent>
      <CardComponent>
        <AvatarList listData={mockListData}/>
      </CardComponent>
     </Container>
    </>
  )
}

export default Home
