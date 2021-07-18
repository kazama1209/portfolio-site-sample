import TopImage from "components/TopImage"

const Home: React.FC = () => {
  return (
    <>
      <div className="shutter">
        <img src="nextjs.png" alt="logo" className="logo"/>
      </div>
      <TopImage />
    </>
  )
}

export default Home
