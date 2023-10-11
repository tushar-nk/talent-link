import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  CreateRole,
  GetAllRole,
  GetRoleByIdAPI,
  HardDeleteRoleAPI,
  SoftDeleteRoleAPI,
  UpdateRoleAPI
} from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setMessage, setLoading } from './LayoutSice'

const initialState = {
  getallrole: {
    data: []
  },
  createRole: {
    data: []
  },
  hardDeleteRole: {
    data: []
  },
  softDeleteRole: {
    data: []
  },
  getRoleById: {
    data: []
  },
  updateRole: {
    data: []
  }
}

export const getAllRole: any = createAsyncThunk('getAllRole', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllRole(values)
    dispatch(setLoading(false))

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

export const createRoles: any = createAsyncThunk('CreateRoles', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await CreateRole(values)
    dispatch(setLoading(false))
    console.log('result', result)
    if (result?.status == 201) {
      return result?.data
    } else {
      throw result?.data
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const HardDeleteRole: any = createAsyncThunk('HardDeleteRole', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await HardDeleteRoleAPI(values)
    dispatch(setLoading(false))

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

export const SoftDeleteRole: any = createAsyncThunk('softDeleteRole', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await SoftDeleteRoleAPI(values)
    dispatch(setLoading(false))

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

export const GetRoleById: any = createAsyncThunk('GetRoleById', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetRoleByIdAPI(values)
    dispatch(setLoading(false))

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

export const UpdateRole: any = createAsyncThunk('updateRole', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await UpdateRoleAPI(values)
    dispatch(setLoading(false))

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

export const RoleSlice = createSlice({
  name: 'RolesSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllRole.fulfilled, (state, action) => {
      state.getallrole = action.payload
    }),
      builder.addCase(createRoles.fulfilled, (state, action) => {
        state.createRole = action.payload.data
      }),
      builder.addCase(HardDeleteRole.fulfilled, (state, action) => {
        state.hardDeleteRole = action.payload
      }),
      builder.addCase(SoftDeleteRole.fulfilled, (state, action) => {
        state.softDeleteRole = action.payload
      }),
      builder.addCase(GetRoleById.fulfilled, (state, action) => {
        state.getRoleById = action.payload
      }),
      builder.addCase(UpdateRole.fulfilled, (state, action) => {
        state.updateRole = action.payload
      })
  }
})

//   export const {} = RoleSlice.actions;

export default RoleSlice.reducer
