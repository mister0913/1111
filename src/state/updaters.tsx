import { ApplicationUpdater } from './application/updater'
import { TransactionUpdater } from './transactions/updater'
import { UserUpdater } from './user/updater'
import { HedgerUpdater } from './hedger/updater'
import { NotificationUpdater } from './notifications/updater'
import { QuotesUpdater } from './quotes/updater'
import { UpdaterListeners } from './quotes/updater'
import { MulticallUpdater } from 'lib/state/multicall'
import { UpdaterUserContract } from './user/updaterUserContract'
import React from 'react'

export default function Updaters() {
  return (
    <>
      <ApplicationUpdater />
      <TransactionUpdater />
      <UserUpdater />
      <UpdaterUserContract />
      <HedgerUpdater />
      <QuotesUpdater />
      <UpdaterListeners />
      <MulticallUpdater />
      <NotificationUpdater />
    </>
  )
}
