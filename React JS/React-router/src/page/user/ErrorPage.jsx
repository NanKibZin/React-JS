import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
      <img src="https://cdn.pixabay.com/photo/2022/01/31/19/30/error-6984855_1280.png" alt="" />
      <Link to="/user">Back</Link>
    </div>
  )
}
export default ErrorPage
