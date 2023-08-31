import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

// Outlet: Component used as a placeholder to receive and display content from different pages
