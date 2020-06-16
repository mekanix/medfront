export default class GalleryStore {
  constructor(detail, list) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    this.list = list[0]
    this.setList = list[1]
  }

  fetch = async (name) => {
    try {
      const response = await window.rest.get(`/gallery/album/${name}`)
      this.setDetail({
        ...this.detail,
        ...response.data,
      })
      return { ...response.data, ok: true }
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  fetchAll = async (page = 0, perpage = 10) => {
    try {
      const response = await window.rest.get(`/gallery`)
      this.setList({
        ...this.list,
        ...response.data,
      })
      return {
        ...response.data,
        ok: true
      }
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  create = async (data) => {
    try {
      const response = await window.rest.post(`/gallery`, data)
      this.setList({
        ...this.list,
        data: [
          ...this.list.data,
          ...response.data,
        ],
      })
      return {
        ...response.data,
        ok: true
      }
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  step = (newStep) => {
    this.setDetail({ ...this.detail, step: newStep })
  }
}
