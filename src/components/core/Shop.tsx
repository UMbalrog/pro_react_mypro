import React from 'react'
import Layout from './Layout'
import { useSelector } from 'react-redux'

const Shop = () => {
  const state = useSelector(state => state);
  return (
    <Layout title="商城" subTitle="欢迎来到商城页面，快去挑选商品吧">
      Shop
      {JSON.stringify(state)}
    </Layout>
  )
}

export default Shop