import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}
const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mt-40 mx-auto max-w-[1112px] px-4 md:px-0">
      {children}
    </div>
  )
}

export default MainLayout
