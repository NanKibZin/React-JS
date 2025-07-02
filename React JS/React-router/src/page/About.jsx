
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <h3>About Page</h3>
      <p style={{fontSize:"4rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio
        voluptate nostrum quo, nihil voluptatum ut adipisci ipsam provident
        similique eius voluptatem alias quasi eum ratione quibusdam possimus
        expedita ea dicta officia exercitationem magni rem omnis? Magnam
        voluptas fugit repudiandae aspernatur porro est dolorem ullam natus
        similique assumenda dicta ex tempore mollitia obcaecati quis illum
        totam, ipsam, sunt autem. Optio reprehenderit libero enim neque
        architecto inventore deserunt laudantium tempora dolores dolor aliquid
        ea debitis facere, nisi, nobis velit voluptates quisquam pariatur
        quaerat assumenda corporis? Earum eligendi eum nobis nostrum velit
        doloremque neque quaerat aspernatur ex beatae magni, ab optio, at harum
        provident nihil aperiam libero hic est mollitia similique aliquam. Fuga
        possimus necessitatibus distinctio dignissimos voluptate esse atque
        nihil doloremque?
      </p>
      <Link to="/">Back Home</Link>
      <Link to="/service">Service</Link>
    </div>
  )
}

export default About
