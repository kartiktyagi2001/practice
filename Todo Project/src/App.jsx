import './App.css'
import {useRecoilValue, RecoilRoot} from 'recoil'
import {networkAtom, jobAtom, msgAtom, notifyAtom, meAtom} from './store/atoms/atoms.js'

function App() {

   return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
   );
  
}

function Navbar() {
  const networkCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom)
  const msgCount = useRecoilValue(msgAtom)
  const notifyCount = useRecoilValue(notifyAtom)
  const meCount = useRecoilValue(meAtom)

  return(
    <>
      <button>Network ({networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({msgCount})</button>
      <button>Notifications ({notifyCount})</button>

      <button>Me ({meCount})</button>
    </>
  )
}
export default App
