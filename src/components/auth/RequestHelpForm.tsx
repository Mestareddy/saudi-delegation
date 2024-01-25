import { Form, Input } from 'antd'
import React from 'react'
import { formItemStyle } from './utils'

const RequestHelpForm: React.FunctionComponent = () => {
  return (
    <div>
      <Form.Item
        name="request_help"
        label="How may we help? "
        className="basis-2/4"
        style={formItemStyle}
        rules={[
          { required: false, message: "Request help field is required" },
        ]}
      >
        <Input placeholder="Type here" />
      </Form.Item>
    </div>
  )
}

export default RequestHelpForm
