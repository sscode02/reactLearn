import React, { useState } from 'react';

const ListsAndKeys: React.FC = () => {
  const [colors, setColors] = useState([{
    name: '红色',
    color: 'red'
  },
  {
    name: '白色',
    color: 'white'
  }
  ])
  const [color, setColor] = useState({ value: '' })

  const handleSubmit = (e: any) => {
    setColor({ value: e.target.value })
    console.log(e.target.value)
    console.log(color)

  }

  return (
    <div>
      <form >
        <label>
          选择你喜欢的风味:
          <select value={color.value} onChange={handleSubmit}>
            {
              colors.map((item, index) => <option value={item.color} key={index}>{item.name}</option>)
            }
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    </div>
  )
}

export default ListsAndKeys