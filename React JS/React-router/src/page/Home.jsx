import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Home Page</h3>
      <p style={{fontSize:"4rem"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
        deleniti cupiditate molestias at accusantium laboriosam fuga quia
        maiores aspernatur consectetur repellat eligendi doloremque eius
        possimus inventore ratione dolorum dolorem, ut iusto! Magni dolorem non,
        dolor in exercitationem, vero inventore similique error ab quis
        temporibus accusantium, adipisci eaque dolores minus rerum beatae
        deleniti animi! Nisi placeat illo nemo voluptatem, hic iste quis. Animi
        exercitationem nemo mollitia alias possimus consequuntur atque
        inventore, assumenda at labore iure blanditiis, reiciendis eius iste
        nihil doloribus fugit placeat? Eaque debitis laudantium labore, facere
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        eius praesentium ratione necessitatibus expedita atque, totam distinctio
        quibusdam, eveniet animi commodi illum!
      </p>
      <Link to="/about">About Page</Link>
      <Link to="/service">Service Page</Link>
    </div>
  );
};

export default Home;
