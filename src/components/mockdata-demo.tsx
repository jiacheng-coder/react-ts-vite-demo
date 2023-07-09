// 数据mock有如下几种方案：
// 1. 手写 data ref
// 2. 三方开源工具 json-server + faker (推荐)
// 3. 自研平台

// json-server restFul api
// 准备json文件即可
// faker 模拟数据
import { useEffect } from 'react'
import axios from 'axios'

function mockData() {
  useEffect(() => {
    axios.get('http://localhost:3000/posts').then(res => {
      console.log(res.data)
    })
  }, [])
  return <div className="mockData">

  </div>
}
export default mockData
