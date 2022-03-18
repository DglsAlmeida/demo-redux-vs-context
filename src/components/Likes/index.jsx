import { Container } from "./styles"
import { AiOutlineHeart } from 'react-icons/ai'
import { useCounter } from "../../context/CounterContext"

export const Likes = () => {
  const { likes, incrementLike } = useCounter()

  return (
    <Container>
      <AiOutlineHeart size={60} />
      <h3>Likes: {likes}</h3>
      <button onClick={() => incrementLike()}>Add Likes</button>
    </Container>
  )
}
