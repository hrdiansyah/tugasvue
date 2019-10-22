import { getApiNoAuth } from '../utils'

export default {
  getEmpl(window) {
    return getApiNoAuth()
      .get('employees',{
        
      })
      .then(function (response) {
        console.log(response)
        return response.data
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  postEmp(window, nama, jenisKelamin, tanggalLahir, nomorTelepon, email){
        return getApiNoAuth()
        .post('employees',{
            nama : nama,
            jenisKelamin : jenisKelamin,
            tanggalLahir : tanggalLahir,
            nomorTelepon : nomorTelepon,
            email : email
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    deleteEmp(window, id){
        return getApiNoAuth()
        .delete('/employees/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    putEmp(window, id, nama, jenisKelamin, tanggalLahir, nomorTelepon, email) {
      return getApiNoAuth()
      .put('/employees/'+id ,{
          nama : nama,
          jenisKelamin : jenisKelamin,
          tanggalLahir : tanggalLahir,
          nomorTelepon : nomorTelepon,
          email : email
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

