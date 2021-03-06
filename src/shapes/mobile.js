import React, { Component } from 'react'

export default class IconMobile extends Component {
	render() {
		return (
			<svg
				className="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="20"
				viewBox="0 0 13 20"
			>
				<defs>
					<path
						id="rgeva"
						d="M306.8 51.25c0 .7-.58 1.25-1.3 1.25-.72 0-1.3-.56-1.3-1.25 0-.7.58-1.25 1.3-1.25.72 0 1.3.56 1.3 1.25zm5.2-14.38v16.26c0 1.03-.87 1.87-1.95 1.87h-9.1a1.91 1.91 0 0 1-1.95-1.88V36.89c0-1.04.87-1.88 1.95-1.88h9.1c1.08 0 1.95.84 1.95 1.88zm-1.3 0c0-.34-.3-.62-.65-.62h-9.1a.64.64 0 0 0-.65.63v16.24c0 .35.3.63.65.63h9.1c.36 0 .65-.28.65-.63z"
					/>
					<path
						id="rgevb"
						d="M305.45 46.98c.1.1.26.16.41.16.15 0 .3-.06.41-.16l2.29-2.22a.53.53 0 0 0-.01-.77.6.6 0 0 0-.81 0l-1.3 1.27v-4.72c0-.3-.26-.54-.58-.54a.56.56 0 0 0-.57.54v4.72l-1.3-1.26a.6.6 0 0 0-.82-.01.53.53 0 0 0 0 .77z"
					/>
				</defs>
				<g>
					<g transform="translate(-299 -35)">
						<g>
							<use xlinkHref="#rgeva" />
						</g>
						<g>
							<use xlinkHref="#rgevb" />
						</g>
					</g>
				</g>
			</svg>
		)
	}
}
