interface LogoProps {
  onClick: () => void;
}
const Logo = ({ onClick }: LogoProps) => {
  return (
    <div onClick={onClick} id="logo" className="panel right">
      <img className="circular w-60" src="./images/planet3d.jpg" />
    </div>
  );
};

export default Logo;
