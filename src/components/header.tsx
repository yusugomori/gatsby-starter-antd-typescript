import { Link } from 'gatsby'
import React from 'react'

import { AntDesignOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
const AntHeader = Layout.Header

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <AntHeader>
    <div>
      <h1>
        <Link to="/" style={{ color: '#fff' }}>
          <AntDesignOutlined />
          {` `}
          {siteTitle}
        </Link>
      </h1>
    </div>
  </AntHeader>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
