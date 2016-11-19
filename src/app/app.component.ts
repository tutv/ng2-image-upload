import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app works!';

	public imageUploaded(fileHolder) {
		var response = fileHolder['serverResponse'];
		response = JSON.parse(response);

		console.log(response);
	}
}
