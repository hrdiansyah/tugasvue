import { getApiNoAuth } from '../utils'

export default {
  getProject(window) {
    return getApiNoAuth()
      .get('projects',{
        
      })
      .then(function (response) {
        console.log(response)
        return response.data
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  postProject(window, jangka, namaProject, tanggalProject, ketuaProject, wakilProject){
        return getApiNoAuth()
        .post('projects',{
            jangka : jangka,
            namaProject : namaProject,
            tanggalProject : tanggalProject,
            ketuaProject : ketuaProject,
            wakilProject : wakilProject
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    deleteProject(window, id){
        return getApiNoAuth()
        .delete('/projects/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    putProject(window, id, jangka, namaProject, tanggalProject, ketuaProject, wakilProject) {
      return getApiNoAuth()
      .put('/projects/'+id ,{
        jangka : jangka,
        namaProject : namaProject,
        tanggalProject : tanggalProject,
        ketuaProject : ketuaProject,
        wakilProject : wakilProject
      })
      .then(function (response) {
        console.log(response)
        return response.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
}

