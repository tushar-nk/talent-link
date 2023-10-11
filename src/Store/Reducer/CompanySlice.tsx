import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading } from './LayoutSice'
import {
  createCompanyAPI,
  getCompanyById,
  hardDeleteCompanyAPI,
  softDeleteCompanyAPI,
  updateCompany
} from 'src/Apis/Services'

const initialState = {
  createComapny: {
    data: []
  },
  updateComapmny: {
    data: []
  },
  softDelete: {
    data: {}
  },
  hardDelete: {
    data: {}
  },
  getCompanyId: {
    data: {}
  }
}

export const CreateCompany: any = createAsyncThunk('CreateCompany', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await createCompanyAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (result) {
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const UpdateCompany: any = createAsyncThunk('UpdateCompany', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await updateCompany(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (result) {
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const SoftDeleteCompany: any = createAsyncThunk('SoftDeleteCompany', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await softDeleteCompanyAPI(values)
    dispatch(setLoading(false))
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

export const HardDeleteCompany: any = createAsyncThunk('HardDeleteCompany', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await hardDeleteCompanyAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (result) {
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const GetCompanyById: any = createAsyncThunk('GetCompanyById', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await getCompanyById(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (result) {
    if (result?.status == 400) {
      return result
    } else {
      throw result
    }
  }
})

export const CompanySlice = createSlice({
  name: 'CompanySlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(CreateCompany.fulfilled, (state, action) => {
      state.createComapny = action.payload
    })
    builder.addCase(UpdateCompany.fulfilled, (state, action) => {
      state.updateComapmny = action.payload
    })
    builder.addCase(SoftDeleteCompany.fulfilled, (state, action) => {
      state.softDelete = action.payload
    })
    builder.addCase(HardDeleteCompany.fulfilled, (state, action) => {
      state.hardDelete = action.payload
    })
    builder.addCase(GetCompanyById.fulfilled, (state, action) => {
      state.getCompanyId = action.payload
    })
  }
})

export default CompanySlice.reducer
