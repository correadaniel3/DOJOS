import React, {Component} from 'react';

var LiItem=React.createClass({
	render:function(){
		return(
			<div>
				<button onClick={this.props.borrar.bind(this.props.itemText,this)}>x</button>
				<label>{this.props.itemText}</label>
			</div>
		)
	}
});
export default LiItem;