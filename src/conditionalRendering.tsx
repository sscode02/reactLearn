import React, { useState } from 'react'

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

const ConditionalRenderingFC: React.FC = () => {
  const [isShowWarn, setIsShowWarn] = useState(false)

  const handleClick = () => {
    setIsShowWarn(!isShowWarn);
  }
  return (
    <div>
      <WarnComponentFC isShowWarn={isShowWarn} />
      <button onClick={handleClick}> Click Me!</button>
    </div>
  )
}

const WarnComponentFC: React.FC<WarnComponentProps> = ({ isShowWarn }) => {
  console.log(isShowWarn)
  if (!isShowWarn) return null
  return (
    <div>Warning !</div>
  )
}

export default ConditionalRenderingFC