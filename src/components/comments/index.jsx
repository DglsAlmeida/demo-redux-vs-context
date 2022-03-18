import { Container } from "./styles"
import { BiComment } from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux"
import { incrementComment } from "../../store/modules/counterSlice"

export const Comments = () => {
  const comments = useSelector((state) => state.counter.comments)
  const dispatch = useDispatch()

  return (
    <Container>
      <BiComment size={60} />
      <h3>Comments: {comments}</h3>
      <button onClick={() => dispatch(incrementComment())}>Add Comments</button>
    </Container>
  )
}
