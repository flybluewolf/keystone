import React from 'react';
import Field from '../Field';
import Checkbox from '../../components/Checkbox';
import { FormField } from '../../../admin/client/App/elemental';
import FormLabel from '../../../admin/client/App/elemental/FormLabel';

const NOOP = () => {};

module.exports = Field.create({
	displayName: 'BooleanField',
	statics: {
		type: 'Boolean',
	},
	propTypes: {
		indent: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		path: React.PropTypes.string.isRequired,
		value: React.PropTypes.bool,
		align: React.PropTypes.string
	},

	valueChanged (value) {
		this.props.onChange({
			path: this.props.path,
			value: value,
		});
	},
	renderFormInput () {
		if (!this.shouldRenderField()) return;

		return (
			<input
				name={this.getInputName(this.props.path)}
				type="hidden"
				value={!!this.props.value}
			/>
		);
	},
	renderUI () {
		const { indent, value, label, path, align } = this.props;

		if (align == 'left') {
			return (
				<div data-field-name={path} data-field-type="boolean">
					<FormField offsetAbsentLabel={indent}>
						<FormLabel>
							{label}
						</FormLabel>
						<label style={{ height: '2.3em' }}>
							{this.renderFormInput()}
							<Checkbox
								checked={value}
								onChange={(this.shouldRenderField() && this.valueChanged) || NOOP}
								readonly={!this.shouldRenderField()}
							/>
						</label>
						{this.renderNote()}
					</FormField>
				</div>
			);
		} else {
			return (
				<div data-field-name={path} data-field-type="boolean">
					<FormField offsetAbsentLabel={indent}>
						<label style={{ height: '2.3em' }}>
							{this.renderFormInput()}
							<Checkbox
								checked={value}
								onChange={(this.shouldRenderField() && this.valueChanged) || NOOP}
								readonly={!this.shouldRenderField()}
							/>
							<span style={{ marginLeft: '.75em' }}>
								{label}
							</span>
						</label>
						{this.renderNote()}
					</FormField>
				</div>
			);
		}
	},
});
