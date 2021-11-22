import axios from 'axios';

export const getList = () => {
    return axios.get('/list')
}

export const getSearchList = (searchterm) => {
    return axios.get(`/search?candidate=${searchterm}`)
}

export const getArchiveList = (archive) => {
    return axios.get(`/archive?archived=${archive}`)
}

export const getArchiveStatus = (candidate, archive) => {
    return axios.get(`/statusArchive/${candidate}?archived=${archive}`)
}