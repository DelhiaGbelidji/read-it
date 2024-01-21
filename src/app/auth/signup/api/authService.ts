import {Type_SignUp_Data} from '@/types'
import supabase from '@/utils/supabase'

const register = async (body: Omit<Type_SignUp_Data, 'confirmPassword'>) => {
  return await supabase.from('users').insert(body)
}

const AuthService = {register}

export default AuthService
