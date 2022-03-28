interface LogoProps{
  logoImg: string;
}
export default function Logo({logoImg}:LogoProps){
return(
  <img src={logoImg} alt="logo" />
)
}
