import React from 'react';

import { SegmentedControl } from '../../../admin/client/App/elemental';
import { PasswordFilter as locale } from '../../locales/zh-CN';

const EXISTS_OPTIONS = [
	{ label: locale["Is Set"], value: true },
	{ label: locale["Is NOT Set"], value: false },
];

function getDefaultValue () {
	return {
		exists: true,
	};
}

var PasswordFilter = React.createClass({
	propTypes: {
		filter: React.PropTypes.shape({
			exists: React.PropTypes.oneOf(EXISTS_OPTIONS.map(i => i.value)),
		}),
	},
	statics: {
		getDefaultValue: getDefaultValue,
	},
	getDefaultProps () {
		return {
			filter: getDefaultValue(),
		};
	},
	toggleExists (value) {
		this.props.onChange({ exists: value });
	},
	render () {
		const { filter } = this.props;

		return (
			<SegmentedControl
				equalWidthSegments
				onChange={this.toggleExists}
				options={EXISTS_OPTIONS}
				value={filter.exists}
			/>
		);
	},
});

module.exports = PasswordFilter;
