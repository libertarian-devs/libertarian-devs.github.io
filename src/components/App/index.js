import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import TelegramIcon from '@material-ui/icons/Telegram'
import DiscordIcon from '@material-ui/icons/ChatBubble'
import Whatsapp from '@material-ui/icons/WhatsApp'

import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Made with ♥, liberty, and '}
			<Link color="inherit" href="https://material-ui.com/">
				MaterialUI
			</Link>{', '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const useStyles = makeStyles(theme => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
		},
		li: {
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.text.divider}`,
	},
	avatar: {
		margin: 'auto',
		marginBottom: 40,
		width: 200,
		height: 200,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(10, 0, 8),
	},
	projectCards: {
		padding: theme.spacing(4, 0, 4),
	},
	cardProject: {
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(3),
		border: `1px solid ${theme.palette.primary.contrastText}`,
	},
	footer: {
		borderTop: `1px solid ${theme.palette.text.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
	icon: {
		marginRight: 10,
		marginTop: 10,
		width: 32,
		height: 32
	}
}))

let App = ({ githubInfo, githubRepositories }) => {
	const { t } = useTranslation()
	let text = {
		home: t('home')
	}
	const classes = useStyles()
	const projects = githubRepositories.map((project) => {
		return {
			title: project.name,
			description: [ project.description ],
			language: [ project.language ],
			buttonText: '',
			buttonVariant: 'outlined',
			url: project.html_url
		}
	})

	return(
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<AppBar position="static" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" noWrap className={classes.toolbarTitle}>
					</Typography>
					<nav>
						<Link id="section-button" variant="button" color="textPrimary" className={classes.link}>
							{text.home.sections.about}
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
			<Container component="main">
				{/* Hero unit */}
				<Container maxWidth="md" className={classes.heroContent}>
					<Avatar className={classes.avatar} src={githubInfo.avatar_url} />
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						{githubInfo.name}
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" component="p" gutterBottom>
						{githubInfo.description}
					</Typography>
				</Container>
				<Container maxWidth="md">
					<Typography variant="h3" align="center" color="textPrimary" gutterBottom>
						{text.home.sections.projects}
					</Typography>
					<Grid container spacing={5} className={classes.projectCards}>
						{projects.map(project => (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={project.title} xs={12} sm={project.title === 'Enterprise' ? 12 : 6} md={4}>
								<Card className={classes.cardProject}>
									<CardHeader
										title={project.title}
										subheader={project.subheader}
										titleTypographyProps={{ align: 'center', variant: 'h6' }}
										subheaderTypographyProps={{ align: 'center' }}
										action={project.title === 'Pro' ? <StarIcon /> : null}
									/>
									<CardContent>
										<ul>
											{project.description.map(line => (
												<Typography color="textSecondary" component="li" variant="subtitle1" align="center" key={line}>
													{line}
												</Typography>
											))}
											{project.language.map(line => (
												<Typography component="li" variant="subtitle1" align="center" key={line}>
													{line}
												</Typography>
											))}
										</ul>
									</CardContent>
									<CardActions>
										<Button  href={project.url} target="_blank" rel="noopener" fullWidth variant={project.buttonVariant} color="textPrimary">
											<GitHubIcon />
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
				{/* End hero unit */}
				{/* Footer */}
				<Container maxWidth="md" component="footer" className={classes.footer}>
					<Grid container justify="space-evenly">
						<Grid item xs={12} sm={3} key={text.home.footer.contact}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								{text.home.footer.contact}
							</Typography>
							<ul >
								<Link href={'https://t.me/libertariandevs'} target="_blank" rel="noopener" color="textPrimary">
									<TelegramIcon className={classes.icon}/>
								</Link>
								<Link href={'https://discord.gg/c9ZMxtY'} target="_blank" rel="noopener" color="textPrimary">
									<DiscordIcon className={classes.icon}/>
								</Link>
								<Link href={'https://chat.whatsapp.com/Dtav6FFafUSKrJIWw2669Y'} target="_blank" rel="noopener" color="textPrimary">
									<Whatsapp className={classes.icon}/>
								</Link>
							</ul>
						</Grid>
						<Grid item xs={12} sm={9} key={text.home.footer.media}>
							<Typography variant="h5" color="textPrimary" gutterBottom>
								{text.home.footer.media}
							</Typography>
							<ul>
								<Link href={githubInfo.html_url} target="_blank" rel="noopener" color="textPrimary">
									<GitHubIcon className={classes.icon}/>
								</Link>
							</ul>
						</Grid>
					</Grid>
					<Box mt={5}>
						<Copyright />
					</Box>
				</Container>
				{/* End footer */}
			</Container>
		</Grid>
	)
}

App.propTypes = {
	githubInfo: PropTypes.object,
	githubRepositories: PropTypes.array
}

export default App
