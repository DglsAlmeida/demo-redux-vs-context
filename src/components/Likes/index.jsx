import { Container } from "./styles"
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import { incrementLike } from "../../store/modules/counterSlice"

export const Likes = () => {
  const likes = useSelector((state) => state.counter.likes)
  const dispatch = useDispatch()

  return (
    <Container>
      <AiOutlineHeart size={60} />
      <h3>Likes: {likes}</h3>
      <button onClick={() => dispatch(incrementLike())}>Add Likes</button>
    </Container>
  )
}
