import { Container } from "./styles"
import { AiOutlineHeart } from 'react-icons/ai'

export const Likes = () => {
  return (
    <Container>
      <AiOutlineHeart size={60}/>
      <h3>Likes: 0</h3>
      <button>Add Likes</button>
      <span>Renders: 0</span>
    </Container>
  )
}
