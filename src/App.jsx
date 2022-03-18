import { Comments } from "./components/comments";
import { Likes } from "./components/Likes";
import { Container, Content } from "./styles/styles";
import GlobalStyles from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <header>Context API</header>
        <Content>
          <Likes />
          <Comments />
        </Content>
      </Container>
    </>
  )
}

export default App