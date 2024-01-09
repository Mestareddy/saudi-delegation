import { MainLayout } from '@/components/layout';
import Footer from '@/components/public/footer/Footer';
import Header from '@/components/public/header/Header';
import { Content } from 'antd/lib/layout/layout';
import React from 'react'

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Content className="bg-white min-h-screen">
        <MainLayout>
          {children}
        </MainLayout>
      </Content>
      <Footer />
    </div>
  )
}

export default layout
