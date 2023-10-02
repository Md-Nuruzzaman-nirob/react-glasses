import useAuthContext from "../../hooks/useAuthContext";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuthContext();

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm "
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm "
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
