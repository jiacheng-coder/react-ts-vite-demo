/**
1. 为什么需要immerjs?
  react 数据不可变 操作数据状态的时候比较繁琐 更加习惯用可变的方式对数据做操作
  immerjs解决的问题：我们开发时候可以使用可变的方式对数据进行修改 内部会应付react 采取不可变的方式
2. hook + immerjs 使用
**/
import { useState } from "react"
import { produce } from 'immer'

function ImmerjsDemo() {
  const [list, setList] = useState([
    { id: 1, name: "react" },
    { id: 2, name: "vue" },
  ])

  const addList = () => {
    // setList((list) => [...list, { id: 3, name: "angular" }])
    setList(
      produce((draft) => {
        // draft为可以操作的原数据
        // 通过可变的操作方式修改数据即可，解决了useState数据不可变的局限
        draft.push({ id: 3, name: "angular" })
      })
    )
  }

  const deleteList = (id: number) => {
    // setList((list) => list.filter((item) => item.id !== id))
    setList(
      produce((draft) => {
        let idx = draft.findIndex(item => item.id === id)
        draft.splice(idx, 1)
      })
    )
  }

  return (
    <div className="immerjsDemo">
      <ul>
        {list.map((item) => (
          <li key={item.id} style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {item.name}
            <button onClick={() => deleteList(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addList()}>Add item</button>
    </div>
  )
}
export default ImmerjsDemo
