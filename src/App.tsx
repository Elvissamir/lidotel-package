import { ChakraProvider, Flex, Text } from "@chakra-ui/react"
import { Footer, TopBar, TopBarLeft, TopBarRight } from "./components"
import { baseTheme } from "./themes"
import SideBar from "./components/layout/SideBar"
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600-italic.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/open-sans/400-italic.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'
import "@fontsource/archivo-narrow"
import { useState } from "react"
import LidotelErrorPage from './pages/LidotelErrorPage'

function App() {
  const [selectedItemId, setSelectedItemId] = useState("allStudents")
  const onChangeSelected = (id: string) => setSelectedItemId(id)

  return (
    <ChakraProvider theme={baseTheme}>   
      <TopBar
        leftComponent={
          <TopBarLeft 
            onClick={() => console.log('hey go to')}
            list={[]} 
            menuOptions={[]} />}
        rightComponent={<TopBarRight 
          isClosingSession={false}
          profileData={null}
          onLogin={() => Promise.resolve()}
          onLogout={() =>  Promise.resolve()}
          onChangeTenantId={() => Promise.resolve()} />} />
        <LidotelErrorPage 
          errorStatus="500"
          height="100vh" 
          minHeight="100vh" 
          width="full" 
          minWidth="full" />
        <Flex className='sidebar' padding='100px' h='700px' w='full'>
            <SideBar
              selectedItemId={selectedItemId}
              ariaCurrentType="page"
              items={[]}
              show={true}
              onClickItem={onChangeSelected} />
        </Flex>
        <Footer />
    </ChakraProvider>
  )
}

export default App