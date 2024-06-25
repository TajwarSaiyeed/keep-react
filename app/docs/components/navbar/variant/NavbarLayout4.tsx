import Image from 'next/image'
import KeepDarkLogo from '../../../../../public/images/keep-dark.svg'
import KeepLogo from '../../../../../public/images/keep.svg'
import {
  Avatar,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from '../../../../src'

const NavbarLayout4 = () => {
  return (
    <div className="h-96">
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            <Image src={KeepLogo} alt="keep" width="88" height="40" className="block dark:hidden" />
            <Image src={KeepDarkLogo} alt="keep" width="88" height="40" className="hidden dark:block" />
          </NavbarBrand>
          <NavbarList>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </NavbarList>
          <NavbarList>
            <Dropdown placement="bottom-end">
              <DropdownAction asChild>
                <Avatar size="lg" shape="circle" img="/images/avatar/avatar-3.png" />
              </DropdownAction>
              <DropdownContent>
                <DropdownList>
                  <DropdownItem>Statistics</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Account</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Sign In</NavbarItem>
            <NavbarItem active={true}>Sign Up</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </div>
  )
}

const NavbarLayout4Code = `
import {
  Avatar,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react'

export const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>
          <img src={KeepLogo} alt="keep" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <Dropdown placement="bottom-end">
            <DropdownAction asChild>
              <Avatar size="lg" shape="circle" img="/images/avatar/avatar-3.png" />
            </DropdownAction>
            <DropdownContent>
              <DropdownList>
                <DropdownItem>Statistics</DropdownItem>
                <DropdownItem>Duplicate</DropdownItem>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}

`

export { NavbarLayout4, NavbarLayout4Code }
