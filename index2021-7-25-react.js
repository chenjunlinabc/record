    import React from "react"
    import ReactDOM from "react-dom"
    import { BrowserRouter as Router, Route, Link } from "react-router-dom"
    const withHallo = (DomeAbc) =>{
        class App extends React.Component{
            state = {
                x: 0,
                y: 0
            }
            onAbc = (e) =>{
                {/*this.setState({
                    x: e.clientX,
                    y: e.clientY
                })*/}
                this.setState((state, props) =>{
                    return{
                        x: e.clientX,
                        y: e.clientY
                    }
                },() => {
                    console.log("hallo")
                })
            }
            render() {
                return (
                    <div onMouseMove= {this.onAbc}>
                        <DomeAbc  {...this.state} {...this.props} mouse={this.state}></DomeAbc>
                    </div>
                )
            }
            componentDidMount(){
                window.addEventListener("mousemove",this.onAbc)
            }
            // eslint-disable-next-line react/no-typos
            componentWillunmount(){
                window.removeEventListener("mousemove",this.onAbc)
            }
            shouldComponentUpdate(nextProps, nextState){
                console.log(nextProps, nextState)
                console.log(this.props, this.state)
                // eslint-disable-next-line no-unreachable
                if(nextState.x === this.state.x && nextState.y === this.state.y){
                    return false
                }
                return true
            }
        }
        App.displayName = `WithHallo${ADisplayName(DomeAbc)}`
        return App
    }
    function ADisplayName(DomeAbc){
        return DomeAbc.displayName || DomeAbc.name || "Component"
    }


    const PostMax = (props) =>{
        const { x, y } = props.mouse
        // eslint-disable-next-line no-undef
        console.log(props)
        
        return (
            <Router>
                <div>
                    <p>(x:{x}, y:{y})</p>
                    <Link to="/domeabc">跳转</Link>
                    <Route path="/domeabc" component={Domeabc}></Route>
                    <Route path="/" component={Abc}></Route>
                </div>
            </Router>
        ) 
    }
    const Abc = (props) => {
        const onbock = () =>{
            props.history.go(-1)
        }
        return(
            <div>
                <div>hallo</div>
                <div onClick={onbock}>返回</div>
            </div>
        )
    }
    class Domeabc extends React.Component{
        onGo = () =>{
            this.props.history.push("/Abc")
        }
        render(){
            return(
                <div onClick = {this.onGo}>goDome</div>
            )
        }
    }


    const Domeyes = withHallo(PostMax)
    ReactDOM.render(<Domeyes a="hallo"/>,document.getElementById("app"))










