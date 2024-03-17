import DropDownMenu from '../layout/HeaderLayout/DropDownMenu'
import HeaderLogo from '../layout/HeaderLayout/HeaderLogo'
import HeaderMenu from '../layout/HeaderLayout/HeaderMenu'
import HeaderRight from '../layout/HeaderLayout/HeaderRight'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 px-9'>
      <HeaderLogo />
      <DropDownMenu />
      <HeaderMenu />
      <HeaderRight />
    </div>
  )
}

export default Header
