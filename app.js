//lower component
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      mouseOver: false,
    };
  }

  onClickEvent() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseEnterEvent() {
    this.setState({
      mouseOver: !this.state.mouseOver
    });
  }

  onMouseLeaveEvent() {
    this.setState({
      mouseOver: !this.state.mouseOver
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.mouseOver ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onClickEvent.bind(this)} onMouseEnter={this.onMouseEnterEvent.bind(this)} onMouseLeave={this.onMouseLeaveEvent.bind(this)} >{this.props.item}</li>
    );
  }
}

//middle component
var GroceryList = (props) => (
    <div>
      <p>Just some basic JSX with a silly piece of text.</p>
      <ul class='list-items' >
        {props.items.map((item, i) =>
            <GroceryListItem  item={item} key={i}/>
        )}
      </ul>
    </div>
);


//top  component
var App = () => (
  <div>
  <p> Good Cake to you madam or sir. </p>
  <GroceryList items={['cilantro', 'chilies', 'limes', 'ground pork', 'kaffir lime leaves', 'bamboo', 'purple onion', 'spring onions', 'fish sauce', 'palm sugar (optional)']} />
  </div>
);

//render call...
ReactDOM.render(<App />, document.getElementById('app'));
