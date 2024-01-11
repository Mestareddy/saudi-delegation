import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}
const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mt-40">
      {children}
    </div>
  )
}

export default MainLayout
