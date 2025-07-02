import { useGlobleContext } from "../Context";
const User = () => {
  const { user, handleClick } = useGlobleContext();
  return (
    <article>
      {user ? (
        <>
          <h4>User: {user?.name}</h4>
          <button onClick={handleClick}>sign out</button>
        </>
      ) : (
        <button>sign in</button>
      )}
    </article>
  );
};

export default User;
