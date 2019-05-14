import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './card.sass'
import './cardInfo.sass'

import AppIcon from './AppIcon'

import bytes from 'pretty-bytes'

import InstallButton from './InstallButton'

function NewLines({ children }) {
	return children.split('\n').map((str, i) => <div key={i}>{str}</div>)
}

function BuildMessages({ messages, versionNumber }) {
	if (!messages) {
		return null
	}

	const { pm, sc } = messages

	return (
		<div className="cardInfo-messages">
			{pm && pm.ticket && (
				<div className="card-column-commit">
					<div className="card-column-commit-header">
						<div className="card-column-commit-header-info">
							PM:{' '}
							<span className="card-column-commit-header-info-msg">
								<a href={pm.ticket.url}>{pm.ticket.id || pm.ticket.url}</a>
							</span>
						</div>
						{versionNumber && (
							<div className="card-column-commit-header-version">{versionNumber}</div>
						)}
					</div>
					<p className="card-column-commit-content">
						<NewLines>{pm.ticket.message}</NewLines>
					</p>
				</div>
			)}
			{sc && sc.pr && (
				<div className="card-column-commit">
					<div className="card-column-commit-header">
						<div className="card-column-commit-header-info">
							PR:{' '}
							<span className="card-column-commit-header-info-msg">
								<a href={sc.pr.url}>{sc.pr.id || sc.pr.url}</a>
							</span>
						</div>
						{versionNumber && (
							<div className="card-column-commit-header-version">{versionNumber}</div>
						)}
					</div>
					<p className="card-column-commit-content">
						<NewLines>{sc.pr.message}</NewLines>
					</p>
				</div>
			)}
			{sc && sc.commit && (
				<div className="card-column-commit">
					<div className="card-column-commit-header">
						<div className="card-column-commit-header-info">
							Commit info:{' '}
							<span className="card-column-commit-header-info-msg">
								<a href={sc.commit.url}>{sc.commit.id}</a>
							</span>
						</div>
						{versionNumber && (
							<div className="card-column-commit-header-version">{versionNumber}</div>
						)}
					</div>
					<p className="card-column-commit-content">
						<NewLines>{sc.commit.message}</NewLines>
					</p>
				</div>
			)}
		</div>
	)
}

export default class CardInfo extends Component {
	static getPlatformName(platform) {
		switch (platform) {
			case 'ios':
				return 'iOS'
			case 'android':
				return 'Android'
			default:
				return 'Unknown'
		}
	}

	render() {
		return (
			<div className="card card-columns">
				<div className="card-column">
					<div className="card-column-icon">
						<AppIcon empty={!this.props.icon} name={this.props.name} id={this.props.uuid} />
					</div>
					<InstallButton build={{ id: this.props.uuid, platform: this.props.platform }} />
				</div>
				<div className="card-column">
					<h1 className="card-column-name">{this.props.name}</h1>
					<h2 className="card-column-id">({this.props.id})</h2>
					<BuildMessages messages={this.props.info} versionNumber={this.props.versionNumber} />
				</div>
				<div className="card-column">
					<div className="card-column-infobox">
						<div className="card-column-infobox-item">
							<div className="card-column-infobox-item-name">Platform:</div>
							<div className="card-column-infobox-item-value">
								{CardInfo.getPlatformName(this.props.platform)}
							</div>
						</div>
						<div className="card-column-infobox-item">
							<div className="card-column-infobox-item-name">Version:</div>
							<div className="card-column-infobox-item-value">{this.props.versionNumber}</div>
						</div>
						<div className="card-column-infobox-item">
							<div className="card-column-infobox-item-name">Bundle:</div>
							<div className="card-column-infobox-item-value">{this.props.versionCode}</div>
						</div>
						<div className="card-column-infobox-item">
							<div className="card-column-infobox-item-name">Size:</div>
							<div className="card-column-infobox-item-value">
								{this.props.size && bytes(this.props.size)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

CardInfo.contextTypes = {
	connector: PropTypes.object,
	token: PropTypes.string,
}
