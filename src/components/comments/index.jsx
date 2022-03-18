import { Container } from "./styles"
import { BiComment } from 'react-icons/bi'
import { useCounter } from "../../context/CounterContext"

export const Comments = () => {
  const { comments, incrementComment } = useCounter()

  return (
    <Container>
      <BiComment size={60} />
      <h3>Comments: {comments}</h3>
      <button onClick={() => incrementComment()}>Add Comments</button>
    </Container>
  )
}
