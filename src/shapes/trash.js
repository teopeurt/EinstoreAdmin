import React, { Component } from 'react'

export default class IconTrash extends Component {
	render() {
		return (
			<svg
				className="shape shape-trash"
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 14 14"
			>
				<defs>
					<path
						id="z3mea"
						d="M170.97 169.69l-.86-9.19h9l-.86 9.19zm2.25-11.38H176l.53.88h-3.84zm4.85.88l-.94-1.55c-.24-.4-.67-.64-1.13-.64h-2.78c-.46 0-.9.24-1.13.64l-.94 1.55h-2.49c-.37 0-.66.29-.66.65v.33c0 .18.15.33.33.33h.45l.87 9.3c.07.68.64 1.2 1.32 1.2h7.29c.68 0 1.25-.52 1.31-1.2l.87-9.3h.45c.18 0 .33-.15.33-.33v-.33c0-.36-.3-.65-.66-.65z"
					/>
				</defs>
				<g>
					<g transform="translate(-168 -157)">
						<use fill="currentColor" xlinkHref="#z3mea" />
					</g>
				</g>
			</svg>
		)
	}
}
