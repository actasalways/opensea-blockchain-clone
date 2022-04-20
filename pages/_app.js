import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'


/**
 * the chain ID 4 represent Rinkeby Network 
 * the 'injected' connector is a web3 connection method used by Metamask  
 */
const supportChainIds= [4] 
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
    supportedChainIds={supportChainIds}
    connectors={connectors}
    >
   <Component {...pageProps} />
  </ThirdwebWeb3Provider>
    )
}

export default MyApp
