import React,{Component} from 'react'
import css from './sample16.css'
import css2 from './sample17.css'
class ShowCase extends Component {

	render(){
		console.log(css2)
		return <div>
					<nav>
						<ul>
							<li><a href="#">title 1</a>
								<ul>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
								</ul>
							</li>
							<li><a href="#">title 2</a>
								<ul>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
									<li><a href="#">subtitle 1</a></li>
								</ul>
								</li>
							<li><a href="#">title 3</a></li>
							<li><a href="#">title 4</a></li>
							<li><a href="#">title 5</a></li>
						</ul>
					</nav>
					<div className={css.col}>abc</div>
					<div >
						<div className={css.box0}></div>
						
					</div>
					<div className={css.container1}>
						<div className={css.box1}></div>
						
					</div>
					<div >
						<div className={css.box2}></div>
						
					</div>
					<div className={css.container3}>
						<div className={css.box3}></div>
						
					</div>
					<div className={css.container4}>
						<div className={css.box4}></div>
						
					</div>
					<div className={css.container5}>
						
						
					</div>					<div className={css.box5}></div>
					<div className={css.action}>
						<label>Name Your Mores</label>
						<input />
						<button>build it</button>
					</div>

				</div>
	}
}

export default ShowCase