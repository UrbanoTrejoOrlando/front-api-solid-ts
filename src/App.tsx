import Form from "./components/Form";
import type { Props } from "./Types/Props";
import {Toaster} from "react-hot-toast";

const App = (props:Props) => {
  return (
    <>
      <Form/>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </>
  )
}

export default App
