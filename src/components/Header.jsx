import myImage from "/src/images/chef.png"

export default function Header() {
  return (
    <header>
        <img className="chef_img" src={myImage} alt="" />
        <h1>Chef Thevindu</h1>
    </header>
  )
}