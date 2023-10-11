import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'
import {
  AdminUserTable,
  CreateUserAPI,
  HardDeleteAdmin,
  SoftDeleteAdmin,
  UpdateAdmin,
  getAdminById,
  getAllActiveAdminUser
} from 'src/Apis/Services'

const initialState = {
  getAllAdminUser: {
    data: []
  },
  createUser: {
    data: []
  },
  getAllActiveUser: {
    data: []
  },
  SoftDeleteUser:{
    data:[]
  },
  HardDeleteUser:{
    data:[]
  },
  AdminUserUpdate:{
    data:[]
  },
  GetAdminUserId:{
    data:[]
  }
}

export const CreateUser: any = createAsyncThunk('CreateUser', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    console.log("apis" ,CreateUserAPI)
    const result = await CreateUserAPI(values)
    dispatch(setLoading(false))
    console.log('create', result)
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (result) {
    // console.log('error', result)
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const getAllActiveRole: any = createAsyncThunk('getAllActiveRole', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await getAllActiveAdminUser(values)
    dispatch(setLoading(false))
    console.log('result', result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    throw error
  }
})

export const getAllAdminUserTable: any = createAsyncThunk('getAllAdminUserTable', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await AdminUserTable(values)
    dispatch(setLoading(false))
    console.log('result', result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const softDeleteUser: any = createAsyncThunk('softDelete', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await SoftDeleteAdmin(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      dispatch(getAllAdminUserTable())
      return result
    } else {
      throw result
    }
  } catch (result) {
    // console.log('error', result)
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const hardDeleteUser: any = createAsyncThunk('softDelete', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await HardDeleteAdmin(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      dispatch(getAllAdminUserTable())
      return result
    } else {
      throw result
    }
  } catch (result) {
    // console.log('error', result)
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const GetAdminById: any = createAsyncThunk('GetAdminById', async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await getAdminById(values)
      dispatch(setLoading(false))
      console.log('result', result)
      if (result?.status == 200) {
        return result
      } else {
        throw result
      }
    } catch (error: unknown) {
      dispatch(setLoading(false))
      const errorMessage = (error as Error)?.message || 'An error occurred.'
      dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
      throw error
    }
  })

  export const updateAdminUser: any = createAsyncThunk('updateAdminUser', async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await UpdateAdmin(values)
      dispatch(setLoading(false))
      console.log('result', result)
      if (result?.status == 201) {
        return result
      } else {
        throw result
      }
    } catch (error: unknown) {
      dispatch(setLoading(false))
      const errorMessage = (error as Error)?.message || 'An error occurred.'
      dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
      throw error
    }
  })



export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getAllAdminUserTable.fulfilled, (state, action) => {
      state.getAllAdminUser = action.payload
    })
    builder.addCase(CreateUser.fulfilled, (state, action) => {
    //   console.log('joke', action.payload)
      state.createUser =  action.payload
    })
    builder.addCase(getAllActiveRole.fulfilled, (state, action) => {
      console.log(action.payload)
      state.getAllActiveUser = {
        data: action.payload.data.data
      }
    })
    builder.addCase(GetAdminById.fulfilled, (state, action) => {
        state.GetAdminUserId = action.payload
      })
      builder.addCase(updateAdminUser.fulfilled, (state, action) => {
        state.AdminUserUpdate = action.payload
      })
  }
})

//   export const {categoryData} = SubCategorySlice.actions
export default UserSlice.reducer
