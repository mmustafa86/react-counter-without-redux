class Counter extends React.Component {
constructor(props){
    super(props);
    this.state ={
        value: 0
    };
}

handleClick(){
    console.log('clicked')
let newState = {
        value: this.state.value +1
    }
    this.setState(newState)
}

render (){
    return(
     <div>
        <span>{this.state.value}</span>
        <button onClick={()=>this.handleClick()}>Count</button>
    </div>
    );
}
}
