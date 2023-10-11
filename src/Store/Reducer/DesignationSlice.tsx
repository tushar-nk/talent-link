import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AddDesignationAPI,
  AllDesignationAPI,
  GetAllActiveDesignationAPI,
  SoftDeletDesignationAPI,
  HardDeletDesignationAPI,
  GetDesignationByIdAPI,
  UpdateDesignationAPI
} from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'

const initialState = {
  AddDesignationAPIfirst: {
    data: []
  },
  AllActiveDesignation: {
    data: []
  },

  AllDesignation: {
    data: []
  },

  SoftDesignation: {
    data: []
  },

  HardDesignation: {
    data: []
  },

  GetIdByDesignation: {
    data: []
  },

  UpdateDesignation: {
    data: []
  }
}

export const AddDesignation: any = createAsyncThunk('AddDesignation', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await AddDesignationAPI(values)
    dispatch(setLoading(false))
    console.log('fed', result)
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

export const getAllActiveDesignation: any = createAsyncThunk(
  'getAllActiveDesignation',
  async (values, { dispatch }) => {
    try {
      dispatch(setLoading(true))
      const result = await GetAllActiveDesignationAPI(values)

      dispatch(setLoading(false))
      console.log(result)
      if (result?.status === 200) {
        // Update this line
        return result // Assuming 'result' contains the data you want
      } else {
        throw result
      }
    } catch (error) {
      dispatch(setLoading(false))
      const errorMessage = (error as Error)?.message || 'An error occurred.'
      dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
      throw error
    }
  }
)

export const getAllDesignation: any = createAsyncThunk('getAllDesignation', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await AllDesignationAPI(values)

    dispatch(setLoading(false))
    console.log(result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const SoftDesignationData: any = createAsyncThunk('SoftDesignationData', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await SoftDeletDesignationAPI(values)

    dispatch(setLoading(false))
    console.log(result)
    if (result?.status == 200) {
      dispatch(getAllDesignation())

      // Update this line
      return result // Assuming 'result' contains the data you want
    } else {
      throw result
    }
  } catch (error) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const HardDesignationData: any = createAsyncThunk('HardDesignationData', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await HardDeletDesignationAPI(values)

    dispatch(setLoading(false))
    console.log(result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const IdByDesignation: any = createAsyncThunk('IdByDesignation', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetDesignationByIdAPI(values)

    dispatch(setLoading(false))
    console.log(result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const UpdateDesignationData: any = createAsyncThunk(' UpdateDesignationData', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await UpdateDesignationAPI(values)

    dispatch(setLoading(false))
    console.log(result)
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const DesignationSlice = createSlice({
  name: 'DesignationSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(AddDesignation.fulfilled, (state, action) => {
      state.AddDesignationAPIfirst = action.payload
    })
    builder.addCase(getAllActiveDesignation.fulfilled, (state, action) => {
      state.AllActiveDesignation = action.payload
    })
    builder.addCase(getAllDesignation.fulfilled, (state, action) => {
      state.AllDesignation = action.payload
    })
    builder.addCase(SoftDesignationData.fulfilled, (state, action) => {
      state.SoftDesignation = action.payload
    })
    builder.addCase(HardDesignationData.fulfilled, (state, action) => {
      state.HardDesignation = action.payload
    })
    builder.addCase(IdByDesignation.fulfilled, (state, action) => {
      state.GetIdByDesignation = action.payload
    })
    builder.addCase(UpdateDesignationData.fulfilled, (state, action) => {
      state.UpdateDesignation = action.payload
    })
  }
})

export default DesignationSlice.reducer
