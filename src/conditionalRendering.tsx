import React from 'react'

type WarnComponentProps = {
  isShowWarn: Boolean
}

class WarnComponent extends React.Component<WarnComponentProps> {
  constructor(props: WarnComponentProps) {
    super(props)
  }
  render() {
    if (this.props.isShowWarn) {
      return null
    }
    return (
      <div className="warning">
        Warning!
      </div>
    )
  }
}

type MyState = {
  isShowWarn: Boolean
}
type MyProps = {}

class ConditionalRendering extends React.Component<MyProps, MyState> {
  constructor() {
    super({})
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      isShowWarn: false
    }
  }

  handleClick() {
    console.log(1)
    this.setState({
      isShowWarn: !this.state.isShowWarn
    })

  }

  render() {
    return (
      <div>
        <WarnComponent isShowWarn={this.state.isShowWarn} />
        <button onClick={() => this.handleClick()}>Click Me</button>
      </div>
    )
  }
}

export default ConditionalRendering