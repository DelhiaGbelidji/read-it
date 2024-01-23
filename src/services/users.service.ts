import {Type_SignUp_Data} from '@/types'
import supabase from '@/utils/supabase'

//todo Modifier le type du body pour créer le user dans la bdd
const create = async (body: Omit<Type_SignUp_Data, 'confirm_password'>) => {
  return await supabase.from('users').insert(body)
}

const UsersService = {create}

export default UsersService
