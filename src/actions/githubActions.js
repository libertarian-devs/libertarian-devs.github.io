import axios from 'axios'
import toastr from 'toastr'
import * as githubConstants from '../constants/githubConstants'
import { useTranslation } from 'react-i18next'

const api = axios.create({
	baseURL: 'https://api.github.com/orgs/libertarian-devs',
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	},
})

export const githubReposLoadSuccess = (repositories = []) =>
	({ type: githubConstants.GITHUB_REPOS_LOAD_SUCCESS, repositories })

export const githubReposLoadFail = (repositories = []) =>
	({ type: githubConstants.GITHUB_REPOS_LOAD_FAIL, repositories })


export const loadGithubProjects = () => {
	return (dispatch) => {
		return api.get('/repos')
			.then((repositories) => {
				dispatch(githubReposLoadSuccess(repositories.data))
			})
			.catch(() => {
				const { t } = useTranslation()
				let text = {
					error: t('error')
				}

				toastr.error(text.error.githubInfo)
				dispatch(githubReposLoadFail())
			})
	}
}

export const githubInfoLoadSuccess = (info = {}) =>
	({ type: githubConstants.GITHUB_INFO_LOAD_SUCCESS, info})

export const githubInfoLoadFail = (info = {}) =>
	({ type: githubConstants.GITHUB_INFO_LOAD_FAIL, info})

export const loadGithubInfo = () => {
	return (dispatch) => {
		return api.get('')
			.then((info) => {
				dispatch(githubInfoLoadSuccess(info.data))
			})
			.catch(() => {
				const { t } = useTranslation()
				let text = {
					error: t('error')
				}

				toastr.error(text.error.githubRepos)
				dispatch(githubInfoLoadFail())
			})
	}
}