    import React from "react"
    import ReactDOM from "react-dom"

// 学习react，2021-7-10
    const datamain = true;
    const hallo = () => {
        if(datamain){
            return <div style={{color: "#ccc"}}>hallo word</div>;
        }
        return <div>数据加载完成</div>;
    }
    const Data = () => {
        return datamain ? (<div>yes</div>) : (<div>no</div>)
    }

    const arrs = [
      {id: 1,name: "root"},
      {id: 2,name: "admin"},
      {id:3,name: "user"}
    ]
    const lists = (
      <ul>
        {arrs.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    )
    const app =(
        <div>
            {hallo()}
            {Data()}
        </div>
    )
    // const Hello = () => (<div>hallo,react</div>)
    
    class Hello extends React.Component{
      state = {
        count: 0,
        txt: ""
      }
      mainClick = () =>{
        console.log(this.Ref.current.value)
      }
       
      constructor(){
        super()
        this.Ref = React.createRef()
      }
      render(){
        return (
          <div>
              <input type="text" ref={this.Ref}/>
              <div onClick={this.mainClick}>
                hallo
              </div>
          </div>
        )
      }
    }

    class Abc extends React.Component{
      state = {name: "root"}
      DataClick = () =>{
        this.props.getMsg(this.state.name)
      }
      render(){
        return (
          <div onClick={this.DataClick}>yes</div>
        )
      }
    }
    class Hi extends React.Component{
      state = {
        Name: "默认值"
      }
      getDate = data =>{
        console.log(data)
        this.setState({
          Name: data
        })
      }
      render(){
        return(
          <div>数据：{this.state.Name}
            <Abc getMsg = {this.getDate}/>
          </div>
        )
      }
    }
    ReactDOM.render(<Hi/>,document.getElementById("app"))
    //ReactDOM.render(<Hello />,document.getElementById("app"))
    //ReactDOM.render(app,document.getElementById("app"))
    //ReactDOM.render(lists,document.getElementById("main"))

