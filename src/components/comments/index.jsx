import { Container } from "./styles"
import { BiComment} from 'react-icons/bi'

export const Comments = () => {
  return (
    <Container>
      <BiComment size={60}/>
      <h3>Comments: 0</h3>
      <button>Add Comments</button>
      <span>Renders: 0</span>
    </Container>
  )
}
