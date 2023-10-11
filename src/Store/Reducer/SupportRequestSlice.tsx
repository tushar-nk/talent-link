import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'
import {
  GetAllSupportRequestAPI,
  SoftDeleteSupportRequestAPI,
  UpdateSupportRequestAPI,
  HardDeleteSupportRequestAPI,
  GetSupportRequestByIdAPI
} from 'src/Apis/Services'

const initialState = {
  UpdateSupportRequest: {
    data: []
  },
  GetAllSupportRequest: {
    data: []
  },
  GetSupportRequestById: {
    data: []
  },
  SoftDeleteSupportRequest: {
    data: []
  },
  HardDeleteSupportRequest: {
    data: []
  }
}

export const updateSupportRequest: any = createAsyncThunk('updateSupportRequest', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await UpdateSupportRequestAPI(values)
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

export const getAllSupportRequest: any = createAsyncThunk('getAllSupportRequest', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllSupportRequestAPI(values)
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

export const getSupportRequestById: any = createAsyncThunk(
  'getSupportRequestById',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await GetSupportRequestByIdAPI(values)
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
  }
)

export const softDeleteSupportRequest: any = createAsyncThunk(
  'softDeleteSupportRequest',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await SoftDeleteSupportRequestAPI(values)
      dispatch(setLoading(false))
      if (result?.status == 200) {
        dispatch(getAllSupportRequest())
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
  }
)

export const hardDeleteSupportRequest: any = createAsyncThunk(
  'hardDeleteSupportRequest',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await HardDeleteSupportRequestAPI(values)
      dispatch(setLoading(false))
      if (result?.status == 200) {
        dispatch(getAllSupportRequest())
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
  }
)

export const SupportRequestSlice = createSlice({
  name: 'SupportRequestSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(updateSupportRequest.fulfilled, (state, action) => {
      state.UpdateSupportRequest = action.payload
    })
    builder.addCase(getAllSupportRequest.fulfilled, (state, action) => {
      state.GetAllSupportRequest = action.payload
    })
    builder.addCase(getSupportRequestById.fulfilled, (state, action) => {
      state.GetSupportRequestById = action.payload
    })
    builder.addCase(softDeleteSupportRequest.fulfilled, (state, action) => {
      state.SoftDeleteSupportRequest = action.payload
    })
    builder.addCase(hardDeleteSupportRequest.fulfilled, (state, action) => {
      state.HardDeleteSupportRequest = action.payload
    })
  }
})

export default SupportRequestSlice.reducer
