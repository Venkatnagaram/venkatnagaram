import React,{Component} from 'react';

import LeftNav from '../layout/leftnav';
import MainBody from '../layout';

class ReactJs extends Component{

	render(){
		return(
			<div>
				<LeftNav />
				<MainBody />
			</div>
		)
	}

}
export default ReactJs;