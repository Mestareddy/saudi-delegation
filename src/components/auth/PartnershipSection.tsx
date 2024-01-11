import { patnersData } from '@/mockData/homeData'
import Image from 'next/image'
import React from 'react'

const PartnershipSection: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-4 h-auto gap-x-[53px] gap-y-10">
      {patnersData.map((partner) => (
        <div className="h-[50px]" key={partner.id}>
          <Image
            key={partner.id}
            src={partner.image}
            alt={partner.name}
            width={50}
            height={50}
          />
        </div>

      ))}
    </div>
  )
}

export default PartnershipSection
