exports = module.exports = Base => class extends Base {

	actions () {
		this.system.emit('instance_actions', this.id, {
			'goto': {
				label:   'Goto a specific cue',
				options: [
					{
						type:     'textinput',
						label:    'Cue',
						tooltip:  'Cue Number',
						id:       'cue',
						regex:    this.REGEX_CUE_NUMBER,
						required: true
					},
					{
						type:     'number',
						label:    'Exec',
						tooltip:  'Executor Number',
						id:       'exec',
						required: false,
						min:      0,
						max:      127
					},
					{
						type:     'number',
						label:    'Page',
						tooltip:  'Page Number',
						id:       'page',
						required: false,
						min:      1,
						max:      127,
						default:  1
					},
					{
						type:     'number',
						label:    'Fade',
						tooltip:  'Optional fade time in seconds',
						id:       'fade',
						required: false,
						min:      0,
						max:      3600
					}
				]
			},
			'pause': {
				label:   'Pause an executor',
				options: [
					{
						type:     'number',
						label:    'Exec',
						tooltip:  'Executor Number',
						id:       'exec',
						required: false,
						min:      0,
						max:      127
					},
					{
						type:     'number',
						label:    'Page',
						tooltip:  'Page Number',
						id:       'page',
						required: false,
						min:      1,
						max:      127,
						default:  1
					}
				]
			},
			'resume': {
				label:   'Resume an executor',
				options: [
					{
						type:     'number',
						label:    'Exec',
						tooltip:  'Executor Number',
						id:       'exec',
						required: false,
						min:      0,
						max:      127
					},
					{
						type:     'number',
						label:    'Page',
						tooltip:  'Page Number',
						id:       'page',
						required: false,
						min:      1,
						max:      127,
						default:  1
					}
				]
			},
			'fader': {
				label:   'Move a fader',
				options: [
					{
						type:     'number',
						label:    'Percent',
						tooltip:  'Percentage to set, increase or decrease',
						id:       'percent',
						required: true,
						min:      0,
						max:      100
					},
					{
						type:     'dropdown',
						label:    'Action',
						tooltip:  'Set, increase or decrease the fader position',
						id:       'action',
						required: true,
						choices:  [
							{ id: 'set', label: 'Set'      },
							{ id: 'inc', label: 'Increase' },
							{ id: 'dec', label: 'Decrease' }
						],
						default:  'set'
					},
					{
						type:     'number',
						label:    'Exec',
						tooltip:  'Executor Number',
						id:       'exec',
						required: false,
						min:      0,
						max:      127
					},
					{
						type:     'number',
						label:    'Page',
						tooltip:  'Page Number',
						id:       'page',
						required: false,
						min:      1,
						max:      127,
						default:  1
					},
					{
						type:     'number',
						label:    'Fade',
						tooltip:  'Optional fade time in seconds',
						id:       'fade',
						required: false,
						min:      0,
						max:      3600
					}
				]
			},
			'fire': {
				label:   'Fire a macro',
				options: [
					{
						type:     'number',
						label:    'Macro',
						tooltip:  'Macro number between 1 and 255',
						id:       'macro',
						required: true,
						min:      1,
						max:      255
					}
				]
			},
			'off': {
				label:   'Switch an executor off',
				options: [
					{
						type:     'number',
						label:    'Exec',
						tooltip:  'Executor Number',
						id:       'exec',
						required: false,
						min:      0,
						max:      127
					},
					{
						type:     'number',
						label:    'Page',
						tooltip:  'Page Number',
						id:       'page',
						required: false,
						min:      1,
						max:      127,
						default:  1
					}
				]
			}
		})
	}

}
