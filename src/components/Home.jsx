import Nav from './templates/Nav';
import TopNav from './templates/TopNav';

const Home = () => {
  document.title = "SareGama | Movie App"
  return <>
    <Nav />
    <div className="w-[80%] h-full">
      <TopNav />
    </div>
  </>
}

export default Home