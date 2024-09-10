import Header from "./components/header"
import Heading from "./components/heading"
import LiveUpdates from "./components/liveupdates"
import Table from "./components/table"
import MainHeader from "./components/mainheader"
import CryptoAlertForm from "./components/submit"


function App() {
return (
    <>
      <MainHeader />
      <Header />
      <div className="flex flex-col gap-[40px] mb-[25px] ">
      <Heading />
       <CryptoAlertForm />
      {/* <LiveUpdates /> */}
      </div>
      <Table />
    </>
  )
}

export default App
