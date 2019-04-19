// import React, { Component, Fragment } from 'react';

// class TodoList extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			inputValue: '',
// 			list: [1,2,3]
// 		}
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 		this.handleBtnClick = this.handleBtnClick.bind(this);
// 		this.handleItemDelete = this.handleItemDelete.bind(this);
// 	}
// 	handleInputChange(e) {
// 		this.setState({
// 			inputValue: e.target.value
// 		})
// 	}
// 	handleBtnClick() {
// 		if(this.state.inputValue.length <1) {
// 			return;
// 		}
// 		this.setState({
// 			list: [...this.state.list, this.state.inputValue],
// 			inputValue: ''
// 		})
// 	}
// 	handleItemDelete(index) {
// 		const list = [...this.state.list];
// 		list.splice(index, 1);
// 		this.setState({
// 			list: list
// 		})
// 	}

// 	render() {
// 		return (
// 			<Fragment>
// 				{/* 这是一行注释 */}
// 				<div>
// 					<input value={this.state.inputValue} onChange={this.handleInputChange} />
// 					<button onClick={this.handleBtnClick}>提交</button>
// 				</div>
// 				<ul>
// 					{
// 						this.state.list.map((item, index) => {
// 							return (
// 								<li key= {index} 
// 										onClick= {() => this.handleItemDelete(index)}
// 										dangerouslySetInnerHTML = {{__html: item}}
// 										>
// 										{/* {item} */}
// 								</li>
// 							)
// 						})
// 					}
// 				</ul>
// 			</Fragment>
// 		)
// 	}
// }

// export default TodoList

class Stack {
	constructor() {
		this.item = [];
	}

	push(element) {
		this.item.push(element);
	}

	pop() {
		return this.item.pop();
	}

	peek() {
		return this.item[this.item.length - 1];
	}

	isEmpty() {
		return this.item.length === 0;
	}

	size() {
		return this.item.length;
	}

	clear() {
		this.item = [];
	}

	print() {
		console.log(this.item);
	}
}

var stack = new Stack();
stack.push(5);
stack.print();

function divideBy2(decNumber) {
	var remStack = new Stack(),
		rem,
		brnaryString = '';
	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);

	}

	while (!remStack.isEmpty()) {
		brnaryString += remStack.pop().toString();
	}
	return brnaryString;
}

console.log(divideBy2(8));

function baseConverter(decNumber, base) {
	var remStack = new Stack(),
		rem,
		brnaryString = '',
		digits = '0123456789ABCDEF';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);

	}

	while (!remStack.isEmpty()) {
		brnaryString += digits[remStack.pop()]
	}
	return brnaryString;
}
console.log(baseConverter(12, 2))
console.log(baseConverter(12, 8))
console.log(baseConverter(12, 16))