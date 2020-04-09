import {
	Component,
	OnInit,
	Output,
	Input,
	ViewChild,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	HostBinding
} from '@angular/core';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { Router } from '@angular/router';
import { Subject, from } from 'rxjs';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import * as objectPath from 'object-path';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { MenuConfigService } from '../../../../core/services/menu-config.service';
import { MenuConfig } from '../../../../config/menu';
import { loginFormModels } from '../../../../core/models/form-model';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'm-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

	public loginForm:any;
	public configModel: MenuConfig = new MenuConfig();
	public alreadyLogin:any;
	public model: any = { email: 'admin@demo.com', password: 'demo' };
	@HostBinding('class') classes: string = 'm-login__signin';
	@Output() actionChange = new Subject<string>();
	public loading = false;

	@Input() action: string;

	@ViewChild('f') f: NgForm;
	errors: any = [];

	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};
	isCookiePresent: boolean;
	userDetails: any;

	constructor(
		private authService: AuthenticationService,
		private router: Router,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private cdr: ChangeDetectorRef,
		private menuConfig:MenuConfigService,
		private builder:FormBuilder,
		private cookie : CookieService
	) {
		this.isCookiePresent = this.cookie.get('userdetails')===''?false:true;
		this.userDetails = this.isCookiePresent?JSON.parse(this.cookie.get('userdetails')):{};
		this.createLoginForm();
	}


	createLoginForm(){
		this.loginForm = this.builder.group(loginFormModels);
	}

	deleteCookie(){
		this.cookie.delete('userdetails');
		this.isCookiePresent = false;
		this.createLoginForm();
	}

	createMenu(){
		const role = 'admin';
		this.configModel.config.aside.items =  role=='admin'?this.configModel.config.aside.admin:this.configModel.config.aside.spoc;
		this.menuConfig.onMenuUpdated$.next(this.configModel);

	}

	onSubmit(flag) {

		if(flag === 'continue'){
			this.createMenu();
			this.router.navigate(['/home']);
		}else if(flag === 'submit'){
			let result: any = Object.assign({}, this.loginForm.value);
		
			//On login It should be changed according to role.
			this.createMenu()
			this.router.navigate(['/home']);
			this.cookie.set('userdetails', JSON.stringify(this.loginForm.value))
	
			// this.spinner.active = true;
			// if (this.validate(this.f)) {
			// 	this.authService.login(this.model).subscribe(response => {
					
			// 		if (typeof response !== 'undefined') {
			// 			this.router.navigate(['/']);
			// 		} else {
			// 			this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'error');
			// 		}
			// 		this.spinner.active = false;
			// 		this.cdr.detectChanges();
			// 	});
			// }
		}
		
	}

	ngOnInit(): void {
		// demo message to show
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Use account
			<strong>admin@demo.com</strong> and password
			<strong>demo</strong> to continue.`;
			this.authNoticeService.setNotice(initialNotice, 'success');
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
	}

	validate(f: NgForm) {
		if (f.form.status === 'VALID') {
			return true;
		}

		this.errors = [];
		if (objectPath.get(f, 'form.controls.email.errors.email')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', {name: this.translate.instant('AUTH.INPUT.EMAIL')}));
		}
		if (objectPath.get(f, 'form.controls.email.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', {name: this.translate.instant('AUTH.INPUT.EMAIL')}));
		}

		if (objectPath.get(f, 'form.controls.password.errors.required')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', {name: this.translate.instant('AUTH.INPUT.PASSWORD')}));
		}
		if (objectPath.get(f, 'form.controls.password.errors.minlength')) {
			this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', {name: this.translate.instant('AUTH.INPUT.PASSWORD')}));
		}

		if (this.errors.length > 0) {
			this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
			this.spinner.active = false;
		}

		return false;
	}

	forgotPasswordPage(event: Event) {
		this.action = 'forgot-password';
		this.actionChange.next(this.action);
	}

	register(event: Event) {
		this.action = 'register';
		this.actionChange.next(this.action);
	}
}
