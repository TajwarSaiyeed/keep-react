'use client'
import { ChartPieSlice, Copy, Pen, Phone, SignOut, UserCircle, Users } from 'phosphor-react'
import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '../../../../src'

const DropdownWithIcon = () => {
  return (
    <Dropdown>
      <DropdownAction>Dropdown</DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>
            <Users size={20} />
            Contacts
          </DropdownItem>
          <DropdownItem>
            <Phone size={20} />
            Phone
          </DropdownItem>
          <DropdownItem>
            <ChartPieSlice size={20} />
            Statistics
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <Pen size={20} />
            Rename
          </DropdownItem>
          <DropdownItem>
            <Copy size={20} />
            Duplicate
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <UserCircle size={20} />
            Account
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}

const DropdownWithIconCode = `
'use client'
import { ChartPieSlice, Copy, Pen, Phone, SignOut, UserCircle, Users } from 'phosphor-react'
import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList} from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction>Dropdown</DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>
            <Users size={20} />
            Contacts
          </DropdownItem>
          <DropdownItem>
            <Phone size={20} />
            Phone
          </DropdownItem>
          <DropdownItem>
            <ChartPieSlice size={20} />
            Statistics
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <Pen size={20} />
            Rename
          </DropdownItem>
          <DropdownItem>
            <Copy size={20} />
            Duplicate
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <UserCircle size={20} />
            Account
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}
`

export { DropdownWithIcon, DropdownWithIconCode }
