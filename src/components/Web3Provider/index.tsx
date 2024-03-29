import { ReactNode, useMemo } from 'react'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { Connector } from '@web3-react/types'

import { Connection } from 'connection'
import { getConnectionName } from 'connection/utils'

import useEagerlyConnect from 'lib/hooks/useEagerlyConnect'
import useOrderedConnections from 'lib/hooks/useOrderedConnections'

export default function Web3ReactProviderDefault({ children }: { children: ReactNode }) {
  useEagerlyConnect()
  const connections = useOrderedConnections()
  const connectors: [Connector, Web3ReactHooks][] = connections.map(({ hooks, connector }) => [connector, hooks])

  const key = useMemo(() => connections.map(({ type }: Connection) => getConnectionName(type)).join('-'), [connections])

  return (
    <Web3ReactProvider connectors={connectors} key={key}>
      {children}
    </Web3ReactProvider>
  )
}

//add tracer
