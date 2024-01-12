import React from 'react'
import { Heading, Paragraph } from '../common'

const AuthHeader: React.FunctionComponent = () => {
  return (
    <div>
      <Paragraph className="font-normal md:basis-2/4">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface is a without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
      </Paragraph>
      <div className="flex flex-row items-center space-x-2.5 my-2.5 md:my-10">
        <div className="h-[3px] w-[26%] md:w-[15%] bg-green-hover" />
        <Heading type="h3" className="font-bold">
          Monday, January 29, 2024
        </Heading>
        <div className="h-[3px] w-[26%] md:w-[15%] bg-green-hover" />
      </div>
    </div>
  )
}

export default AuthHeader
