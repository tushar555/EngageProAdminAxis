import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'm-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

	@HostBinding('class') classes: string = 'm-grid m-grid--hor m-grid--root m-page';

	@Input() errorType: number;

	constructor(private route: ActivatedRoute, private router:Router) {
	}

	ngOnInit() {
		this.errorType = +this.route.snapshot.paramMap.get('type');
		if (!this.errorType) {
			this.errorType = Math.floor((Math.random() * 6) + 1);
		}

		setTimeout(()=>{
			this.router.navigate(['/home'])
		},5000)
	}

}
