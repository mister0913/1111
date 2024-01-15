import { useState } from 'react'
import styled from 'styled-components'

import { useReadNotifications } from 'state/notifications/hooks'

import { newNotificationsFirst } from '.'
import Column from 'components/Column'
import NotificationCardsItems from 'components/Notifications/Cards/index'
import { RowCenter } from 'components/Row'
import { Card } from 'components/Card'

const ContentContainer = styled(Column)`
  gap: 12px;
  overflow: scroll;
`

const DropdownContent = styled(Card)<{ isOpen: boolean }>`
  gap: 12px;
  border: none;
  padding: 0px;
  max-height: 500px;
  overflow: scroll;
  background: ${({ theme }) => theme.color3};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`

const OldButton = styled(RowCenter)`
  font-weight: 500;
  font-size: 12px;
  min-height: 30px;
  cursor: pointer;
  position: relative;
  border-radius: 6px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color4};
  border: 1px solid ${({ theme }) => theme.yankeesBlue};
  box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.yankeesBlue};
`

export default function OldNotificationsDropdown({ newNotifications }: { newNotifications: boolean }) {
  const [showDropdown, toggleDropdown] = useState(newNotifications)
  const readNotifications = [...useReadNotifications()]

  function getTriggers(): React.ReactElement<any> | string {
    return <OldButton>{`${showDropdown ? 'Hide' : 'Show'} Old Notifications`}</OldButton>
  }

  function GetContent(): JSX.Element {
    return (
      <>
        {readNotifications.length > 0 && (
          <Column style={{ gap: '10px' }}>
            {readNotifications.sort(newNotificationsFirst).map((notification, index) => {
              return <NotificationCardsItems notification={notification} key={index} />
            })}
          </Column>
        )}
      </>
    )
  }

  return (
    <>
      <ContentContainer onClick={() => toggleDropdown(!showDropdown)}>
        {getTriggers()}
        <DropdownContent isOpen={showDropdown}>
          <GetContent />
        </DropdownContent>
      </ContentContainer>
    </>
  )
}
