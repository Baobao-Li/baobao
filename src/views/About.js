import React, { Component, Fragment } from 'react'

export default class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      title: "",
      list: [
        {
          "name": "淡淡的",
          "title": "吃吃吃",
          "id": 0
        }
      ],
      show: false,
      newId: "",
      name1: "",
      title1: ""
    }
  }

  render() {
    let { name, title, list, show, name1, title1 } = this.state
    return (
      <div>
        <p>姓名：<input type="text" value={name} name="name" onChange={(e) => this.ChangeEvent(e)} /></p>
        <p>标题：<input type="text" value={title} name="title" onChange={(e) => this.ChangeEvent(e)} /></p>
        <button onClick={() => this.ClickEvent()}>确定</button>
        {
          list.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name} - {item.title}</p>
                <button onClick={() => this.Bj(item.id)}>编辑</button>
              </div>
            )
          })
        }
        {
          show ?
            <div>
              <p>姓名：<input type="text" value={name1} name="name1" onChange={(e) => this.ChangeEvent(e)} /></p>
              <p>标题：<input type="text" value={title1} name="title1" onChange={(e) => this.ChangeEvent(e)} /></p>
              <button onClick={() => this.Event()}>确定</button>
            </div> : null
        }
      </div>
    )
  }

  ChangeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  ClickEvent = () => {
    let { name, title, list } = this.state
    if (name && title) {
      this.setState({
        list: [...list, {
          name: name,
          title: title,
          id: new Date() * 1
        }],
        name: "",
        title: ""
      })
    }
  }

  Bj = (id) => {
    this.setState({
      show: true,
      newId: id
    })
  }

  Event = () => {
    let { newId, name1, title1, list } = this.state
    list.forEach((item, index) => {
      if (item.id == newId) {
        list.splice(index, 1, {
          name: name1,
          title: title1,
          id: newId
        })
      }
    })
    this.setState({
      list: list,
      show: false
    })
  }
}
