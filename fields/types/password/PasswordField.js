import React from 'react';
import Field from '../Field';
import {
	Button,
	FormInput,
	InlineGroup as Group,
	InlineGroupSection as Section,
} from '../../../admin/client/App/elemental';

import { PasswordField as locale } from '../../locales/zh-CN';

module.exports = Field.create({

	displayName: 'PasswordField',
	statics: {
		type: 'Password',
	},

	getInitialState () {
		return {
			passwordIsSet: this.props.value ? true : false,
			showChangeUI: this.props.mode === 'create' ? true : false,
			password: '',
			confirm: '',
		};
	},

	valueChanged (which, event) {
		var newState = {};
		newState[which] = event.target.value;
		this.setState(newState);
	},

	showChangeUI () {
		this.setState({
			showChangeUI: true,
		}, () => this.focus());
	},

	onCancel () {
		this.setState({
			showChangeUI: false,
		}, () => this.focus());
	},

	renderValue () {
		return <FormInput noedit>{this.props.value ? 'Password Set' : ''}</FormInput>;
	},

	renderField () {
		return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
	},

	renderFields () {
		return (
			<Group block>
				<Section grow>
					<FormInput
						autoComplete="off"
						name={this.getInputName(this.props.path)}
						onChange={this.valueChanged.bind(this, 'password')}
						placeholder={locale["New password"]}
						ref="focusTarget"
						type="password"
						value={this.state.password}
					/>
				</Section>
				<Section grow>
					<FormInput
						autoComplete="off"
						name={this.getInputName(this.props.paths.confirm)}
						onChange={this.valueChanged.bind(this, 'confirm')}
						placeholder={locale["Confirm new password"]} value={this.state.confirm}
						type="password"
					/>
				</Section>
				{this.state.passwordIsSet ? (
					<Section>
						<Button onClick={this.onCancel}>{locale.Cancel}</Button>
					</Section>
				) : null}
			</Group>
		);
	},

	renderChangeButton () {
		var label = this.state.passwordIsSet
			? locale["Change Password"]
			: locale["Change Password"];

		return (
			<Button ref="focusTarget" onClick={this.showChangeUI}>{label}</Button>
		);
	},

});
