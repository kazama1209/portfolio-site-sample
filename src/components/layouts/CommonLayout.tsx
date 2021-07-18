import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"
// import ScrollUp from "../utils/ScrollUp"

interface CommonLayout {
  children: React.ReactElement
  title: string
}

const CommonLayout = ({ children, title }: CommonLayout) => {
  return (
    <>
      <Head>
        <title>{title ? title : "Portfolio"}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      {/* <ScrollUp /> */}
      <footer>
        <Footer />
      </footer>
      <style jsx global>
        {`
          html,
          body {
            background: #ffffff;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  )
}

export default CommonLayout
