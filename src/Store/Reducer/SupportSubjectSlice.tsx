import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AddSupportSubjectAPI,
  GetAllActiveSupportSubjectAPI,
  GetAllSupportSubjectAPI,
  GetSupportSubjectByIdAPI,
  HardDeleteSupportSubjectAPI,
  SoftDeleteSupportSubjectAPI,
  UpdateSupportSubjectAPI
} from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'

const initialState = {
  AddSupportSubject: {
    data: []
  },
  UpdateSupportSubject: {
    data: []
  },
  GetAllSupportSubject: {
    data: []
  },
  GetSupportSubjectById: {
    data: []
  },
  SoftDeleteSupportSubject: {
    data: []
  },
  HardDeleteSupportSubject: {
    data: []
  },
  GetAllActiveSupportSubject: {
    data: []
  }
}

export const addSupportSubject: any = createAsyncThunk('addSupportSubject', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await AddSupportSubjectAPI(values)
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

export const updateSupportSubject: any = createAsyncThunk('updateSupportSubject', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await UpdateSupportSubjectAPI(values)
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

export const getAllSupportSubject: any = createAsyncThunk('getAllSupportSubject', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllSupportSubjectAPI(values)
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

export const getSupportSubjectById: any = createAsyncThunk('getSupportSubjectById', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetSupportSubjectByIdAPI(values)
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

export const softDeleteSupportSubject: any = createAsyncThunk(
  'softDeleteSupportSubject',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await SoftDeleteSupportSubjectAPI(values)
      dispatch(setLoading(false))
      if (result?.status == 200) {
        dispatch(getAllSupportSubject())
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

export const hardDeleteSupportSubject: any = createAsyncThunk(
  'hardDeleteSupportSubject',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await HardDeleteSupportSubjectAPI(values)
      dispatch(setLoading(false))
      if (result?.status == 200) {
        dispatch(getAllSupportSubject())
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

export const getAllActiveSupportSubject: any = createAsyncThunk(
  'getAllActiveSupportSubject',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await GetAllActiveSupportSubjectAPI(values)
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

export const SupportSubjectSlice = createSlice({
  name: 'SupportSubjectSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(addSupportSubject.fulfilled, (state, action) => {
      state.AddSupportSubject = action.payload
    })
    builder.addCase(updateSupportSubject.fulfilled, (state, action) => {
      state.UpdateSupportSubject = action.payload
    })
    builder.addCase(getAllSupportSubject.fulfilled, (state, action) => {
      state.GetAllSupportSubject = action.payload
    })
    builder.addCase(getSupportSubjectById.fulfilled, (state, action) => {
      state.GetSupportSubjectById = action.payload
    })
    builder.addCase(softDeleteSupportSubject.fulfilled, (state, action) => {
      state.SoftDeleteSupportSubject = action.payload
    })
    builder.addCase(hardDeleteSupportSubject.fulfilled, (state, action) => {
      state.HardDeleteSupportSubject = action.payload
    })
    builder.addCase(getAllActiveSupportSubject.fulfilled, (state, action) => {
      state.GetAllActiveSupportSubject = {
        data: action.payload.data.data
      }
    })
  }
})

export default SupportSubjectSlice.reducer
