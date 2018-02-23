import React,{Component} from 'react'

export default class ShowCase extends Component {
	render(){
		return <form action="/profile" method="POST" encType="multipart/form-data">
				<input type="file" name="avatar" accept="application/x-zip-compressed,image/*" />
				 
				<input class="form-control" type="text" name="description" placeholder="Description or Message"/>
				 
				<input class="btn btn-primary" type="submit" value="submit"/>
				</form>
	}
}
