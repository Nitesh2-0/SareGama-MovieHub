import Nav from './templates/Nav';

const Home = () => {
  document.title = "SareGama | Movie App"
  return <>
    <Nav />
    <div className="w-[80%] h-full"></div>
  </>
}

export default Home