import { getApiNoAuth } from '../utils'

export default {
  userEmp (window, nama, jenisKelamin, tanggalLahir, nomorTelepon, email) {
    return getApiNoAuth()
      .get('employees', {
        nama:nama,
        jenisKelamin:jenisKelamin,
        tanggalLahir:tanggalLahir,
        nomorTelpon:nomorTelpon,
        email:email
      })
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  }
}
