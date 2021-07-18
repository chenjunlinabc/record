    import React from "react"
    import ReactDOM from "react-dom"
    import propTypes from "prop-types"
    const {Provider,Consumer} = React.createContext()
    
    class Hallo extends React.Component{
        state = {
            count: 0
        }
        onMax = () =>{
            this.setState({
                count: this.state.count +1
            })
        }
        render(){
            return (
                <div>
                    <Provider value = "react">
                        <Abc count={this.state.count}/>
                        <Xyz onMax = {this.onMax}>hallo</Xyz>
                    </Provider>
                    
                </div>
            )
        }
    }
    const Abc = (props) => {
        return (
            <div>
                <Consumer>
                    
                    {
                       data => <div>hallo,{data}</div>
                    }
                </Consumer>
                {props.count}
            </div>
        )
    }
    const Xyz = (props) => {
        return (
            <div onClick = {() => props.onMax()}>
                xyz
                <div>子节点：{props.children}</div>
            </div>
        )
    }
    ReactDOM.render(<Hallo />,document.getElementById("root"))

    const Button = () => (
        <button>
            GO
        </button>
    )
    
    const Yes = (props) =>{
        return(
            <div>
                组件的子节点：{props.children}
            </div>
        )
    }
    //ReactDOM.render(<Yes><Button/></Yes>,document.getElementById("app"))

    class Noabc extends React.Component{
        render(){
            return(
                <div>hallo,{this.props.name}</div>
            )
        }
    }
    Noabc.propTypes = {
        name: propTypes.string
    }

    //ReactDOM.render(<Noabc name="react"/>,document.getElementById("app"))


    class Defaultabc extends React.Component{
        constructor(props){
            super(props)
            console.log("constructor钩子被触发")
        }
        componentDidMount(){
            console.log("componentDidMount钩子被触发")
        }
        render(){
            console.log("render钩子被触发")
            return(
                <div>props的默认值：{this.props.Defaultdata}</div>
            )
        }
    }
    Defaultabc.defaultProps = {
        Defaultdata: 999
    }
    //ReactDOM.render(<Defaultabc/>,document.getElementById("app"))

 


    class Maxabc extends React.Component{
        componentDidUpdate(prevProp){
            console.log("componentDidUpdate钩子触发")
            if(prevProp.count !== this.props.count){
                this.setState({})
            }
        }
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
        goClick = () =>{
            this.setState({
                count: this.state.count + 1
            })
        }
        render(){
            console.log("reder钩子被触发")
            return(
                <div>
                    <p>
                        点击数：{this.state.count}
                    </p>
                    {
                        this.state.count >= 10 ? <p>已经点击了10次</p> : <Gabc/>
                    }
                    <button onClick={this.goClick}>go</button>
                </div>
            )
        }
    }
    class Gabc extends React.Component{
        componentDidMount(){
            this.timeId = setInterval(()=>{
                console.log("定时器执行中")
            },1000)
        }
        render(){
            return(
                <div>hallo,react</div>
            )
        }
        componentWillUnmount(){
            console.log("componentWillUnmount钩子被触发")
            clearInterval(this.timeId)
        }
    }
    //ReactDOM.render(<Maxabc/>,document.getElementById("app"))



    class Hello extends React.Component{
        state = {
            x: 0,
            y: 0
        }
        yesClick = (e) =>{
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount(){
            window.addEventListener("mousemove",this.yesClick)
        }
        render(){
            return this.props.children(this.state)
        }
    }
    class App extends React.Component{
        render(){
            return(
                <div>
                    <div>hallo,react</div>
                    <Hello>
                        {
                            mouse =>{
                                return(
                                    <p>
                                        鼠标坐标：{mouse.x},{mouse.y}
                                    </p>
                                )
                            }
                        }
                    </Hello>
                </div>
            )
        }
    }
    ReactDOM.render(<App/>,document.getElementById("app"))
