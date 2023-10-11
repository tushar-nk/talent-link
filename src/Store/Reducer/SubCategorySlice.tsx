import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  CreateSubCategoryAPI,
  GetAllActiveCategoriesAPI,
  GetAllSubCategoryAPI,
  getSubCategoryById,
  hardDeleteSubCategoryAPI,
  softDeleteSubCategoryAPI,
  updateSubCategoryAPI
} from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'

const initialState = {
  createSubCategory: {
    data: []
  },
  activeCategories: {
    data: []
  },
  allTableSubCategory: {
    data: []
  },
  softDeleteSubCategory: {
    data: []
  },
  hardDeleteSubCategory: {
    data: []
  },
  UpdateSubCategory: {
    data: []
  },
  GetSubCategoryId: {
    data: []
  }
}

export const getAllActiveCategories: any = createAsyncThunk('getAllActiveCategories', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllActiveCategoriesAPI(values)

    dispatch(setLoading(false))
    // console.log(result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error) {
    if (error?.status == 400) {
      return error
    } else {
      throw error
    }
  }
})

export const createSubCategory: any = createAsyncThunk('createSubCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await CreateSubCategoryAPI(values)
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

export const getAllSubCategory: any = createAsyncThunk('getAllSubCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllSubCategoryAPI(values)
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

export const GetSubCategoryById: any = createAsyncThunk('GetSubCategoryById', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await getSubCategoryById(values)
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
    dispatch(
      setMessage({
        text: errorMessage,
        type: AlertEnum.Error
      })
    )
    throw error
  }
})

export const updateSubCategory: any = createAsyncThunk('updateSubCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await updateSubCategoryAPI(values)
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

export const softDelete: any = createAsyncThunk('softDelete', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await softDeleteSubCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      dispatch(getAllSubCategory())

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

export const hardDelete: any = createAsyncThunk('hardDelete', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await hardDeleteSubCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      dispatch(getAllSubCategory())
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

export const SubCategorySlice = createSlice({
  name: 'SubCategorySlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(createSubCategory.fulfilled, (state, action) => {
      state.createSubCategory = action.payload
    })
    builder.addCase(getAllActiveCategories.fulfilled, (state, action) => {
      console.log(action.payload)
      state.activeCategories = {
        data: action.payload.data.data
      }
    })
    builder.addCase(getAllSubCategory.fulfilled, (state, action) => {
      state.allTableSubCategory = action.payload
    })
    builder.addCase(GetSubCategoryById.fulfilled, (state, action) => {
      state.GetSubCategoryId = action.payload
    })
    builder.addCase(updateSubCategory.fulfilled, (state, action) => {
      console.log('upateslice', action.payload)
      state.UpdateSubCategory = action.payload
    })
    builder.addCase(softDelete.fulfilled, (state, action) => {
      state.softDeleteSubCategory = action.payload
    })
    builder.addCase(hardDelete.fulfilled, (state, action) => {
      state.hardDeleteSubCategory = action.payload
    })
  }
})

export default SubCategorySlice.reducer
